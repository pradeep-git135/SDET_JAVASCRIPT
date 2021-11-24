const { assert } = require("chai");

describe('suite2', () => {
    it('tc02', () => {
        console.log("testScript _ tc02");
        browser.maximizeWindow()
        browser.url("https://www.flipkart.com/")
        browser.pause(2000)
        assert.fail("intentional failure")
    });
});