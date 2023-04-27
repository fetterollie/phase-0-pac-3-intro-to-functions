// Follow along with the examples here
function doNothin() {}

function sayHello() {
    console.log("Hello!");
}

sayHello();

function sayHelloToGuadalupe() {
console.log("Hello, Guadalupe!");
}

function sayHelloToLiz() {
console.log("Hello, Liz!");
}

function sayHelloToSamip() {
console.log("Hello, Samip!");
}

function sayHelloTo(firstName) {
console.log(`Hello, ${firstName}!`);
}

function say(greeting, firstName) {
return `${greeting}, ${firstName}!`;
}


function add(x, y) {
    return x + y;
  }
  
console.log(add(67, 2));
sayHelloToGuadalupe();
sayHelloToLiz();
sayHelloToSamip();
sayHelloTo(4);
console.log(say("Hello", "monkey"));
