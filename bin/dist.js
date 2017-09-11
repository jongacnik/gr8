var fs = require('fs')
var path = require('path')
var gr8 = require('..')

var packageInfo = JSON.parse(fs.readFileSync(path.join(__dirname, '/../package.json'), 'utf8'))

var header = '/*!\n * gr8.css • v' + packageInfo.version + '\n * github.com/jongacnik/gr8\n */\n'
var css = gr8()

fs.writeFile('dist/gr8.css', header + css, function (err) {
  if (err) {
    return console.log(err)
  }

  console.log('gr8 generated and saved to gr8.css')
})
