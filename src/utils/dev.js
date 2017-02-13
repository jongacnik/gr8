var colors = {
  purp: '#912eff',
  blue: '#5497ff',
  teal: '#51feff',
  red: '#ff0000',
  lime: '#00ff00'
}

module.exports = [
  {
    prefix: 'dev',
    declaration: 'outline:1px solid ' + colors.purp
  },
  {
    prefix: 'dev',
    suffix: ' > *',
    declaration: 'outline:1px solid ' + colors.blue
  },
  {
    prefix: 'dev',
    suffix: ' > * > *',
    declaration: 'outline:1px solid ' + colors.teal
  },
  {
    prefix: 'dev',
    suffix: ' > * > * > *',
    declaration: 'outline:1px solid ' + colors.red
  },
  {
    prefix: 'dev',
    suffix: ' > * > * > * *',
    declaration: 'outline:1px solid ' + colors.lime
  }
]
