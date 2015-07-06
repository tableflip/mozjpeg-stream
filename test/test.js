var fs = require('fs')
var path = require('path')
var test = require('tape')
var concat = require('concat-stream')
var mozjpeg = require('../index.js')
var bufferEqual = require('buffer-equal')

test('Does it blend?', function (t) {
  t.plan(1)
  fs.createReadStream(path.join(__dirname, 'flying-pug.jpg'))
    .pipe(mozjpeg())
    .pipe(concat(function (actual) {
      var expected = fs.readFileSync(path.join(__dirname, 'flying-pug.min.jpg'))
      t.ok(bufferEqual(actual, expected), 'The Buffers! Do they match?')
    }))
})

test('Will it compress further?', function (t) {
  t.plan(1)
  fs.createReadStream(path.join(__dirname, 'flying-pug.jpg'))
    .pipe(mozjpeg({quality: 50}))
    .pipe(concat(function (actual) {
      var expected = fs.readFileSync(path.join(__dirname, 'flying-pug.q50.jpg'))
      t.ok(bufferEqual(actual, expected), 'The Buffers! Do they match at this lo lo quality?')
    }))
})
