function foo() {
    y = 1;
    function y() { }
    var y = '2';
    return y;
}
alert(typeof foo()); 

// Output: 'string'

function foo() {
    return y;
    y = 1;
    
    function y() { }
    
    var y = '2';
}
console.log(typeof foo()); 

// Output: 'function'

var y = 1;
function foo() {
    y = 10;
    return;
    function y() {}
}
foo();
console.log(y); 

// Output: 1
