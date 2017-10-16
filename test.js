var test = require('tape')
var gr8 = require('.')

test('output', function (t) {
  t.ok(typeof gr8() === 'string', 'outputs string')
  t.end()
})

test('selector', function (t) {
  var css = gr8({
    selector: s => `.gr8-${s}`
  })
  t.ok(css.indexOf('.gr8-') >= 0, 'supports custom selector')
  t.end()
})

test('disable breakpoints', function (t) {
  var css = gr8({
    breakpoints: false
  })
  t.ok(css.indexOf('@media') < 0, 'supports disabling breakpoints')
  t.end()
})

test('breakpoint selector', function (t) {
  var cssA = gr8({
    breakpointSelector: 'attribute'
  })
  t.ok(cssA.indexOf('[sm~=') >= 0, 'supports attribute breakpoint selector shortcut')

  var cssB = gr8({
    breakpointSelector: 'class'
  })
  t.ok(cssB.indexOf('.sm-') >= 0, 'supports class breakpoint selector shortcut')

  var cssC = gr8({
    breakpointSelector: key => s => `.gr8 [${key}~="${s}"]`
  })
  t.ok(cssC.indexOf('.gr8 [sm~=') >= 0, 'supports custom breakpoint selector')

  t.end()
})

test('custom breakpoints', function (t) {
  var css = gr8({
    breakpoints: {
      a: '(max-width:768px)',
      b: 1024,
      c: '(orientation:landscape)'
    }
  })

  t.ok(css.indexOf('@media (max-width:768px)') >= 0, 'supports custom breakpoints A')
  t.ok(css.indexOf('@media (min-width:1024px)') >= 0, 'supports custom breakpoints B')
  t.ok(css.indexOf('@media (orientation:landscape)') >= 0, 'supports custom breakpoints C')

  t.end()
})

test('unit', function (t) {
  var css = gr8({
    unit: 'px'
  })

  t.ok(css.indexOf('.fs6-4{font-size:6.4px}') >= 0, 'supports unit option')
  t.end()
})

test('values', function (t) {
  var css = gr8({
    spacing: [99],
    fontSize: [99],
    lineHeight: [99],
    size: [99],
    viewport: [99],
    zIndex: [99],
    flexOrder: [99],
    opacity: [99],
    aspectRatio: [99],
    textColumn: [99]
  })

  var hasAll = css.indexOf('.p99') >= 0 &&
    css.indexOf('.fs99') >= 0 &&
    css.indexOf('.lh99') >= 0 &&
    css.indexOf('.w99') >= 0 &&
    css.indexOf('.vw99') >= 0 &&
    css.indexOf('.z99') >= 0 &&
    css.indexOf('.xo99') >= 0 &&
    css.indexOf('.op99') >= 0 &&
    css.indexOf('.ar99') >= 0 &&
    css.indexOf('.tc99') >= 0

  t.ok(hasAll, 'custom values succesfully passed to gr8-util')
  t.end()
})

test('custom util', function (t) {
  var css = gr8({
    utils: [
      {
        prop: 'foo',
        vals: 'bar'
      }
    ]
  })

  t.ok(css.indexOf('.fb{foo:bar}') >= 0, 'custom utils succesfully generated')
  t.ok(css.indexOf('[sm~="fb"]{foo:bar}') >= 0, 'custom utils succesfully generated per breakpoint')

  t.end()
})

test('custom raw util', function (t) {
  var css = gr8({
    utils: [
      {
        raw: {
          'trans-center-x': 'left:50%;transform:translateX(-50%)',
          'trans-center-y': 'top:50%;transform:translateY(-50%)'
        }
      }
    ]
  })

  t.ok(css.indexOf('.trans-center-x{left:50%;transform:translateX(-50%)}') >= 0, 'custom raw utils succesfully generated')
  t.ok(css.indexOf('[sm~="trans-center-x"]{left:50%;transform:translateX(-50%)}') >= 0, 'custom raw utils succesfully generated per breakpoint')

  t.end()
})
