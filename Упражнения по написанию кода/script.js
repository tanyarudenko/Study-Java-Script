const num = 50;
if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
}    
else {
    console.log('Ok!');
}

(num === 50) ? console.log('Ok!') : console.log('Error');
    
const hamburger = 2;
const fries = 1;
if (hamburger === 3 && fries) {
    console.log("Все сыты!");
} else {
    console.log("Мы уходим");
}
    
console.log( NaN || 2 || undefined );


console.log( NaN && 2 && undefined );


console.log( 1 && 2 && 3 );


console.log( !1 && 2 || !3 );


console.log( 25 || null && !3 );


console.log( NaN || null || !3 || undefined || 5);


console.log( NaN || null && !3 && undefined || 5);


console.log( 5 === 5 && 3 > 1 || 5);
    
const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;


if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
}

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!')
}


let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!')
}


let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}


// let num = 50;
// while (num <= 55) {
//     console.log(num);
//     num++;
// }

let num = 50;
do {
    console.log(num);
    num++;
}
while (num < 55);

for (i = 1; i < 8; i++) {
    console.log(i);
}






let num = 5;
while (num <= 10) {
    console.log(num);
    num++;
}

for (let i = 20; i > 10; i--) {
    if (i === 13) {
        break;
    }
    console.log(i);
}

for (let i = 2; i < 11; i++) {
    if (i === 3) {
        continue;
    }
    if (i === 5) {
        continue;
    }
    if (i === 7) {
        continue;
    }
    if (i === 9) {
        continue;
    }
    
    console.log(i);
}

const arr = [];
    arr[0] = 5;
    arr[1] = 6;
    arr[2] = 7;
    arr[3] = 8;
    arr[4] = 9;
    arr[5] = 10;
    console.log(arr);

    
    let i = 2;
    while (i <= 16) {
        if (i % 2 === 0) {
            i++;
         continue;
     } else {
         console.log(i);
     }
        i++;
    }
    

    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];
   
    result[0] = arr[0];
    result[1] = arr[1];
    result[2] = arr[2];
    result[3] = arr[3];
    result[4] = arr[4];
    result[5] = arr[5];
    result[6] = arr[6];
    console.log(result);

    const data = [5, 10, 'Shopping', 20, 'Homework'];
    data[0] = data[0] * 2;
    data[1] = data[1] * 2;
    data[2] = data[2] + " - done";
    data[3] = data[3] * 2;
    data[4] = data[4] + " - done";

    console.log(data);
    console.log(typeof(data[1], data[2]));

    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];
    for (let i = 1; i < 6; i++) {
        // result[0] = data[4];
        for (let j = 5; j = 0; j--) {
            console.log(result);
        }

    }

    let num = 20;

function showFirstMessage(text) {
    console.log(text);
    num = 10;
}

showFirstMessage("Hello world!");
console.log(num);


const usdCurr = 28;
const eurCurr = 32;

function convert(amount, curr) {
    console.log(amount * curr);
}

convert(500, usdCurr);
convert(500, eurCurr);



const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
    return amount * curr;
}

function promotion(result) {
    console.log(result * discount);
}

promotion(convert(500, usdCurr));
        
   
function sayHello(text) {
    const text = "Антон"; 
    return (Hello + text);    
}
sayHello(text);

const num = 5;
function returnNeighboringNumbers(num) {
    
return [num - 1, num, num + 1];
}

returnNeighboringNumbers(5);
console.log(returnNeighboringNumbers);



const lines = 5;
let result = '';
for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
            result += "*";
    }
    result += '\n';
}
console.log(result);
    
const n = 8; // количество строк

for (let i = 0; i < n; i++) {
    const spaces = n - i - 1;
    const stars = 2 * i + 1;

    console.log(" ".repeat(spaces) + "*".repeat(stars));
}


Упражнение 7
function calculateVolumeAndArea(length) {
    if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return 'При вычислении произошла ошибка';
    }

    let volume = 0;
        area = 0;
    volume = length * length * length;
    area = length * length * 6;
    return `Обьем куба: ${volume}, площадь всей поверхности: ${area}`;
}
calculateVolumeAndArea(5);

function getCoupeNumber(seatNumber) {
    if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return 'Ошибка. Проверьте правильность введенного номера места';
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return 'Таких мест в вагоне не существует';
    }

    return Math.ceil(seatNumber / 4);
}
getCoupeNumber(8);

Упражнение 8

function getTimeFromMinutes(min) {
    if (typeof (min) !== Number || min < 0 || !Number.isInteger(min)) {
        return "Ошибка, проверьте данные";
    }

    let hours = 0,
        minutes = 0;
        hours = Math.trunc(min / 60);
        minutes = (min / 60) - hours;
    return `Это ${hours} часов и ${minutes} минут`;
}
getTimeFromMinutes(50);

function findMaxNumber(a, b, c, d) {
    if (typeof (a) !== 'number' ||
        typeof (b) !== 'number' ||
        typeof (c) !== 'number' ||
        typeof (d) !== 'number') {
            return 0;
    } else {
        return Math.max(a, b, c, d);
    }
}
findMaxNumber(3, 5, 7, 8);

const q = {
    one: 1, 
    two: 2
};
const newObj = {...q};
console.log(newObj);



Упражнение 11

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    console.log(`Семья состоит из: ${family}`);
}
showFamily(family); 


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
   
    arr.forEach(function(item, i, arr) {
        console.log(`${i+1} | ${item}`);
    });
}   
standardizeStrings(favoriteCities);



Упражнение 12
const someString = 'This is some strange string';

function reverse(str) {
    
    str.length === 0 ? str = `Ошибка!` : str = str.reverse();
    return str;
}
reverse(someString);