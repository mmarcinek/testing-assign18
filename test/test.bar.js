describe("Bar", function() {
  var bar;

  beforeEach(function() {
    bar = new Bar();
  });

  describe("squared", function(num){
    it("is a method", function(){
      expect(typeof bar.squared).eq('function');
    });

    it("multiplies a number to itself", function(){
      expect( bar.squared(2) ).eq(4);
    });
  });

  describe("cubed", function(num){
    it("is a method", function(){
      expect(typeof bar.cubed).eq('function');
    });

    it("returns a number to its third power", function(){
      expect( bar.squared(3) ).eq(9);
    });
  });

  // describe("exponentOf", function(exponent){
  //   it("is a method", function(){
  //     expect(typeof bar.squared).eq('function');
  //   });

  //   it("multiplies a number to itself", function(){
  //     expect( bar.squared(2) ).eq(4);
  //   });
  // });

  describe("reverseString", function (str){
    it("is takes a string and reverses it", function(){
      expect(bar.reverseString('gnirts')).to.be.a('string');
    });

    it("returns a string in reverse", function(){
      expect( bar.reverseString('Hello')).eq('olleH');
    });
  });

  describe("cipher", function (str){
    it("scrambles a string into an unreadable mess", function(){
      expect( bar.cipher('string')).to.be.a('string');
    });

    it("makes an unreadable string", function(){
      expect( bar.cipher('hello')).eq('ÌÉÐÐÓ');
    });
  });


  describe("decipher", function (str){
    it("unscrambles a string into a readable string", function(){
      expect( bar.decipher('string')).to.be.a('string');
    });

    it("makes a string readable", function(){
      expect( bar.decipher('ÌÉÐÐÓ')).eq('hello');
    });
  });

  describe("rot13", function (sentence){
    it("scrambles a sentence", function(){
      expect( bar.rot13('string')).to.be.a('string');
    });

    it("scrambles the sentence", function(){
      expect( bar.rot13('Hi, my name is mike')).eq('Uv, zl anzr vf zvxr');
    });
  });



});


