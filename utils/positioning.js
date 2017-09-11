exports.position = {
  prop: {
    ps: 'position'
  },
  vals: [
    'absolute',
    'relative',
    'fixed',
    'static'
  ]
}

exports.placement = {
  prop: [
    'top',
    'right',
    'bottom',
    'left'
  ],
  vals: 0
}

exports.zindex = function (options) {
  return {
    prop: {
      z: 'z-index'
    },
    vals: options.zIndex
  }
}
