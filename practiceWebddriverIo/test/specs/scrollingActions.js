describe('', () => {
    it('scroll and mouseHover', () => {
        browser.maximizeWindow()
        browser.url("https://webdriver.io/")
        var getStartLink = $("//a[. = 'Get Started']")
        var result = getStartLink.isDisplayedInViewport()
        console.log("%%%%%%%%%%%%%%%%%% : "+result);

        getStartLink.scrollIntoView()

        var result2 = getStartLink.isDisplayedInViewport()
        console.log("after scrolling : "+result2);

        var helpLink = $("//a[. = 'Help']")

        helpLink.scrollIntoView()
        helpLink.moveTo()
        browser.pause(3000)
        console.log("&&&&&&&&&&&&&&&&&&&&&&&&completed");
    });
    it.only('dragNdrop and contextclick', () => {
        browser.maximizeWindow()
        browser.url("http://demo.guru99.com/test/drag_drop.html")
        var myButton =  $("//a[. = 'Demo Site']")
        myButton.click({ button: 'right' })
    //    var dragElement =  $("//a[. = ' 5000 ']")
    //    var dropLocation = $('//ol[@id="amt7"]/li[@class = "placeholder"]')
    //    dragElement.dragAndDrop(dropLocation)
       browser.pause(3000)

    });
});