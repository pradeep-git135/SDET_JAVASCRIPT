const { assert } = require("chai");

// describe('retry Example', function ()  {
//     this.retries(2)
//     beforeEach(() => {
//         console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
//     }, 1)

//     it('tc01', function ()  {
//         this.retries(4)
//         console.log("running tco1");
//         assert.fail("failing intentionally")
//     });

//     it.only('tc01', function ()  {
//         console.log("running tco2");
//         assert.fail("failing intentionally")
//     });
    
// });

describe('retry demo',  ()  => {
    // this.retries(1)

    beforeEach(() => {
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    }, 1)

    it('tco1', () => {
        console.log("running tco1");
    });

    it('tco2', () => {
        console.log("running tco2");
        assert.fail("intential fail")
    });
    
});