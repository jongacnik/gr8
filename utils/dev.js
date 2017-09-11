var colors = {
  purp: '#912eff',
  blue: '#5497ff',
  teal: '#51feff',
  red: '#ff0000',
  lime: '#00ff00'
}

exports.dev = function (options) {
  var selector = options.selector || (s => `.${s}`)
  return [
    `${selector('dev')}{outline:1px solid ${colors.purp}}`,
    `${selector('dev')} > * {outline:1px solid ${colors.blue}}`,
    `${selector('dev')} > * > * {outline:1px solid ${colors.teal}}`,
    `${selector('dev')} > * > * > * {outline:1px solid ${colors.red}}`,
    `${selector('dev')} > * > * > * * {outline:1px solid ${colors.lime}}`
  ].join('\n')
}
