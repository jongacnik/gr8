function format (bps, max) {
  var dir = max ? 'max' : 'min'
  return Object.keys(bps)
    .map(function (bp) {
      return {
        key: bp,
        value: bps[bp],
        open: '@media(' + dir + '-width:' + bps[bp] + '){',
        close: '}\n'
      }
    })
}

function sort (bps, max) {
  return bps
    .sort(function (a, b) {
      if (max) {
        return parseInt(a.value, 10) > parseInt(b.value, 10) ? -1 : 1
      } else {
        return parseInt(a.value, 10) < parseInt(b.value, 10) ? -1 : 1
      }
    })
}

function get (opts) {
  var bps = [{ open: '', close: ''}]
  return opts.responsive
    ? bps.concat(sort(format(opts.breakpoints, opts.max), opts.max))
    : bps
}

module.exports = get
