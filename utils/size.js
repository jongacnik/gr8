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
  return {
    prop: {
      ar: 'padding-top'
    },
    vals: options.aspectRatio,
    transform: v => v + '%;content:"";display:block',
    tail: ':before'
  }
}
