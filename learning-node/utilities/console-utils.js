/**
 * %s string
 * %d number
 * $j json
 */
console.log('Un %s y un %s', 'perrito', 'gatito');
console.info('Hello world');
console.warn('Error');
console.assert(42 == '42');
console.assert(42 === '42');

//console.trace('hello');

const util = require('util');
const debuglog = util.debuglog("foo");

debuglog('Hello from foo')