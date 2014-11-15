// publish/subcribe (vs request/result)
// diff: subscribe (call 'on') to a single event multiple times by providing multiple functions as an argument to on()
// diff: errors are emitted as seperate events - not as first callback function args. Allows access to partial results

var EventEmitter = require('events').EventEmitter;

var getResource = function(c) {
    var e = new EventEmitter();
    process.nextTick(function() {
        var count = 0;
        // publisher
        // event is a string which can be any value
        e.emit('start');
        var t = setInterval(function () {
            e.emit('data', ++count);
            if (count === c) {
                // events can be emitted with zero or more args
                // emitter pattern A: a return value from a function call
                e.emit('end', count);
                clearInterval(t);
            }
        }, 10);
    });
    return(e);
};

// event emitter instance
var r = getResource(5);

// subscriber
r.on('start', function() {
    console.log("I've started!");
});

r.on('data', function(d) {
    console.log("   I received data -> " + d);
});

r.on('end', function(t) {
    console.log("I'm done, with " + t + " data events.");
});

