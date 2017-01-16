exports.displayFlex = {
  prefix: 'x',
  declaration: `display:flex`
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
    {
      abr: 'b',
      val: 'space-between'
    },
    {
      abr: 'a',
      val: 'space-around'
    },
    {
      abr: 's',
      val: 'flex-start'
    },
    {
      abr: 'e',
      val: 'flex-end'
    }
  ]
}

exports.wrap = {
  prefix: 'xw',
  prop: 'flex-wrap',
  vals: [
    {
      abr: '',
      val: 'wrap'
    },
    {
      abr: 'r',
      val: 'wrap-reverse'
    },
    'nowrap'
  ]
}

exports.flex = {
  prefix: 'x',
  prop: 'flex',
  vals: [
    'initial',
    {
      abr: 'x',
      val: '1'
    },
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
    {
      abr: 't',
      val: -1
    },
    {
      abr: 'b',
      val: 99
    }
  ]
}
