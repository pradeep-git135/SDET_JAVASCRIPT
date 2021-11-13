describe('iframeHandling', () => {
    it('iframeHandling by string', () => {
        browser.maximizeWindow()
        browser.url("https://chercher.tech/practice/frames")
        browser.pause(2000)
        var iframe = $('#frame1')
        browser.switchToFrame(0)
        var inputfield = $('//b[@id="topic"]/../input')
        inputfield.setValue("webdriverIO")
        expect(inputfield).toHaveValue("webdriverIO")

        // browser.pause(3000)
        // // browser.switchToParentFrame()
        // var iframe2 = $('#frame2')
        // browser.switchToFrame(iframe2)

        // var dropdownelement = $("#animals")
        // dropdownelement.selectByVisibleText("avatar")

        // expect(dropdownelement).toHaveValue("Avatar")
    });
});