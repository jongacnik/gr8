exports.column = {
  prop: {
    c: 'width'
  },
  vals: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  transform: v => Math.round((v / 12 * 100) * 100000) / 100000,
  unit: '%'
}

exports.split = {
  prop: {
    s: 'width'
  },
  vals: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  transform: v => Math.round((1 / v * 100) * 100000) / 100000,
  unit: '%'
}

exports.offset = {
  prop: {
    co: 'margin-left'
  },
  vals: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  transform: v => Math.round((v / 12 * 100) * 100000) / 100000,
  unit: '%'
}
