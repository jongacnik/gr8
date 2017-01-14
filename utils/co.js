module.exports = {
  prefix: 'co',
  prop: 'margin-left',
  unit: '%',
  val: [...Array(13).keys()],
  transform: val => (val / 12) * 100
}
