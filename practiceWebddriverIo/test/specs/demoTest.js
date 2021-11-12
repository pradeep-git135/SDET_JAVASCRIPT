
var assert = require('chai').assert
var expect = require('chai').expect
var should = require('chai').should()
describe('test suite', () => {
    it('test_O1', () => {
        console.log("this is first test_script");
         browser.maximizeWindow()
        browser.url("https://webdriver.io/docs/organizingsuites/#exclude-selected-tests")
        var url = browser.getUrl()
        // assert(url == "https://webdriver.io/docs/organizingsuites/#exclude-selected-tests", "url not matching")
        wdioExpect(browser).toHaveUrl(url)  //inbuilt assertions
        var title =  browser.getTitle()
        console.log("____title####################"+title);
        expect(title).to.equal("Organizing Test Suite | WebdriverIO")  //chai assertion
        // assert.equal("Organizing Test Suite | WebdriverIO", title, 'titles are not matching')
        //  expect(browser).toHaveTitle(title)
    });
    // it('demonstrate the chai asserstions', () => {
    //     // assert("xyz" == "zyx", "both values are not equal")
    //     // assert.fail("intentionaly failing my script")

    //     expect(2).to.equal(2)
    // });
    
});

  