var request = require('request');

// request() returns a stream with html data
var s = request('http://www.pluralsight.com/');

// ----- Piping -----
// readableStream.pipe(writableStream) - will emit the pipe event on the writable stream
// Readable Stream: data event emitted once data arrives
// Writable Stream: write() invoked

// if write() returns false, pause() is invoked on the readable stream to stop the flow of data
// drain event is emitted once the writable stream can once again receive data, and resume() is invoked on the readable stream
s.on('data', function(chunk) {
    console.log(">>>Data>>> " + chunk);
});

// end event emitted from the readable stream once it's finished, and end() is invoked on the writable stream
s.on('end', function() {
    console.log(">>>Done!>>>");
});
