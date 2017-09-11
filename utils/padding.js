exports.padding = function (options) {
  return {
    prop: [
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      {
        px: [
          'padding-left',
          'padding-right'
        ]
      },
      {
        py: [
          'padding-top',
          'padding-bottom'
        ]
      }
    ],
    vals: options.spacing,
    unit: options.unit
  }
}
