var x = require('xtend')
var gr8util = require('gr8-util')
var objectValues = require('object-values')

module.exports = gr8utils

var defaults = {
  spacing: [0, 1, 2, 3, 4],
  fontSize: [1, 1.2, 1.6, 2.4, 3.2, 6.4],
  lineHeight: [1, 1.5],
  size: [0, 100],
  viewport: [50, 100],
  zIndex: [0, 1, 2, 3, 4],
  flexOrder: [0, 1, 2, 3, 4],
  opacity: [0, 25, 50, 75, 100],
  aspectRatio: [25, 50, 75, 100],
  textColumn: [1, 2, 3, 4],
  unit: 'rem'
}

var utils = {
  column: require('./utils/column'),
  margin: require('./utils/margin'),
  padding: require('./utils/padding'),
  opacity: require('./utils/opacity'),
  background: require('./utils/background'),
  flex: require('./utils/flex'),
  display: require('./utils/display'),
  float: require('./utils/float'),
  overflow: require('./utils/overflow'),
  positioning: require('./utils/positioning'),
  size: require('./utils/size'),
  typography: require('./utils/type'),
  miscellaneous: require('./utils/misc'),
  development: require('./utils/dev')
}

function gr8utils (options) {
  return generate(filter(utils, options.exclude), options)
}

// public
gr8utils.defaults = defaults
gr8utils.utils = utils
gr8utils.generate = generate

function filter (utils, keys) {
  if (!Array.isArray(keys)) return utils
  var allKeys = Object.keys(utils)
  keys.forEach(function (key) {
    var isMatch = allKeys.indexOf(key) >= 0
    if (isMatch) {
      delete utils[key]
    }
  })
  return utils
}

function generate (utils, options) {
  options = x(defaults, options)
  return objectValues(utils).map(function (util) {
    return generateEach(objectValues(util), options)
  }).join('\n')
}

function generateEach (utils, options) {
  return utils.map(function (util) {
    if (typeof util === 'function') {
      util = util(options)
    }

    if (typeof util === 'string') {
      return util
    } else {
      util.selector = options.selector
      return gr8util(util)
    }
  }).join('\n')
}
