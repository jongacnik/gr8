var lib = require('./helpers')
var defaultUtils = require('./utils')
var defaultOptions = require('./defaults')
var getBreakpoints = require('./breakpoints')

module.exports = function (options) {
  var opts = lib.extend(defaultOptions, options)
  var utilities = defaultUtils.slice()

  function getFallbackUnit (unit) {
    unit = unit || ''
    return unit === true ? opts.unit : unit
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
    var val = getTransformedVal(util.val, util.transform)
    var unit = getUnit(util.val, util.unit)

    return lib.alwaysArr(util.prop).map(function (prop) {
      return makeDeclaration(prop, (val + unit))
    }).join(';')
  }

  function makeClassSelector (scope, prefix) {
    return '.' + (scope ? scope + '-' + prefix : prefix)
  }

  function makeAttrSelector (scope, prefix) {
    return '[' + scope + '~="' + prefix + '"]'
  }

  function makeSelector (prefix, scope) {
    return lib.alwaysArr(prefix).map(function (p) {
      if (scope && opts.attribute) {
        return makeAttrSelector(scope, p)
      } else {
        return makeClassSelector(scope, p)
      }
    }).join(' ')
  }

  function makeRule (util, scope) {
    return makeSelector(util.prefix, scope)
      + util.suffix
      + '{'
      + lib.strip(util.declaration)
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

  function canGenerate (util) {
    function hasPrefixOrProp () {
      return lib.exists(util.prefix) || lib.exists(util.prop)
    }

    return lib.exists(util.vals) && hasPrefixOrProp()
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
          : makeDeclarationBlock(lib.extend(util, { val: thisValObj.val }))
        return makeRuleObj(thisPrefix, util.suffix, thisDeclaration)
      })
    } else {
      console.warn('\
        Unable to generate styles for ' + JSON.stringify(util) + '.\
        Missing values, prefix, or prop.\
      ')
    }
  }

  function getUtil (util) {
    return simpleUtil(util) || complexUtil(util)
  }

  function expandUtil (util) {
    if (lib.isUtil(util)) {
      return util
    } else if (lib.isFcn(util)) {
      return lib.alwaysArr(util(opts)).map(expandUtil)
    } else if (lib.isArr(util) || lib.isObj(util)) {
      return lib.objToArr(util).map(expandUtil).reduce(lib.flatten, [])
    }
  }

  function setUtilOption (util) {
    return opts[util.option]
      ? lib.extend(util, { vals: opts[util.option]})
      : util
  }

  function formatUtil (util) {
    if (lib.isArr(util.prop)) {
      return util.prop.map(function (prop) {
        return getUtil(lib.extend(util, { prop: prop }))
      }).reduce(lib.flatten, [])
    } else {
      return getUtil(util)
    }
  }

  function getFormattedUtils () {
    var utils = utilities
      .map(expandUtil)
      .reduce(lib.flatten, [])
      .filter(lib.removeEmpty)
      .map(setUtilOption)
      .map(formatUtil)
      .reduce(lib.flatten, [])
      .filter(lib.removeEmpty)

    return utils ? utils : []
  }

  function makeCss () {
    var utils = getFormattedUtils()
    var brpts = getBreakpoints(opts)

    var css = brpts.map(function (bp) {
      return [
        bp.open,
        utils.map(function (util) {
          return makeRule(util, bp.key)
        }).join('\n'),
        bp.close
      ].join('\n')
    }).join('')

    return css.replace(/^\s*[\r\n]/gm, '')
  }

  // gr8 public api
  var api = {}

  api.add = function (util) {
    utilities.push(util)
  }

  api.toString = function () {
    return makeCss()
  }

  api.attach = function () {
    var styleNode = document.createElement('style')
    styleNode.setAttribute('data-gr8-css', '')
    styleNode.innerHTML = makeCss()
    document.head.appendChild(styleNode)
  }

  return api
}
