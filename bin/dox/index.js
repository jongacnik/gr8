var fs = require('fs')
var gr8 = require('../../src')
var utils = require('../../src/utils')
var lib = require('../../src/helpers')

var css = gr8()

var templates = {}

templates['defaults'] = fs.readFileSync(__dirname + '/../../src/defaults.js', 'utf8')
  .replace('module.exports = ', '').trim()

templates['optionsDetails'] = fs.readFileSync(__dirname + '/options-table.md', 'utf8')

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
    '<details id="' + key + '">',
    '<summary>' + key + '</summary>',
    '',
    '```css',
    css.toString() + '```',
    '',
    '</details>'
  ].join('\n')
}).join('\n')

var readme = fs.readFileSync(__dirname + '/index.md', 'utf8')

// d.i.y. {{ templates }}
function tinyBars (str, data) {
  var re = /\{\{(.+)\}\}/gi
  return str.replace(re, function (match, val) {
    return data[val.trim()] || ''
  })
}

readme = tinyBars(readme, templates)

fs.writeFile('readme.md', readme, function (err) {
  if (err) {
    return console.log(err)
  }

  console.log('readme generated and saved to readme.md')
})
