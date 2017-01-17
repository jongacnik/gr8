var x = require('xtend')
var utils = require('./utils')
var defaults = require('./defaults')
var lib = require('./helpers')
var breakpoints = require('./breakpoints')
var variables = require('./variables')

module.exports = function (options) {
  options = x(defaults, options)

  function format (util) {
    if (lib.isUtil(util)) {
      return util
    } else if (lib.isFcn(util)) {
      return lib.alwaysArr(util(options)).map(format)
    } else if (lib.isArr(util) || lib.isObj(util)) {
      return lib.objToArr(util).map(format).reduce(lib.flatten, [])
    }
  }

  function setOptions (util) {
    return options[util.option]
      ? x(util, { vals: options[util.option] })
      : util
  }

  function getFallbackUnit (unit) {
    return unit === true ? options.unit : (unit || '')
  }

  function getUnit (val, unit) {
    return val ? getFallbackUnit(unit) : ''
  }

  function getTransformedVal (val, transform) {
    return lib.isFcn(transform) ? transform(val) : val
  }

  function makeDeclaration (prop, val) {
    return prop + ':' + val
  }

  function makeDeclarationBlock (util) {
    var thisTrans = getTransformedVal(util.val, util.transform)
    var thisUnit = getUnit(util.val, util.unit)
    var thisVal = thisTrans + thisUnit

    return lib.alwaysArr(util.prop).map(function (prop) {
      return makeDeclaration(prop, thisVal)
    }).join(';')
  }

  function makeClassSelector (bp, sel) {
    return '.' + (bp ? bp + '-' + sel : sel)
  }

  function makeAttrSelector (bp, sel) {
    return '[' + bp + '~="' + sel + '"]'
  }

  function makeSelector (prefix, breakpoint) {
    return lib.alwaysArr(prefix).map(function (p) {
      if (breakpoint && options.attribute) {
        return makeAttrSelector(breakpoint, p)
      } else {
        return makeClassSelector(breakpoint, p)
      }
    }).join(' ')
  }

  function makeRule (opts, breakpoint) {
    return makeSelector(opts.prefix, breakpoint)
      + opts.suffix
      + '{'
      + lib.strip(opts.declaration)
      + '}'
  }

  function makeRuleObj (prefix, suffix, declaration) {
    return {
      prefix: prefix || '',
      suffix: suffix || '',
      declaration: declaration || ''
    }
  }

  function simpleUtil (util) {
    if (util.prefix && lib.isStr(util.declaration)) {
      return makeRuleObj(util.prefix, util.suffix, util.declaration)
    }
  }

  function canGenerate(util) {
    // util must have values and prefix/prop
    return lib.exists(util.vals) &&
      (lib.exists(util.prefix) || lib.exists(util.prop))
  }

  function makePrefixer (util) {
    return function makePrefix (valObj) {
      var thisPrefix = util.prefix || lib.abbreviate(util.prop)
      var thisVal = lib.getKeyOrVal(valObj)
      return [ thisPrefix, thisVal ].join(util.hyphenate ? '-' : '')
    }
  }

  function complexUtil (util) {
    if (canGenerate(util)) {
      var makePrefix = makePrefixer(util)
      return lib.alwaysArr(util.vals).map(function (val) {
        var thisValObj = lib.getValObj(val)
        var thisPrefix = makePrefix(thisValObj)
        var thisDeclaration = lib.isFcn(util.declaration)
          ? util.declaration(thisValObj.val)
          : makeDeclarationBlock(x(util, { val: thisValObj.val }))
        return makeRuleObj(thisPrefix, util.suffix, thisDeclaration)
      })
    } else {
      console.warn('\
        Unable to generate styles for ' + JSON.stringify(util) + '.\
        Missing values, prefix, or prop.\
      ')
   }
  }

  function makeUtil (util) {
    return simpleUtil(util) || complexUtil(util)
  }

  function generate (util) {
    if (lib.isArr(util.prop)) {
      return util.prop.map(function (prop) {
        return makeUtil(x(util, { prop: prop }))
      }).reduce(lib.flatten, [])
    } else {
      return makeUtil(util)
    }
  }

  function ruleObjects (utils) {
    return utils
      .map(format)
      .reduce(lib.flatten, [])
      .filter(lib.removeEmpty)
      .map(setOptions)
      .map(generate)
      .reduce(lib.flatten, [])
      .filter(lib.removeEmpty) || []
  }

  function makeCss () {
    var rules = ruleObjects(utils)
    var bps = breakpoints(options)
    return bps.map(function (bp) {
      return [
        bp.open,
        rules.map(function (rule) {
          return makeRule(rule, bp.key)
        }).join('\n'),
        bp.close
      ].join('\n')
    }).join('')
      .replace(/^\s*[\r\n]/gm, '')
  }

  /**
   * Public
   */

  function add (util) {
    utils.push(util)
  }

  function toString () {
    return makeCss()
  }

  function attach () {
    var styleNode = document.createElement('style')
    styleNode.innerHTML = makeCss()
    document.head.appendChild(styleNode)
  }

  function vars (options) {
    // format utils w/o generating
    var formattedUtils = utils
      .map(format)
      .reduce(lib.flatten, [])
      .filter(lib.removeEmpty)
      .map(setOptions)
    return variables(formattedUtils, getUnit, options || {})
  }

  return {
    add: add,
    toString: toString,
    attach: attach,
    vars: vars
  }
}
