'use strict';

Function.prototype.ok = function(onOk) {
	var onErr = this;
	
	return function() {
		var args = Array.prototype.slice.call(arguments);
		try {
			var err = args.shift();
			if (err) {
				return onErr(err);
			} else {
				onOk.apply(null, args);
			}
			
		} catch (err) {
			onErr(err);
		}
	};
};

module.exports = function(log) {
	if ( ! log) log = console.log;
	
	return function(cb) {
		return function(err, data) {
			if (err) {
				log(err);
				log(err.stack);
				process.exit();
			} else {
				cb(data);
			}
		}
	}
};