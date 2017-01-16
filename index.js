var defaults = require('./src/defaults')
var {
  merge,
  flatten,
  isUtil,
  sanitize,
  abbreviate,
  alwaysArr,
  strip,
  removeEmpty
} = require('./src/helpers')

module.exports = (utils, options = {}) => {
  var opts = merge(options, defaults)

  // flattens deep utils:
  // { padding: {}, paddingX: {}, special: opts => [ {}, {} ] }
  // -> [{}, {}, {}, {}]
  function formatDeepUtil (util) {
    return Object.keys(util).map(key => {
      return typeof util[key] === 'function'
        ? util[key](opts)
        : util[key]
    }).reduce(flatten, [])
  }

  function formatUtil (util) {
    return isUtil(util) ? util : formatDeepUtil(util)
  }

  function setDefaults (util) {
    return opts[util.option]
      ? merge(util, { vals: opts[util.option] })
      : util
  }

  function hasVals (vals) {
    return vals || vals === 0
  }

  function hasAbr (val) {
    return val.abr !== undefined && (val.abr === '' || val.abr)
  }

  function getPrefixVal (val) {
    return hasAbr(val) ? val.abr : sanitize(val)
  }

  function getFallbackUnit (unit) {
    return unit === true ? opts.unit : (unit || '')
  }

  function makePrefixer (prefix, prop, hyphenate) {
    return val => [
      prefix || abbreviate(prop),
      val || ''
    ].join(hyphenate ? '-' : '')
  }

  function makeDeclarationBlock (util, val) {
    var { prop, unit, transform } = util
    var valTransformed = transform ? transform(val) : val
    var valUnit = val ? getFallbackUnit(unit) : ''
    var valString = valTransformed + valUnit

    return Array.isArray(prop)
      ? prop.map(prop => makeDeclaration(prop, valString)).join(';')
      : makeDeclaration(prop, valString)
  }

  function makeDeclaration (prop, val) {
    return prop + ':' + val
  }

  function makeRule (prefix, declarationBlock) {
    return '.' + prefix + '{' + declarationBlock + '}'
  }

  function makeStyle (util) {
    var { declaration, prefix, hyphenate, prop, vals } = util

    if (hasVals(vals)) {
      var makePrefix = makePrefixer(prefix, prop, hyphenate)
      return alwaysArr(vals).map(val => {
        var selectorPrefix = makePrefix(getPrefixVal(val))
        var declarationBlock = declaration
          ? declaration(val.val || val)
          : makeDeclarationBlock(util, (val.val || val))

        return makeRule(selectorPrefix, strip(declarationBlock))
      })
    } else {
      return (prefix && declaration)
        ? makeRule(prefix, strip(declaration))
        : ''
    }
  }

  function makeStyles (util) {
    return Array.isArray(util.prop)
      ? util.prop.map(prop => (
          makeStyle(merge(util, { prop: prop }))
        )).reduce(flatten)
      : makeStyle(util)
  }

  function formatBreakpoints (breakpoints, max) {
    return Object.keys(breakpoints)
      .map(breakpoint => ({
        key: breakpoint,
        value: breakpoints[breakpoint]
      }))
      .sort((a, b) => {
        if (max) {
          return parseInt(a.value, 10) > parseInt(b.value, 10) ? -1 : 1
        } else {
          return parseInt(a.value, 10) < parseInt(b.value, 10) ? -1 : 1
        }
      })
  }

  function makeResponsive (styles) {
    if (!opts.breakpoints) return styles
    var breakpoints = formatBreakpoints(opts.breakpoints, opts.max)
    var minmax = opts.max ? 'max' : 'min'
    var responsiveStyles = breakpoints.map(breakpoint => {
      var mediaQuery = '@media (' + minmax + '-width: ' + breakpoint.value + ')'
      return [`${mediaQuery}{`].concat(styles.map(style => {
        return style.replace(
          /^\.?(.+?)(?=[{:])/,
          `[${breakpoint.key}~="$1"]`
        )
      }), ['}'])
    })

    return styles.concat(responsiveStyles).reduce(flatten, [])
  }

  function generate (utils) {
    var styles = utils
      .map(formatUtil)
      .reduce(flatten, [])
      .map(setDefaults)
      .map(makeStyles)
      .reduce(flatten, [])
      .filter(removeEmpty)

    return opts.responsive
      ? makeResponsive(styles)
      : styles
  }

  var styles = utils ? generate(utils) : ''

  /**
   * Public
   */

  function toString () {
    return styles.join('\n')
  }

  function attach () {
    var styleNode = document.createElement('style')
    styleNode.innerHTML = toString()
    document.head.appendChild(styleNode)
  }

  return {
    toString: toString,
    attach: attach
  }
}
