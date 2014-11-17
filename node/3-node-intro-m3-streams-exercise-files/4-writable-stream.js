// inspect stream's boolean property 'writable' to see if it's currently writable
console.log("stdout is writable? " + process.stdout.writable);

// process module includes several streams; stdin, stout, stderr
process.stdout.write("Hello");
process.stdout.write("World");
