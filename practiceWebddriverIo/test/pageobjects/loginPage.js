const webutil = require("../../genericUtility/webutility")
class LoginPage {
    // not recomended
    // userTextfield = $("#ctl00_CPHContainer_txtUserLogin")

    get userTextfield(){
        return $("#ctl00_CPHContainer_txtUserLogin")
    }

    get passwordTextfield(){
        return $("#ctl00_CPHContainer_txtPassword")
    }

    get loginButton(){
        return $("#ctl00_CPHContainer_btnLoginn")
    }

    login(userName,password){
        webutil.enterValue(this.userTextfield, userName)
        // this.userTextfield.setValue(userName)

        webutil.enterValue(this.passwordTextfield, password)
        // this.passwordTextfield.setValue(password)
        
        this.loginButton.click()
    }
}
module.exports  = new LoginPage()