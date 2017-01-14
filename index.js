var defaults = require('./src/defaults')
var { merge, abbreviate, depunct, flatten } = require('./src/helpers')

var gr8 = (utils, options = {}) => {
  var opts = merge(options, defaults)

  var setVals = util => {
    return opts[util.opt] ? merge(util, { val: opts[util.opt] }) : util
  }

  var makePrefixer = (prefix, prop) => {
    return val => (prefix || abbreviate(prop)) + depunct(val)
  }

  var fallbackUnit = unit => {
    return unit || (unit === false ? '' : opts.unit)
  }

  var makeDeclaration = (util) => {
    var { prop, val, unit, transform } = util
    var realVal = transform ? transform(val) : val
    return `${prop}:${realVal}${val ? fallbackUnit(unit) : ''}`
  }

  var makeRule = (prefix, declaration) => {
    return `.${prefix}{${declaration}}`
  }

  var makeStyle = (util) => {
    var { prefix, suffix, prop, val } = util
    var prefixer = makePrefixer(prefix, prop)
    return val.map((val, i) => {
      return makeRule(
        prefixer(suffix && suffix[i] || val),
        makeDeclaration(util)
      )
    })
  }

  function makeStyles (util) {
    return Array.isArray(util.prop)
      ? util.prop.map(prop => (
          makeStyle(merge(util, { prop: prop }))
        )).reduce(flatten)
      : makeStyle(util)
  }

  return utils
    ? utils
        .map(setVals)
        .map(makeStyles)
        .reduce(flatten)
    : ''
}

// test

var utils = require('./utils')
console.log(utils)
// var styles = gr8(utils)

// console.log(JSON.stringify(styles, null, 2))
