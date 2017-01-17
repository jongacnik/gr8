exports.display = {
  prefix: 'x',
  declaration: 'display:flex'
}

exports.align = {
  prefix: 'xa',
  prop: 'align-items',
  vals: [
    'center',
    'baseline',
    'stretch',
    'flex-start',
    'flex-end'
  ]
}

exports.direction = {
  prefix: 'xd',
  prop: 'flex-direction',
  vals: [
    'row',
    'row-reverse',
    'column',
    'column-reverse'
  ]
}

exports.justify = {
  prefix: 'xj',
  prop: 'justify-content',
  vals: [
    'center',
    { b: 'space-between' },
    { a: 'space-around' },
    { s: 'flex-start' },
    { e: 'flex-end' }
  ]
}

exports.wrap = {
  prefix: 'x',
  prop: 'flex-wrap',
  vals: [
    { w: 'wrap' },
    { wr: 'wrap-reverse' },
    { wn: 'nowrap'}
  ]
}

exports.flex = {
  prefix: 'x',
  prop: 'flex',
  vals: [
    'initial',
    { x: '1' },
    'auto',
    'none'
  ]
}

exports.order = {
  option: 'order',
  prefix: 'xo',
  prop: 'order'
}

exports.orderSpecial = {
  prefix: 'xo',
  prop: 'order',
  vals: [
    { t: -1 },
    { b: 99 }
  ]
}
