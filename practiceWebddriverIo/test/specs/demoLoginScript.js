// require("../../screenshots/loginPage.png")
// screenshots\loginPage.png
describe('login suite', () => {
    it('login test_01', () => {
        browser.maximizeWindow();
        browser.url("http://www.testyou.in/Login.aspx")
        // browser.saveScreenshot("./screenshots/loginPage.png")

        //validate
        var usertextfield = $("#ctl00_CPHContainer_txtUserLogin")  //browser.findElement() 
            // # represents id, . represents class, = represents linktext, *= represents partial linktext

            // $("#ctl00_CPHContainer_txtUserLogin").setValue("pradeep")

            usertextfield.setValue("pradeep")

            var passwordfield = $("#ctl00_CPHContainer_txtPassword")
            passwordfield.setValue("1234")

          var loginBtn =   $('//input[@name="ctl00$CPHContainer$btnLoginn"]')
          loginBtn.click()

         

        var  errorfiled =  $('//span[. = "Userid or Password did Not Match !!"]')
         var errorMsg = errorfiled.getText()
         browser.saveScreenshot("./another.png") 
         expect(errorfiled).toHaveTextContaining("@@@@@@@@@@@@@@@@@@@@@@@@@@@")

        //  browser.pause(3000)

        // browser.takeScreenshot()
        //  browser.saveScreenshot("C:/Users/Pradeep/Desktop/sdetJS/practiceWebddriverIo/screenshots/loginPage.png")
        

    });
});