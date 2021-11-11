describe('test suite', () => {
    it('test_O1', () => {
        console.log("this is first test_script");
         browser.maximizeWindow()
         browser.url("https://webdriver.io/docs/organizingsuites/#exclude-selected-tests")
        var url = browser.getUrl()

         expect(browser).toHaveUrl(url)

        var title =  browser.getTitle()
        console.log("____title####################"+title);
         expect(browser).toHaveTitle(title)

    });
    
});

  