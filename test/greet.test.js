const assert = require('assert');
var greet = require('../greet');


describe('greet', function(){
    it("should return 'Hello Ayabulela' when greeting", function() {
        assert.equal('Hello Ayabulela',greet('Ayabulela'));
    });

});
