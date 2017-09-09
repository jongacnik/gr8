var gr8 = require('./index')

var css = gr8({
  // selector: s => `.${s}`,
  // breakpointSelector: key => s => `.whatever [${key}~="${s}"]`,
  // breakpoints: {
  //   xs: 768,
  //   sm: 1024,
  //   md: 1280,
  //   lg: 1440
  // }
  // breakpoints: false
  breakpointSelector: 'class'
})

console.log(css)
