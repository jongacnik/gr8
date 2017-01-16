var gr8 = require('./index')
// var utils = require('./utils')
//
// var utils = [
//   require('./utils/background'),
//   require('./utils/column'),
//   require('./utils/display'),
//   require('./utils/flex'),
//   require('./utils/float'),
//   require('./utils/index'),
//   require('./utils/margin'),
//   require('./utils/misc'),
//   require('./utils/opacity'),
//   require('./utils/overflow'),
//   require('./utils/padding'),
//   require('./utils/positioning'),
//   require('./utils/size'),
//   require('./utils/type')
// ]

var utils = [
  require('./utils/background').size,
  require('./utils/background').position,
  require('./utils/background').repeat,
  require('./utils/column').column,
  require('./utils/column').offset,
  require('./utils/column').nestedColumn,
  require('./utils/column').nestedOffset,
  require('./utils/display'),
  require('./utils/flex').display,
  require('./utils/flex').align,
  require('./utils/flex').direction,
  require('./utils/flex').justify,
  require('./utils/flex').wrap,
  require('./utils/flex').flex,
  require('./utils/flex').order,
  require('./utils/float').float,
  require('./utils/float').clear,
  require('./utils/index'),
  require('./utils/margin').margin,
  require('./utils/margin').marginX,
  require('./utils/margin').marginY,
  require('./utils/misc').cursor,
  require('./utils/misc').userSelect,
  require('./utils/misc').pointerEvents,
  require('./utils/opacity'),
  require('./utils/overflow'),
  require('./utils/padding').padding,
  require('./utils/padding').paddingX,
  require('./utils/padding').paddingY,
  require('./utils/positioning').position,
  require('./utils/positioning').placement,
  require('./utils/positioning').zindex,
  require('./utils/size').size,
  require('./utils/size').viewportWidth,
  require('./utils/size').viewportHeight,
  require('./utils/size').viewportMinWidth,
  require('./utils/size').viewportMinHeight,
  require('./utils/size').viewportMaxWidth,
  require('./utils/size').viewportMaxHeight,
  require('./utils/size').aspect,
  require('./utils/type').fontSize,
  require('./utils/type').lineHeight,
  require('./utils/type').fontStyle,
  require('./utils/type').fontWeight,
  require('./utils/type').textAlign,
  require('./utils/type').textDecoration,
  require('./utils/type').textTransform,
  require('./utils/type').verticalAlign,
  require('./utils/type').textColumn
]

utils.push({
  prefix: 'yo',
  prop: 'border-color',
  vals: ['red', 'green', 'blue']
})

// should gr8 be a function which given utils returns css?
var css = gr8(utils)
console.log(css.toString())

// or should it have utils bundled, and can specify which by options?
// gr8({
//   utils: ['column', 'offset', 'flex', 'fontSize', 'lineHeight'],
//   custom: [
//     {}, {}, {}
//   ]
// })

// or should it be more of a constructor?
// var gr8css = gr8()
//
// gr8css.filter(util =>
//   ['column', 'offset', 'flex', 'fontSize', 'lineHeight'].includes(util)
// )
//
// gr8css.add({
//   prefix: 'yo',
//   prop: 'border-color',
//   vals: ['red', 'green', 'blue']
// })
//
// gr8css.toString()
//
//
