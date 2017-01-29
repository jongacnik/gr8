var test = require('tape')
var gr8 = require('../src')

test('`attach` method', function (t) {
  var utils = gr8()
  utils.attach()
  var styleEl = document.head.querySelector('[data-gr8-css]')
  t.ok(styleEl, 'gr8 style element exists in dom')
  t.end()
})
