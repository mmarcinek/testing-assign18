window.Foo = (function() {

  function Foo() {
    this.plusOne = function (num){
      return num + 1;
    };

  this.sortArray = function (unsorted){
    var sorted = unsorted.slice().sort();
    return sorted;
    };

  this.hasValue = function (arr, value) {
    return (arr.indexOf(value) >= 0);
    };

  // Foo.prototype = {

  // };

    Foo.greet = function (name){
      return 'Hello, ' + name + '!';
    };

 };

  return Foo;



})();
