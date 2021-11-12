xdescribe('practising skip', () => {
    it('skipping test script', () => {
        console.log("1st it block");
    });
    it('skipping test script', () => {
        console.log("2st it block");
    });
    it('skipping test script', () => {
        console.log("3rd it block");
    });
});

describe.only('practising skip', () => {
    before(function () {
        this.skip()
    })
    it('skipping test script', () => {
        console.log("1st it block belongs to 2nd suite");
    });
    it('skipping test script', () => {
        console.log("2st it block belongs to 2nd suite");
    });
    it('skipping test script', () => {
        console.log("3rd it block belongs to 2nd suite");
        // this.skip()  //error skip is not a function
    });
});