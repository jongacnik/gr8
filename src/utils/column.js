var prefill = require('../helpers').prefill

var columns = 12
var columnsVals = prefill(1, columns)
var offsetsVals = prefill(0, columns)

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