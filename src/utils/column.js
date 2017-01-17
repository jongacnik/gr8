var flatten = require('../helpers').flatten
var prefill = require('../helpers').prefill

var columns = 12
var columnsVals = prefill(1, columns)
var offsetsVals = prefill(0, columns)
var nestedColumnsVals = prefill(1, columns - 1)

exports.column = {
  prefix: 'c',
  prop: 'width',
  unit: '%',
  vals: columnsVals,
  transform: function (val) {
    return (val / columns) * 100
  }
}

exports.offset = {
  prefix: 'co',
  prop: 'margin-left',
  unit: '%',
  vals: offsetsVals,
  transform: function (val) {
    return (val / columns) * 100
  }
}

/**
 * Nested columns/offsets are a special case in gr8.
 * Options are passed in at runtime to check for
 * a `nested: true` flag. If exists, classes are
 * generated using prefix/declaration.
 */

exports.nestedColumn = function (opts) {
  return opts.nested ? nestedColumnsVals.map(function (val) {
    var cols = prefill(1, val)
    return cols.map(function (col) {
      return {
        prefix: ['c' + val, 'c' + col],
        declaration: 'width:' + ((col / val) * 100) + '%'
      }
    })
  }).reduce(flatten, []) : []
}

exports.nestedOffset = function (opts) {
  return opts.nested ? nestedColumnsVals.map(function (val) {
    var cols = prefill(1, val)
    return cols.map(function (col) {
      return {
        prefix: ['co' + val, 'co' + col],
        declaration: 'margin-left:' + ((col / val) * 100) + '%'
      }
    })
  }).reduce(flatten, []) : []
}
