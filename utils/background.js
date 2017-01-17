exports.size = {
  prefix: 'bgs',
  prop: 'background-size',
  vals: [
    { c: 'cover' },
    { ct: 'contain' }
  ]
}

exports.position = {
  prefix: 'bgp',
  prop: 'background-position',
  vals: [
    'center',
    'top',
    'right',
    'bottom',
    'left'
  ]
}

exports.repeat = {
  prefix: 'bgr',
  prop: 'background-repeat',
  vals: [
    'none',
    { x: 'repeat-x' },
    { y: 'repeat-y' }
  ]
}
