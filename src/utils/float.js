exports.float = {
  prop: 'float',
  vals: [
    'left',
    'right',
    'none'
  ]
}

exports.clear = {
  prefix: 'cf',
  suffix: ':after',
  declaration: '\
    content:"";\
    display:block;\
    clear:both\
  '
}
