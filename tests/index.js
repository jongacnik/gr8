var test = require('tape')
var gr8 = require('../src')

/**
 * Methods
 *
 * `attach` method tested in tests/browser.js
 */
var utils = gr8()

test('`toString` method', function (t) {
  var css = utils.toString()
  t.equal(typeof css, 'string', 'returns string')
  t.end()
})

test('`add` method 1/4', function (t) {
  utils.add({
    prop: 'background-color',
    vals: [
      'red',
      'blue',
      'green'
    ]
  })

  var css = utils.toString()
  var hasUtils = hasAll([
    '.bcr{background-color:red}',
    '.bcb{background-color:blue}',
    '.bcg{background-color:green}'
  ], css)

  t.ok(hasUtils, 'correct utilities generated from prop and vals')
  t.end()
})

test('`add` method 2/4', function (t) {
  utils.add({
    prefix: 'show',
    declaration: 'display:block;opacity:1'
  })

  var css = utils.toString()
  var hasUtil = has('.show{display:block;opacity:1}', css)

  t.ok(hasUtil, 'correct utility genereated from prefix and declaration')
  t.end()
})

test('`add` method 3/4', function (t) {
  utils.add({
    prefix: 'bdw',
    suffix: ':after',
    prop: 'border-width',
    vals: {
      sm: 1,
      md: 4,
      lg: 8
    },
    hyphenate: true,
    unit: 'px',
    transform: function (val) {
      return val * 100
    }
  })

  var css = utils.toString()
  var hasUtils = hasAll([
    '.bdw-sm:after{border-width:100px}',
    '.bdw-md:after{border-width:400px}',
    '.bdw-lg:after{border-width:800px}'
  ], css)

  t.ok(hasUtils, 'correct utilities generated from prefix, suffix, prop, vals, hyphenate, unit, and transform')
  t.end()
})

test('`add` method 4/4', function (t) {
  utils.add({
    prefix: 'iwontmakeit'
  })

  var css = utils.toString()
  var notHasUtil = has('iwontmakeit', css)

  t.notOk(notHasUtil, 'utility skipped when not enough data')
  t.end()
})

test('`remove` method', function (t) {
  utils.remove('display')

  var css = utils.toString()
  var hasUtils = hasAll([
    '.df{display:flex}',
    '.db{display:block}',
    '.dib{display:inline-block}',
    '.di{display:inline}',
    '.dt{display:table}',
    '.dtc{display:table-cell}',
    '.dtr{display:table-row}',
    '.dn{display:none}'
  ], css)

  t.notOk(hasUtils, 'utility removed by key')
  t.end()
})

/**
 * Options
 */

test('responsive options 1/2', function (t) {
  var utils = gr8({
    responsive: true,
    max: true,
    breakpoints: {
  		xl: '1439px',
  		lg: '1260px',
  		md: '1023px',
  		sm: '767px'
  	}
  })

  var css = utils.toString()
  var hasMediaQuery = has('@media', css)
  var hasMediaQueries = hasAll([
    '@media(max-width:1439px)',
    '@media(max-width:1260px)',
    '@media(max-width:1023px)',
    '@media(max-width:767px)'
  ], css)
  var hasAttrSels = hasAll([
    '[xl~=',
    '[lg~=',
    '[md~=',
    '[sm~='
  ], css)

  t.ok(hasMediaQuery, 'responsive:true, media queries exist')
  t.ok(hasMediaQueries, 'max:true, has max-width media queries for all breakpoints')
  t.ok(hasAttrSels, 'attribute:true, has attribute selectors for all breakpoints')
  t.end()
})

test('responsive options 2/2', function (t) {
  var utils = gr8({
    responsive: true,
    max: false,
    attribute: false
  })

  var css = utils.toString()
  var hasMediaQueries = hasAll([
    '@media(min-width:1439px)',
    '@media(min-width:1260px)',
    '@media(min-width:1023px)',
    '@media(min-width:767px)'
  ], css)
  var hasScopedClasses = hasAll([
    '.xl-',
    '.lg-',
    '.md-',
    '.sm-'
  ], css)

  t.ok(hasMediaQueries, 'max:false, has min-width media queries for all breakpoints')
  t.ok(hasScopedClasses, 'attribute:false, has prefixed class selectors for all breakpoints')
  t.end()
})

test('nested option', function (t) {
  var utils = gr8({
    nested: true
  })
  var css = utils.toString()

  // iteratively check for nested column classes
  // .c1 .c1 through .c11 .c11
  var results = []
  for (var i = 1; i < 12; i++) {
    for (var j = 1; j <= i; j++) {
      var sel = '.c' + i + ' .c' + j
      results.push(has(sel, css))
    }
  }

  t.ok(allTruthy(results), 'nested:true, has all nested column selectors')
  t.end()
})

test('unit option', function (t) {
  var utils = gr8({
    unit: 'px'
  })
  var css = utils.toString()
  t.ok(has('.p1{padding:1px}', css), 'unit:"px", default unit is px')
  t.end()
})

test('val options', function (t) {
  var utils = gr8({
    spacing: [0, 1],
    opacity: [0, 100],
    viewport: 100,
    aspect: [0, 100],
    size: [0, 100],
    order: [0, 1],
    zIndex: [0, 1],
    lineHeight: 1,
    fontSize: [6.4, 3.2],
    textColumns: [1, 2]
  })
  var css = utils.toString()

  var hasSpacing = hasAll([ '.p0', '.p1', '.m0', '.m1' ], css)
  var hasOpacity = hasAll([ '.op0', '.op100'], css)
  var hasViewport = hasAll([ '.vw100' ], css)
  var hasAspect = hasAll([ '.ar0', '.ar100' ], css)
  var hasSize = hasAll([ '.w0', '.w100', '.h0', '.h100' ], css)
  var hasOrder = hasAll([ '.xo0', '.xo1' ], css)
  var hasZIndex = hasAll([ '.z0', '.z1' ], css)
  var hasLineHeight = hasAll([ '.lh1' ], css)
  var hasFontSize = hasAll([ '.fs6-4', '.fs3-2' ], css)
  var hasTextColumns = hasAll([ '.tc1', '.tc2' ], css)

  t.ok(hasSpacing, 'spacing: [0, 1] applied')
  t.ok(hasOpacity, 'opacity: [0, 100] applied')
  t.ok(hasViewport, 'viewport: 100 applied')
  t.ok(hasAspect, 'aspect: [0, 100] applied')
  t.ok(hasSize, 'size: [0, 100] applied')
  t.ok(hasOrder, 'order: [0, 1] applied')
  t.ok(hasZIndex, 'zIndex: [0, 1] applied')
  t.ok(hasLineHeight, 'lineHeight: 1 applied')
  t.ok(hasFontSize, 'fontSize: [6.4, 3.2] applied')
  t.ok(hasTextColumns, 'textColumns: [1, 2] applied')
  t.end()
})

/**
 * Test helper methods
 */

// true if every element is truthy
function allTruthy (results) {
  return results.every(function (result) {
    return result
  })
}

// true if string contains substring
function has (substr, str) {
  return str.indexOf(substr) > -1
}

// true if string contains all substrings
function hasAll (substrs, str) {
  return allTruthy(substrs.map(function (substr) {
    return has(substr, str)
  }))
}
