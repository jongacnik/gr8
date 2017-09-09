var fs = require('fs')
var gr8 = require('..')

fs.writeFile('dist/gr8.css', gr8(), function (err) {
  if (err) {
    return console.log(err)
  }

  console.log('gr8 generated and saved to gr8.css')
})
