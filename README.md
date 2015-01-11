# uok
The simpless way for carring errors.

## Example 1

We don't need to write if-else condition and log errors. uok do for us.
It is carry function arguments and if it is not null, than dump error to console.

```javascript
var log = require('tracer').console({format: "{{file}}:{{line}}: {{message}}"}).log;
var ok = require('lib/ok')(log);

function log(data, cb) {
	fs.writeFile('log', data, cb);
}

log('hello', ok(function() {
	console.log('ok');
}));
```

## Example 2
uok create method ok in prototype all functions and it allows minimize code

```javascript
var log = require('tracer').console({format: "{{file}}:{{line}}: {{message}}"}).log;
var ok = require('lib/ok')(log);

function log(data, cb) {
	fs.writeFile('log', data, cb.ok(function() {
		// do somethind
		cb();
	}));
}

log('hello', ok(function() {
	console.log('ok');
}));
```
