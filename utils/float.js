exports.float = {
  prop: 'float',
  vals: [
    'left',
    'right',
    'none'
  ]
}

exports.clear = function (options) {
  var selector = options.selector || (s => `.${s}`)
  return `${selector('cf')}:after{content:"";display:block;clear:both}`
}
