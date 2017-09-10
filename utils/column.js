var ofe = require('object-from-entries')

exports.column = {
  prop: {
    c: 'width'
  },
  vals: ofe([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(v => [v, v / 12 * 100])),
  unit: '%'
}

exports.split = {
  prop: {
    s: 'width'
  },
  vals: ofe([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(v => [v, 1 / v * 100])),
  unit: '%'
}

exports.offset = {
  prop: {
    co: 'margin-left'
  },
  vals: ofe([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(v => [v, v / 12 * 100])),
  unit: '%'
}
