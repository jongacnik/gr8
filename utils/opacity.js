exports.opacity = function (options) {
  return {
    prop: {
      op: 'opacity'
    },
    vals: options.opacity,
    transform: v => v / 100
  }
}
