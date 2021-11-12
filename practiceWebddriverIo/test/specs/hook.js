describe('hooks', function() {
    before(function() {
        console.log("before hook exeutes only once before all the functions");
        this.skip()
      // runs once before the first test in this block
    });
  
    // after(function() {
    //   // runs once after the last test in this block
    //   console.log("after hook exeutes only once after all the functions");

    // });
  
    // beforeEach(function() {
    //   // runs before each test in this block
    //   console.log("executes before for each test script" );
    // });
  
    // afterEach(function() {
    //   // runs after each test in this block
    //   console.log("executes after for each test script" );
    // });

    it('tc01', () => {
        console.log("1st testScript");
    });
    it('tc02', () => {
        console.log("2nd testScript");
    });
    it('tc03', () => {
        console.log("3rd testScript");
    });
  
    // test cases
  });

//   describe('hooks', function() {
//     console.log("describe block");
//     // test cases
//   });

  