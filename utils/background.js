exports.size = {
  prefix: 'bgs',
  prop: 'background-size',
  vals: [
    {
      abr: 'c',
      val: 'cover'
    },
    {
      abr: 'ct',
      val: 'contain'
    }
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
    {
      abr: 'x',
      val: 'repeat-x'
    },
    {
      abr: 'y',
      val: 'repeat-y'
    }
  ]
}
