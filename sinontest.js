var sinon = require('sinon');
var assert = require('assert');
console.log('Sinon Test...');

var foo = {
	boo : function(apple, pear, callback){
		callback(apple,pear);
	}
}

var callback = sinon.spy();
foo.boo("a", "b", callback);




