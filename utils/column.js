exports.column = {
  prefix: 'c',
  prop: 'width',
  unit: '%',
  vals: [...Array(13).keys()],
  transform: val => (val / 12) * 100
}

exports.offset = {
  prefix: 'co',
  prop: 'margin-left',
  unit: '%',
  vals: [...Array(13).keys()],
  transform: val => (val / 12) * 100
}
