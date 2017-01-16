exports.merge = (...props) => Object.assign({}, ...props)

var abbreviate = (str = '') => {
  return str.split('-').map(piece => piece[0]).join('')
}

exports.abbreviateProp = (prop = '') => {
  return Array.isArray(prop)
    ? abbreviate(prop.join('-'))
    : abbreviate(prop)
}

// exports.flatten = (a = [], b) => {
//   return Array.isArray(b) ? [...a, ...b] : [...a, b]
// }

exports.flatten = (a = [], b) => {
  return a.concat(b)
}

var depunct = val => String(val).replace('.', '-')

var isNumeric = n => !isNaN(parseFloat(n)) && isFinite(n)

exports.sanitize = val => {
  return isNumeric(val) ? depunct(val) : abbreviate(val)
}

exports.hasOnlyObjects = (obj, type) => {
  return Object.keys(obj).every(key => {
    return typeof obj[key] === 'object' && !(obj[key] instanceof Array)
  })
}

exports.objToArr = obj => {
  return Object.keys(obj).map(key => obj[key])
}

exports.alwaysArr = val => {
  return Array.isArray(val) ? val : [val]
}

exports.strip = (str = '') => {
  return str.replace(/(\r\n|\n|\r|\t|\s{2,})/gm,'').trim()
}
