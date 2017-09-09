exports.margin = function (options) {
  return {
    prop: [
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      {
        mx: [
          'margin-left',
          'margin-right'
        ]
      },
      {
        my: [
          'margin-top',
          'margin-bottom'
        ]
      }
    ],
    vals: options.spacing,
    unit: options.unit
  }
}
