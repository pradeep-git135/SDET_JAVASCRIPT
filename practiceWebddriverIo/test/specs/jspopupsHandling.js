const { assert } = require("chai");

describe('handling javascript alerts', () => {
    it('handle alert popup', () => {
        browser.maximizeWindow()
        browser.url("http://127.0.0.1:5500/alerts.html")

        var alertBtn = $("//button[. = 'click here to get allert']")
        alertBtn.click()

        var result = browser.isAlertOpen()

        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@"+result);

        // browser.waitUntil(alertIsPresent(), { timeout: 5000, timeoutMsg: 'Failed, after waiting for the alert to be present' })

        var alertText = browser.getAlertText()

        console.log("#########################"+alertText);
        // browser.acceptAlert()
        browser.dismissAlert()
        assert.equal(alertText, "i am a js alert")

    });
    it('handle confirm', () => {
        browser.maximizeWindow()
        browser.url("http://127.0.0.1:5500/alerts.html")

        var confirmtBtn = $("//button[. = 'click here to get confirm']")
        confirmtBtn.click()

        var result = browser.isAlertOpen()

        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@"+result);

        // browser.waitUntil(alertIsPresent(), { timeout: 5000, timeoutMsg: 'Failed, after waiting for the alert to be present' })

        var alertText = browser.getAlertText()

        console.log("#########################"+alertText);
        // browser.acceptAlert()
        browser.dismissAlert()
        assert.equal(alertText, "i am a js confirm")

        
    });
    it.only('handle prompt', () => {
        browser.maximizeWindow()
        browser.url("http://127.0.0.1:5500/alerts.html")
        var promptBtn = $("//button[. = 'click here to get prompt']")
    //    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1"+promptBtn.getCSSProperty("style")); 
       location = promptBtn.getLocation()
       console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%% "+location);
       for (const key in location) {
           console.log("%%%%%%%%%%%%%%%%%%%%%%%% : "+location[key]);
       }
        // promptBtn.click()

        // var result = browser.isAlertOpen()

        // console.log("@@@@@@@@@@@@@@@@@@@@@@@@@"+result);

        // // browser.waitUntil(alertIsPresent(), { timeout: 5000, timeoutMsg: 'Failed, after waiting for the alert to be present' })

        // var alertText = browser.getAlertText()

        // console.log("#########################"+alertText);

        // browser.sendAlertText("webdriverIO")
        // var promptResult = browser.acceptAlert()
        // // browser.dismissAlert()
        // console.log("promptText =============== : "+promptResult);
        // assert.equal(alertText, "i am a js prompt")
    });
    
});