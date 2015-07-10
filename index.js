var mozjpeg = require('mozjpeg')
var dcp = require('duplex-child-process')

/**
  * @param {Object} options
  * @param {Number} opts.quality the 1 to 100. Docs suggest 5 to 95 is actual useable range.
  * @param {String} opts.args raw `mozjpeg` args for the connoisseur. See: https://github.com/mozilla/mozjpeg/blob/master/usage.txt#L70
  */
module.exports = function (opts) {
  opts = opts || {}
  // Force the quality flag to be specified, because: https://github.com/mozilla/mozjpeg/issues/181
  opts.quality = opts.quality || 75
  var args = []
  if (opts.quality) args.push('-quality', opts.quality)
  if (opts.args) args.push(opts.args.split[' '])

  var foo = dcp.spawn(mozjpeg, args)
  return foo
}
