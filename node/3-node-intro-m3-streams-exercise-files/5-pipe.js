var request = require('request');

// Version 1:  Pipe HTML to standard out
var s = request('http://www.pluralsight.com/');
var fs = require('fs');
var zlib = require('zlib');

// instead of listening for events on the readable stream, pipe to the process.stout writable stream
s.pipe(process.stdout);

// Version 2:  Chain request and pipe together
//request('http://www.pluralsight.com/').pipe(process.stdout);

// Version 3:  Pipe HTML to a file instead of standard out
//request('http://www.pluralsight.com/').pipe(fs.createWriteStream('pluralsight.html'));

// Version 4:  Pipe HTML through a gzip stream to a compressed file
//request('http://www.pluralsight.com/').pipe(zlib.createGzip()).pipe(fs.createWriteStream('pluralsight.html.gz'));

// Alternate syntax (B); request returns a readable stream
request('http://www.pluralsight.com/').pipe(process.stdout);

// Alternate syntax (C); fs.createWriteStream() returns a writable stream and write to the passed file
request('http://www.pluralsight.com/').pipe(fs.createWriteStream('pluralsight.html'));

// Alternate syntax (D); createGzip() returns a stream that's readable & writable
// pipe() returns the stream that was passed into it for chaining
request('http://www.pluralsight.com/').pipe(zlib.createGzip()).pipe(fs.createWriteStream('pluralsight.html.gz'));
