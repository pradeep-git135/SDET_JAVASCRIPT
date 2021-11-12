describe('dropdownHanle suit', () => {
    it.skip('selectByAttribute', () => {
        browser.maximizeWindow()
        browser.url("https://www.globalsqa.com/demo-site/select-dropdown-menu/")
       var dropDown = $('//div[@rel-title="Select Country"]//select')
       dropDown.selectByAttribute("value", "IND")
       var value = dropDown.getValue()
       expect(dropDown).toHaveValue("333", { ignoreCase: true })

    });

    it('selectByVisibleText(text)', () => {
        browser.maximizeWindow()
        browser.url("https://www.globalsqa.com/demo-site/select-dropdown-menu/")
       var dropDown = $('//div[@rel-title="Select Country"]//select')
       dropDown.selectByVisibleText("India")
       var value = dropDown.getValue()
       expect(dropDown).toHaveValue("333", { ignoreCase: true })

    });
    it('selectByIndex(index)', () => {
        browser.maximizeWindow()
        browser.url("https://www.globalsqa.com/demo-site/select-dropdown-menu/")
       var dropDown = $('//div[@rel-title="Select Country"]//select')
       dropDown.selectByIndex(26)
       var value = dropDown.getValue()
       expect(dropDown).toHaveValue("333", { ignoreCase: true })

    });
    it.only('', () => {
        browser.maximizeWindow()
        browser.url("https://www.globalsqa.com/demo-site/select-dropdown-menu/")
       var dropdownelementsArray =  $$('//div[@rel-title="Select Country"]//select//option')
       console.log("$$$$$$$$$$$$$$"+dropdownelementsArray+"$$$$$$$$$$$$$$");
       dropdownelementsArray.forEach((element)=>{
           console.log("$$$$$$$$$$$$$$"+element.getText()+"$$$$$$$$$$$$$$");
           if (element.getText() == "India") {
               element.click()
           }
       })
    });
});