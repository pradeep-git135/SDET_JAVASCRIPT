const loginInstence = require("../pageobjects/loginPage")
const cData = require("../../data/commonData")  //data\commonData.json
const tData = require("../../data/excelData")

describe('loginTest', () => {
    beforeEach(function () {
        browser.maximizeWindow()
        browser.url(tData[0].url)
        loginInstence.login(tData[0].userName, tData[0].Password)
    })

    it('loging to application', () => {
        console.log("tc01");
    });
    
});