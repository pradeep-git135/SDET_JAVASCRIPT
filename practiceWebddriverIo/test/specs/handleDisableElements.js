describe('', () => {
    it('', () => {
        browser.maximizeWindow()
        browser.url("http://127.0.0.1:5500/first.html")
        var inputfield = $("#ip1")

        console.log("before modification ========================= : "+inputfield.getAttribute("value"));


        // inputfield.setValue("javascript")  // invalid element state

        // console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%"+inputfield.getAttribute("value")); 

        // browser.executeScript("document.getElementById('ip1').value='javascript'",null)

        browser.execute(()=>{
            document.getElementById("ip1").value = 'nitheeshaa'
        })

        browser.pause(3000)

        browser.execute(()=>{
            document.getElementById("ip1").setAttribute("value","nitheesha")
            // var value = document.getElementById("ip1").getAttribute("value")
            // return value
        })

        browser.pause(3000)

        console.log("after modification : "+inputfield.getAttribute("value"));

        // console.log("######################################"+value);


        // browser.executeScript("document.getElementById('ip1').setAttribute('value','javascript')")
        // console.log("after modification : "+inputfield.getAttribute("value"));


    });
});