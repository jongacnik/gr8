var hash = require('string-hash')
var squish = require('object-squish')

function isFcn (val) {
  return typeof val === 'function'
}

function isStr (val) {
  return typeof val === 'string'
}

function isArr (val) {
  return Array.isArray(val)
}

function isObj (val) {
  return typeof val === 'object' && !(val instanceof Array)
}

function isNum (val) {
  return !isNaN(parseFloat(val)) && isFinite(val)
}

function exists (val) {
  return val !== undefined && (val === '' || val === 0 || val)
}

function flatten (a, b) {
  a = a || []
  return a.concat(b)
}

function removeEmpty (util) {
  return util
}

function first (arr) {
  arr = arr || []
  return arr.shift()
}

function firstKeyVal (obj) {
  obj = obj || {}
  var firstKey = first(Object.keys(obj))
  return {
    key: firstKey,
    val: obj[firstKey]
  }
}

// given: { super: 'awsm' }
// -> { key: 'super', val: 'awsm' }
// given: 'super'
// -> { val: 'super' }
function getValObj (val) {
  return isObj(val) ? firstKeyVal(val) : { val: val }
}

function objToArr (obj) {
  return isObj(obj) ? Object.keys(obj).map(function (key) {
    return obj[key]
  }) : obj
}

// expects: { key: 'nice', val: 'cool' } or { val: 'cool' }
function getKeyOrVal (obj) {
  obj = obj || {}
  return exists(obj.key) ? obj.key : sanitize(obj.val)
}

function xtend (target, source){
  target = target || {}
  for (var prop in source) {
    if (typeof source[prop] === 'object' && !source[prop] instanceof Array) {
      target[prop] = xtend(target[prop], source[prop])
    } else {
      target[prop] = source[prop]
    }
  }
  return target
}

function extend (target, source) {
  return xtend(xtend({}, target), source)
}

function abbreviation (str) {
  str = str || ''
  return str.split('-').map(function (piece) {
    return piece[0]
  }).join('')
}

function abbreviate (prop) {
  prop = prop || ''
  return isArr(prop)
    ? abbreviation(prop.join('-'))
    : abbreviation(prop)
}

function depunct (val) {
  return String(val).replace('.', '-')
}

function sanitize (val) {
  return isNum(val) ? depunct(val) : abbreviation(val)
}

// Determines if an object is a gr8 util object
// by checking if specific object keys exist.
function isUtil (obj) {
  if (!isObj(obj)) return false
  var utilKeys = [
    'prefix', 'prop', 'unit', 'vals', 'transform', 'declaration'
  ]
  return Object.keys(obj).some(function (key) {
    return (utilKeys.indexOf(key) > -1)
  })
}

// always returns an array
function alwaysArr (val) {
  return isArr(val) ? val : [val]
}

// custom whitespace strip for pretty css
function strip (str) {
  str = str || ''
  return str.replace(/(\r\n|\n|\r|\t|\s{2,})/gm,'').trim()
}

function prefill (start, end) {
  var arr = []
  for (var i = start; i <= end; i++) {
    arr.push(i)
  }
  return arr
}

module.exports = {
  hash: hash,
  squish: squish,
  isFcn: isFcn,
  isStr: isStr,
  isArr: isArr,
  isObj: isObj,
  isUtil: isUtil,
  exists: exists,
  flatten: flatten,
  extend: extend,
  removeEmpty: removeEmpty,
  first: first,
  firstKeyVal: firstKeyVal,
  abbreviate: abbreviate,
  depunct: depunct,
  sanitize: sanitize,
  strip: strip,
  alwaysArr: alwaysArr,
  prefill: prefill,
  getKeyOrVal: getKeyOrVal,
  objToArr: objToArr,
  getValObj: getValObj
}
