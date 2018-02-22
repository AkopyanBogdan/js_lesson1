//alert(message); // ok
//alert(newMessage); //ne ok


// змінні
// доступні до декларації
var message = 'Hello world!(js)';
// недоступні до декларації
// рекомендують використовувати let
let newMessage = 'Hello new world!(js)';
// константа
const constMessage = 'Hello const world!(js)';

alert(constMessage);
alert(newMessage);
alert(message);
alert('text');

//JavaScript Data Types:
// String - set of chars
let stringMessage = 'some string';
//Number - any number, +/- Infinity, NaN
let numberMessage = 42;
//Boolean - true/false
let boolMessage = true;
//undefined
let undefinedMessage = undefined;
//null
let nullVar = null;
//Object
let obj = {};
//Symbol
let symb = Symbol();

//////////////////
let name = prompt('Enter your name:');
alert('Your name is ' + name);
let mes = 'Your name is ' + name;
console.log(mes);
document.write(mes);

//we will get a number, not a string
let age = +prompt('Enter your age: ');
let age2 = Number(prompt('Enter your age: '));
let age3 = parseInt(prompt('Enter your age: '));

let nextAge = age + age2 + 1;


function add(num1, num2)
{
    return num1 + num2;
}

const sum = add(10, 20);
document.write(sum);
document.write(add('hello '+ 'world'));

function checkAge(age)
{
    if(age < 18)
    {
        return 'Child';
    }
    else if(age === 18)
    {
        return 'teenager';
    }
    else
    {
        return 'Adult';
    }
}

const age4 = Number(prompt('Your age'));
document.write(checkAge(age4));

const sqrtResult = Math.sqrt(256);
document.write(sqrtResult);

