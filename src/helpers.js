exports.merge = (...props) => Object.assign({}, ...props)

exports.abbreviate = prop => {
  return prop.split('-').map(piece => piece[0]).join('')
}

exports.flatten = (a = [], b) => {
  return Array.isArray(b) ? [...a, ...b] : [...a, b]
}

exports.depunct = val => String(val).replace('.', '-')
