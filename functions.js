function add(num1,num2){
    const sum = num1 + num2;
    console.log({ console: sum});
    return sum;
}
console.log(add(2,3));
add(4,5);

// function expresssinon
const subtraction = function (num1,num2){
    console.log(num1-num2)
}
subtraction(20,10)
//arrow expression
const multiply = (num1,num2) => console.log(num1*num2);
multiply(5,6);
//IIFC
(function(){
    console.log("Hello");

})();
//Hoisting


console.log({great});
const greet= ("Hello There");
console.log({great: greet});


