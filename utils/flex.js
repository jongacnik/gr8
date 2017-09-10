exports.display = function (options) {
  var selector = options.selector || (s => `.${s}`)
  return `${selector('x')}{display:flex}`
}

exports.align = {
  prop: {
    xa: 'align-items'
  },
  vals: [
    'center',
    'baseline',
    'stretch',
    'flex-start',
    'flex-end'
  ]
}

exports.direction = {
  prop: {
    xd: 'flex-direction'
  },
  vals: [
    'row',
    'row-reverse',
    'column',
    'column-reverse'
  ]
}

exports.justify = {
  prop: {
    xj: 'justify-content'
  },
  vals: {
    c: 'center',
    b: 'space-between',
    a: 'space-around',
    s: 'flex-start',
    e: 'flex-end'
  }
}

exports.wrap = {
  prop: {
    x: 'flex-wrap'
  },
  vals: [
    'wrap',
    'wrap-reverse',
    { wn: 'nowrap' }
  ]
}

exports.flex = {
  prop: {
    x: 'flex'
  },
  vals: [
    'initial',
    { x: '1' },
    'auto',
    'none'
  ]
}

exports.order = function (options) {
  var values = Array.isArray(options.flexOrder)
    ? options.flexOrder
    : [options.flexOrder]
  return {
    prop: {
      xo: 'order'
    },
    vals: values.concat([
      { t: -1 },
      { b: 99 }
    ])
  }
}
