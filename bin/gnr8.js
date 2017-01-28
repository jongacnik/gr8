var fs = require('fs')
var gr8 = require('../src')

var css = gr8().toString()

fs.writeFile('dist/gr8.css', css, function (err) {
  if (err) {
    return console.log(err)
  }

  console.log('gr8 generated and saved to gr8.css')
})
