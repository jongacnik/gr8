var postcss = require('postcss')
var gr8util = require('gr8-util')
var gr8utils = require('./utils')
var gr8 = require('.')

module.exports = postcss.plugin('gr8', function (options) {
  return function (css) {
    css.walkAtRules(function (atRule) {
      if (['gr8', 'gr8utils', 'gr8util'].indexOf(atRule.name) < 0) {
        return
      }

      var input = atRule.raws.between

      // remove comment operators and newlines
      var clean = input.replace(/(\/\*|\*\/|\n)/g, '')

      // eval string, it better be valid js!
      var options = clean ? eval(`(${clean})`) : {}

      // create utils from options
      var css = ''
      if (atRule.name === 'gr8') {
        css = gr8(options)
      } else if (atRule.name === 'gr8utils') {
        css = gr8utils(options)
      } else if (atRule.name === 'gr8util') {
        css = gr8util(options)
      }

      // insert utils
      atRule.parent.insertBefore(atRule, css)
      atRule.remove()
    })
  }
})
