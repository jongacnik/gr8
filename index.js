var defaults = require('./src/defaults')
var {
  merge,
  abbreviateProp,
  sanitize,
  strip,
  flatten,
  hasOnlyObjects,
  objToArr,
  alwaysArr
} = require('./src/helpers')

var gr8 = (utils, options = {}) => {
  var opts = merge(options, defaults)

  // flattens deep utils:
  // { padding: {}, paddingX: {}, paddingY: {} }
  // -> [{}, {}, {}]
  function flattenDeepUtils (util) {
    return hasOnlyObjects(util) ? objToArr(util) : util
  }

  function setVals (util) {
    return opts[util.option] ? merge(util, { vals: opts[util.option] }) : util
  }

  function getPrefixVal (val) {
    var value = val.abr !== undefined && (val.abr === '' || val.abr)
      ? val.abr
      : val
    return sanitize(value)
  }

  function fallbackUnit (unit) {
    return unit === true ? opts.unit : (unit || '')
  }

  function makePrefixer (prefix, prop, hyphenate) {
    return (val = '') => {
      return (prefix ? prefix : abbreviateProp(prop))
        + (hyphenate ? '-' : '')
        + val
    }
  }

  function makeDeclarationBlock (util, val) {
    var { prop, unit, transform } = util
    var transformedVal = transform ? transform(val) : val
    var finalVal = `${transformedVal}${val ? fallbackUnit(unit) : ''}`

    return Array.isArray(prop)
      ? prop.map(prop => makeDeclaration(prop, finalVal)).join(';')
      : makeDeclaration(prop, finalVal)
  }

  function makeDeclaration (prop, val) {
    return `${prop}:${val}`
  }

  function makeRule (prefix, declarationBlock) {
    return `.${prefix}{${declarationBlock}}`
  }

  function makeStyle (util) {
    var { declaration, prefix, hyphenate, prop, vals } = util
    var makePrefix = makePrefixer(prefix, prop, hyphenate)

    return (vals || vals === 0) ? alwaysArr(vals).map(val => {
          var selectorPrefix = makePrefix(getPrefixVal(val))
          var declarationBlock = declaration
            ? declaration(val.val || val)
            : makeDeclarationBlock(util, (val.val || val))

          return makeRule(selectorPrefix, strip(declarationBlock))
        })
      : (prefix && declaration) ? makeRule(prefix, strip(declaration))
      : ''
  }

  function makeStyles (util) {
    return Array.isArray(util.prop)
      ? util.prop.map(prop => (
          makeStyle(merge(util, { prop: prop }))
        )).reduce(flatten)
      : makeStyle(util)
  }

  function generate (utils) {
    return utils
      .map(flattenDeepUtils)
      .reduce(flatten, [])
      .map(setVals)
      .map(makeStyles)
      .reduce(flatten, [])
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

// test
var utils = require('./utils')
var styles = gr8(utils)

console.log(styles.toString())
