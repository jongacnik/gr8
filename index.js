var x = require('xtend')
var gr8util = require('gr8-util')
var gr8utils = require('./utils')

module.exports = gr8

var defaults = {
  breakpoints: {
    sm: 768,
    md: 1024,
    lg: 1280
  },
  breakpointSelector: 'attribute',
  utils: [],
  exclude: []
}

function gr8 (options) {
  options = x(defaults, options)

  var cssString = ''

  cssString += defaultUtils(options)
  cssString += customUtils(options.utils)

  Object.keys(options.breakpoints).forEach(function (key) {
    var selector = breakpointSelectorShortcut(options.breakpointSelector)(key)
    cssString += `\n@media ${breakpointShortcut(options.breakpoints[key])} {\n`
    cssString += defaultUtils(options, { selector: selector })
    cssString += customUtils(options.utils, { selector: selector })
    cssString += '\n}'
  })

  return cssString
}

function defaultUtils (defaults, options) {
  options = options || {}
  return gr8utils(x(defaults, options))
}

function customUtils (utils, options) {
  options = options || {}
  return utils.map(function (util) {
    return gr8util(x(util, options))
  }).join('\n')
}

function breakpointShortcut (value) {
  return Number.isInteger(value)
    ? `(min-width:${value}px)`
    : value
}

function breakpointSelectorShortcut (selector) {
  return selector === 'attribute'
    ? key => s => `[${key}~="${s}"]`
    : selector === 'class'
    ? key => s => `.${key}-${s}`
    : selector
}
