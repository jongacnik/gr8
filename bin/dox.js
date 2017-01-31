var fs = require('fs')
var gr8 = require('../src')
var utils = require('../src/utils')
var lib = require('../src/helpers')

var css = gr8()

var templates = {}

templates['defaults'] = fs.readFileSync(__dirname + '/../src/defaults.js', 'utf8').replace('module.exports = ', '').trim()

templates['utilityIndex'] = Object.keys(utils).map(function (key) {
  return '- [' + key + '](#' + key + ')'
}).join('\n')

templates['utilitySections'] = Object.keys(utils).map(function (key) {
  css.empty()
  css.add(utils[key])
  var subsections = !lib.isUtil(utils[key])
    ? Object.keys(utils[key]).join(', ')
    : key
  return [
    '#### ' + key,
    // 'includes: *' + subsections + '*',
    '```css',
    css.toString(),
    '```'
  ].join('\n')
}).join('\n')

var readme = fs.readFileSync(__dirname + '/dox.md', 'utf8')

// replace {{ template }} with matching template
readme = readme.replace(/\{\{(.+)\}\}/gi, function (match, contents) {
  return templates[contents.trim()]
})

fs.writeFile('readme.md', readme, function (err) {
  if (err) {
    return console.log(err)
  }

  console.log('readme generated and saved to readme.md')
})
