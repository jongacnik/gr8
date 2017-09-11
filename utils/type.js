exports.fontSize = function (options) {
  return {
    prop: 'font-size',
    vals: options.fontSize,
    unit: options.unit
  }
}

exports.lineHeight = function (options) {
  return {
    prop: 'line-height',
    vals: options.lineHeight
  }
}

exports.fontStyle = {
  prop: 'font-style',
  vals: [
    'normal',
    'italic'
  ]
}

exports.fontWeight = {
  prop: 'font-weight',
  vals: [
    'normal',
    'bold'
  ]
}

exports.textAlign = {
  prop: 'text-align',
  vals: [
    'left',
    'center',
    'right',
    'justify'
  ]
}

exports.textOverflow = {
  prop: 'text-overflow',
  vals: [
    'initial',
    'clip',
    'ellipsis'
  ]
}

exports.textDecoration = {
  prop: 'text-decoration',
  vals: [
    'underline',
    'overline',
    'line-through',
    'none'
  ]
}

exports.textTransform = {
  prop: 'text-transform',
  vals: [
    'uppercase',
    'lowercase',
    'capitalize',
    'none'
  ]
}

exports.verticalAlign = {
  prop: 'vertical-align',
  vals: [
    { bl: 'baseline' },
    'top',
    'middle',
    'bottom'
  ]
}

exports.whiteSpace = {
  prop: 'white-space',
  vals: [
    'normal',
    { nw: 'nowrap' },
    'pre',
    'inherit'
  ]
}

exports.textColumn = function (options) {
  return {
    prop: {
      tc: 'columns'
    },
    vals: options.textColumn
  }
}
