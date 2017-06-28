var prefill = require('../helpers').prefill

var sliceVals = prefill(1, 12)

exports.split = {
  prefix: 's',
  prop: 'width',
  unit: '%',
  vals: sliceVals,
  transform: function (val) {
    return (1 / val) * 100
  }
}

exports.size = {
  option: 'size',
  prop: ['width', 'height'],
  unit: '%'
}

exports.viewportWidth = {
  option: 'viewport',
  prefix: 'vw',
  prop: 'width',
  unit: 'vw'
}

exports.viewportHeight = {
  option: 'viewport',
  prefix: 'vh',
  prop: 'height',
  unit: 'vh'
}

exports.viewportMinWidth = {
  option: 'viewport',
  prefix: 'vwmn',
  prop: 'min-width',
  unit: 'vw'
}

exports.viewportMinHeight = {
  option: 'viewport',
  prefix: 'vhmn',
  prop: 'min-height',
  unit: 'vh'
}

exports.viewportMaxWidth = {
  option: 'viewport',
  prefix: 'vwmx',
  prop: 'max-width',
  unit: 'vw'
}

exports.viewportMaxHeight = {
  option: 'viewport',
  prefix: 'vhmx',
  prop: 'max-height',
  unit: 'vh'
}

exports.aspect = {
  option: 'aspect',
  prefix: 'ar',
  declaration: function (val) {
    return '\
      content:"";\
      display:block;\
      padding-top:' + val + (val ? '%' : '') + '\
    '
  }
}
