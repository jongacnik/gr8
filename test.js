var gr8 = require('./src')

var css = gr8({
  nested: false,
  responsive: false,
  attribute: true
})

// console.log(css.variables())

// css.remove(['flex-order'])

css.add([
  {
    prop: 'border-color',
    vals: ['red', 'blue']
  },
  {
    prop: 'border-weight',
    vals: [1, 2, 3]
  }
])

console.log(css.toString())
