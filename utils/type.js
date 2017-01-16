exports.fontSize = {
  option: 'fontSize',
  prop: 'font-size'
}

exports.lineHeight = {
  option: 'lineHeight',
  prop: 'line-height'
}

exports.fontStyle = {
  prop: 'font-style',
  vals: [
    'normal',
    'italic'
  ]
}

// exports.fontStyle = {
//   prefix: 'fs',
//   values: [
//     'normal',
//     'italic'
//   ],
//   method: val => `font-style:${val}`
// }

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
    {
      abr: 'bl',
      val: 'baseline'
    },
    'top',
    'middle',
    'bottom'
  ]
}

exports.textColumn = {
  option: 'textColumns',
  prefix: 'tc',
  prop: 'columns'
}
