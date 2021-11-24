describe('windowHandling', () => {
    // it('getting title of different windows', () => {
    //     browser.maximizeWindow()
    //     browser.url("https://www.naukri.com/")
    //     var windowHandlesArray = browser.getWindowHandles()

    //     windowHandlesArray.forEach((windowHandle)=>{
    //         console.log("$$$$$$$$$$$$$$$$$$$$$$$$$"+windowHandle.length+"$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    //     })

    //     for (const windoHandle of windowHandlesArray) {
    //         browser.switchToWindow(windoHandle)
    //         console.log("title________________: "+browser.getTitle());
    //     }

    //     for (let index = 0; index < windowHandlesArray.length; index++) {
    //         browser.switchToWindow(windowHandlesArray[index])
    //         console.log("title________________: "+browser.getTitle());
            
    //     }

    //     windowHandlesArray.forEach((windowHandle)=>{
    //         browser.switchToWindow(windowHandle)
    //         console.log("title________________: "+browser.getTitle());
    //     })
    // });

    it.only('closing perticuler window', () => {
        browser.maximizeWindow()
        browser.url("https://www.naukri.com/")

        var parentWindow = browser.getWindowHandle()
        var windowHandlesArray = browser.getWindowHandles() 

        // close the parent window
        windowHandlesArray.forEach((windowHandle)=>{
            browser.switchToWindow(windowHandle)
            if (windowHandle == parentWindow) {
                browser.closeWindow()
                browser.pause(3000)
                // browser.debug()
            }
        })

        // close all the child windows
        windowHandlesArray.forEach((windowHandle)=>{
            browser.switchToWindow(windowHandle)
            if (!(windowHandle == parentWindow)) {
                browser.closeWindow()
                browser.pause(3000)
                // browser.debug()
            }
        })




        

        windowHandlesArray.forEach((windowHandle)=>{
            browser.switchToWindow(windowHandle)
            if (browser.getTitle() == "Jobs - Recruitment - Job Search - Employment -Job Vacancies - Naukri.com") {
                browser.closeWindow()
                browser.pause(3000)
                // browser.debug()
            }
        })
        var windowHandlesArray = browser.getWindowHandles()
        windowHandlesArray.forEach((windowHandle)=>{
            browser.switchToWindow(windowHandle)
            console.log("title________________: "+browser.getTitle());
        })
    });
        
});
