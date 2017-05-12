const assert = require('assert');
var findItemsOver = require('../findItemsOver');


describe('findItemsOver', function(){
    it("should return 'qty>quantity' when given listItem", function() {
        assert.equal(findItemsOver([10,37,27,3],1),3);

    });

});
