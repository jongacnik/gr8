var x = require('xtend')
var lib = require('./helpers')

var defaults = {
  opts: [
    { s: 'spacing' },
    { fs: 'fontSize' },
    { lh: 'lineHeight' }
  ],
  template: 'css'
}

var templates = {
  less: function (prefix, key, val, unit) {
    return '@' + prefix + lib.depunct(key) + ': ' + val + unit
  },
  sass: function (prefix, key, val, unit) {
    return '$' + prefix + lib.depunct(key) + ': ' + val + unit
  },
  css: function (prefix, key, val, unit) {
    return '--' + prefix + lib.depunct(key) + ': ' + val + unit
  }
}

module.exports = function (utils, getUnit, options) {
  options = x(defaults, options)

  var optObjs = options.opts.map(lib.getValObj)
  var optVals = optObjs.map(function (o) { return o.val })

  var filtered = utils.filter(function (util) {
    return optVals.indexOf(util.option) >= 0
  })

  var deduped = lib.removeDups(filtered, 'option')

  var formatted = deduped.map(function (util) {
    return {
      option: util.option,
      prefix: optObjs.find(function (o) {
        return o.val === util.option
      }).key,
      values: util.vals,
      unit: getUnit(1, util.unit)
    }
  })

  var vars = formatted.map(function (util) {
    var varArr = lib.alwaysArr(util.values).map(function (val) {
      var valObj = lib.getValObj(val)
      var key = valObj.key || valObj.val
      var unit = util.unit || ''
      return lib.isFcn(templates[options.template])
        ? templates[options.template](util.prefix, key, valObj.val, unit)
        : ''
    })
    return ['/* ' + util.option + ' */'].concat(varArr, [''])
  }).reduce(lib.flatten, [])

  if (options.template === 'css') {
    vars = [':root{'].concat(vars, ['}'])
  }

  return vars.join('\n')
}
