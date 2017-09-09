var fs = require('fs')
var gr8 = require('../../src')
var utils = require('../../src/utils')
var lib = require('../../src/helpers')

var css = gr8()

var templates = {}

templates['defaults'] = fs.readFileSync(__dirname + '/../../src/defaults.js', 'utf8')
  .replace('module.exports = ', '').trim()

templates['optionsDetails'] = fs.readFileSync(__dirname + '/options-table.md', 'utf8')

var allKeys = lib.squish(utils, {
  stopWhen: lib.isUtil
})

templates['utilityKeys'] = Object.keys(allKeys).map(function (key) {
  return '`' + key + '`'
}).join(', ')

templates['utilityIndex'] = Object.keys(utils).map(function (key) {
  return '- [' + key + '](#' + key + ')'
}).join('\n')

templates['utilitySections'] = Object.keys(utils).map(function (key) {
  css.reset()
  css.add(utils[key])
  var subsections = !lib.isUtil(utils[key]) && !lib.isArr(utils[key])
    ? Object.keys(utils[key]).map(subkey => '`' + key + '.' + subkey + '`').join(', ')
    : '`' + key + '`'
  var transform = (key) => {
    return key === 'type' ? 'typography'
      : key === 'misc' ? 'miscellaneous'
      : key === 'dev' ? 'development'
      : key
  }
  return [
    `<details id="${key}">`,
    `<summary>${transform(key)}</summary>`,
    '',
    '```css',
    css.toString() + '```',
    '',
    'Included Utilities: ' + subsections,
    '</details>'
  ].join('\n')
}).join('\n\n')

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
