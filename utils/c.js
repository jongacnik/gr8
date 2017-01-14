module.exports = {
  prefix: 'c',
  prop: 'width',
  unit: '%',
  val: [...Array(13).keys()],
  transform: val => (val / 12) * 100
}
