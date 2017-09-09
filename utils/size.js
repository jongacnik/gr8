exports.size = function (options) {
  return {
    prop: ['width', 'height'],
    vals: options.size,
    unit: '%'
  }
}

exports.viewportWidth = function (options) {
  return {
    prop: {
      vw: 'width',
      vwmn: 'min-width',
      vwmx: 'max-width'
    },
    vals: options.viewport,
    unit: 'vw'
  }
}

exports.viewportHeight = function (options) {
  return {
    prop: {
      vh: 'height',
      vhmn: 'min-height',
      vhmx: 'max-height'
    },
    vals: options.viewport,
    unit: 'vh'
  }
}

exports.aspect = function (options) {
  var selector = options.selector || (s => `.${s}`)
  var values = Array.isArray(options.aspectRatio)
    ? options.aspectRatio
    : [options.aspectRatio]
  var declaration = 'content:"";display:block;padding-top:'
  return values.map(function (value) {
    return `${selector('ar' + value)}:before{${declaration}${value + (value ? '%' : '')};}`
  }).join('\n')
}
