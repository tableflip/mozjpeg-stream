
// Usage: node example.js

var fs = require('fs')
var http = require('http')
var mozjpeg = require('../index.js')

// mozjpeg default quality (recommended)
http.get('http://aboutpug.com/wp-content/uploads/2015/01/flying-monkey-cute-pug.jpg')
  .on('response', function (resp) {
    resp
      .pipe(mozjpeg())
      .pipe(fs.createWriteStream('flying-pug.min.jpg'))
  })

// mozjpeg default -quality 50 (Smaller file, more heavily compressed.)
http.get('http://aboutpug.com/wp-content/uploads/2015/01/flying-monkey-cute-pug.jpg')
    .on('response', function (resp) {
      resp
        .pipe(mozjpeg({ quality: 50 }))
        .pipe(fs.createWriteStream('flying-pug.q50.jpg'))
    })
