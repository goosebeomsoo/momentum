/* 
Why JS
    - Javascript는 웹사이트 뿐아니라 다른 곳에서도 사용
    - 1995년 12월 10일만에 개발
    - 넷스케이프때문에 개발됨
    - 프론트엔드에서 사용할 수 있는 유일한 언어
    - 모든 브라우저에 내장되어 있음 / 설치할 필요가 없음 / 접근성이 강함
    - 옵션이 없음 혹은 Javascript 하나만 배우면 됨
    - three.js : Javascript로 3D를 구현하게 해주는 Library
    - Framework : 일을 쉽게할 수 있도록 도와주는 도우미 -> React native
    - Electron : Javascript, HTML, CSS로 Desktop app을 만들수 있게 해줌 -> VS code, Slack, Twitch, Figma, Facebook masanger
    - Backend영역도 가능
    - socket.io : 채팅등 실시간 기능을 가능하게 함
    - Machine leaning도 가능 ml5.js
    - replit.com

Data type
    2 -> Integar(full number)
    1.5 -> Float
    "hello" -> String
*/

/*
Variable : 값을 저장하거나 유지
const(constant) : 상수(값이 바뀔 수 없음)
let : 값이 변할 수 있음
const를 기본적으로 사용하고 variable을 업데이트하고 싶다면 let 사용
var : 업데이트 여부를 알 수가 없음
변수를 통해 개발자의 의도를 알 수가 있음

const a = 10;
const b = 2;
let myName = "goosebeomsoo";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello "  + myName);

myName = "beomsoo";

console.log("your new name is " + myName);
*/

/*
Boolean (true or false)
true : on
false : off
null : There is noting here, Variable안에 아무것도 없다는 것을 확실하게 할 때 사용, 자연적으로 발생하지 않음, 의도적으로 비어있음을 알려줌
undefined : 컴퓨터가 variable에 대해서 인지하지만 값이 없는 상태

const amIFAT = null;
let something
console.log(something);
*/

/*
Array

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
// Get Item form Array
console.log(daysOfWeek);

// Add one more day to the array
daysOfWeek.push("sun");

console.log(daysOfWeek);
*/

/*
Object
constant안의 무엇인가를 적용할때는 상관없음

const playerName = "beomsoo";
const playerPoints = 12;
const playerHandsome = true;
const playerFat = "little bit";

const player = {
    name : "beomsoo",
    points : 10,
    handsome : true,
    fat : "a lot",
    exa : [1, 2, 43]
};

console.log(player);
player.fat = false;
player.lastname = "potato";
player.points = player.points + 15;
console.log(player);
*/

/*
Function
반복해서 사용할 수 있는 코드 조각
argument : function을 실행하는 동안 어떤 정보를 function에게 보낼 수 있는 방법


function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age + "yo");
}

sayHello("beomsoo", 28);
sayHello("nico", 22);

function plus(firstNumber, secondNumber) {
     console.log(firstNumber + secondNumber);
};

function devide(firstNumber, secondNumber) {
    console.log(firstNumber / secondNumber);
}

plus(6,11);
devide(5,2);

const player = {
    name : 'beomsoo',
    sayHello : function(otherPersonsName) {
        console.log('hello ' + otherPersonsName + ' nice to meet you');
    }
};

player.sayHello("lynn");
player.sayHello("nico");
//NaN : Not a number
*/


/*
Return
function 안에서 무언가를 return 하면  


const calculator = {
    plus : function(a,b) {
        return a+b;
    },
    minus : function(a,b) {
        return a-b;
    },
    times : function(a,b) {
        return a*b;
    },
    divide : function(a,b) {
        return a/b;
    },
    power : function(a,b) {
        return a**b;
    },
};

const plusResult = calculator.plus(2,3);
const minusResult = calculator.minus(plusResult,1);
const timesResult = calculator.times(10,minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);

console.log(plusResult);
console.log(minusResult);
console.log(timesResult);
console.log(divideResult);
console.log(powerResult);
*/

/*
Conditional

const age = parseInt(prompt("How old are you?"));

if (age >= 20) {
    alert("You can drink!");
} else if (age < 20) {
    alert("Go away!");
} else {
    console.log(parseInt(prompt("You can only typing number")));
}

&& => and (Both of them)
|| => or (One of them)


const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
    console.log("Please write a real positive number");
} else if (age < 18) {
    console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
    console.log("You can't drink")
} else if (age > 50 && age <= 80) {
    console.log("You should exercise");
} else if (age > 80) {
    console.log("You can do whatever you want.");
} else {
    console.log("Thank you for writing your age");
}

const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
    console.log("Please write a real positive number");
} else if (age < 18) {
    console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
    console.log("You can't drink")
} else if (age > 50 && age <= 80) {
    console.log("You should exercise");
} else if (age === 100) {
    console.log("Wow you are wise");
} else if (age > 80) {
    console.log("You can do whatever you want.");
} else {
    console.log("Thank you for writing your age");
}
*/

/*
How Javascript can touch browser
document.title

const title = document.getElementById("title");

title.innerText = "Got you!";
*/