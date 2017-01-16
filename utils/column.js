var { prefill, flatten } = require('../src/helpers')

var columns = 12
var columnsVals = prefill(columns)

exports.column = {
  prefix: 'c',
  prop: 'width',
  unit: '%',
  vals: columnsVals,
  transform: val => (val / columns) * 100
}

exports.offset = {
  prefix: 'co',
  prop: 'margin-left',
  unit: '%',
  vals: columnsVals,
  transform: val => (val / columns) * 100
}

/**
 * Nested columns/offsets are a special case in gr8.
 * Options are passed in at runtime to check for
 * a `nested: true` flag. If exists, classes are
 * generated using prefix/declaration.
 */

exports.nestedColumn = opts => opts.nested ? columnsVals.map(val => {
  var cols = [...Array(val).keys()].map(x => ++x)
  return cols.map(col => {
    return {
      prefix: `c${val} .c${col}`,
      declaration: `width:${(col / val) * 100}%`
    }
  })
}).reduce(flatten, []) : false

exports.nestedOffset = opts => opts.nested ? columnsVals.map(val => {
  var cols = [...Array(val).keys()].map(x => ++x)
  return cols.map(col => {
    return {
      prefix: `co${val} .co${col}`,
      declaration: `margin-left:${(col / val) * 100}%`
    }
  })
}).reduce(flatten, []) : false
