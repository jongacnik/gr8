exports.merge = (...props) => Object.assign({}, ...props)

var abbreviate = (str = '') => {
  return str.split('-').map(piece => piece[0]).join('')
}

exports.abbreviateProp = (prop = '') => {
  return Array.isArray(prop)
    ? abbreviate(prop.join('-'))
    : abbreviate(prop)
}

exports.flatten = (a = [], b) => {
  return a.concat(b)
}

var depunct = val => String(val).replace('.', '-')

var isNumeric = n => !isNaN(parseFloat(n)) && isFinite(n)

exports.sanitize = val => {
  return isNumeric(val) ? depunct(val) : abbreviate(val)
}

exports.isUtil = obj => {
  var utilKeys = [
    'prefix',
    'prop',
    'unit',
    'vals',
    'transform',
    'declaration'
  ]
  return Object.keys(obj).some(key => (utilKeys.indexOf(key) > -1))
}

exports.alwaysArr = val => {
  return Array.isArray(val) ? val : [val]
}

exports.strip = (str = '') => {
  return str.replace(/(\r\n|\n|\r|\t|\s{2,})/gm,'').trim()
}

exports.removeEmpty = util => util

exports.prefill = count => [...Array(count + 1).keys()]
