# mozjpeg-stream

The awesome JPEG minifying power of [mozjpeg](https://www.npmjs.com/package/mozjpeg) wrapped up as a `.pipe` friendly node duplex stream.

Grab flying pugs over http and automagically minify them with mozjpeg before letting them near your hard drive.

```js
var fs require('fs')
var http require('http')
var mozjpeg = require('mozjpeg-stream')

http.get('http://aboutpug.com/wp-content/uploads/2015/01/flying-monkey-cute-pug.jpg')
  .on('response', function (resp) {
    resp
      .pipe(mozjpeg())
      .pipe(fs.createWriteStream('flying-pug.min.jpg'))
  })
```

And so this chunky `1.5M` of [raw pug](https://raw.githubusercontent.com/tableflip/mozjpeg-stream/master/test/flying-pug.jpg)

![A heavy, 1.5M pug](https://raw.githubusercontent.com/tableflip/mozjpeg-stream/master/test/flying-pug.jpg)

...becomes `132K` of optimal, progressive, mozjpeg'd, [flying pug](https://raw.githubusercontent.com/tableflip/mozjpeg-stream/master/test/flying-pug.q75.jpg):

![a svelte, 132K, progressive, mozjpeg pug](https://raw.githubusercontent.com/tableflip/mozjpeg-stream/master/test/flying-pug.q75.jpg)

`mozjpeg` sets the compression quality to 75 by default, but you can adjust it:

```js
fs.createReadStream('flying-pug.jpg')
  .pipe(mozjpeg({quality: 50}))
  .pipe(fs.createWriteStream('flying-pug.q50.jpg'))
```

So you can wring out further byte savings, and for many pictures, nothing of importance is lost...

`84K` of `-quality 50`, piped, progressive, mozjpeg'd, [flying pug](https://raw.githubusercontent.com/tableflip/mozjpeg-stream/master/test/flying-pug.q75.jpg)

![a still fly 84K of -qualtiy 50, progressive, mozjpeg pug](https://raw.githubusercontent.com/tableflip/mozjpeg-stream/master/test/flying-pug.q50.jpg)

## More info

[mozjpeg-stream](https://www.npmjs.com/package/mozjpeg-stream) wraps the most excellent [mozjpeg module](https://www.npmjs.com/package/mozjpeg) by the [imagemin crew](https://github.com/imagemin), which in turn wraps [mozjpeg](https://github.com/mozilla/mozjpeg) from the most excellent [Mozilla](https://www.mozilla.org/en-US/mission/). So it's good stuff all the way down.

- https://blog.mozilla.org/research/2014/07/15/mozilla-advances-jpeg-encoding-with-mozjpeg-2-0/
- https://hacks.mozilla.org/2014/08/using-mozjpeg-to-create-efficient-jpegs/
- https://github.com/mozilla/mozjpeg/blob/7faa703ebf7360e5c0a37d71a74c293232998340/usage.txt#L68

----

A [(╯°□°）╯︵TABLEFLIP](https://tableflip.io) side project.
