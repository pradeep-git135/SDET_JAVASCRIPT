class webutillity {

    enterValue(element, value){
        element.waitForDisplayed()
        element.clearValue()
        element.setValue(value)
    }

}
module.exports = new webutillity()