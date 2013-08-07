var buster  = require("buster");
var assert  = buster.assertions.assert;
var refute  = buster.assertions.refute;

buster.testCase('Test', {
	'Step 01' : function (){
		assert.isObject(new Array,"dummy test");
	}
});
