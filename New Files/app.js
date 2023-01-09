// function sayHi(name) {
//     alert(`Hii ${name}`)
// }
// function userInput(callback) {
//     const input = prompt('Enter a name')
//     callback(input)
// }
// userInput(sayHi)

//// ASYNC FUNCTION

// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved')
//         }, 2000)
//     })
// }

// async function asyncCall() {
//     console.log('calling')
//     const result = await resolveAfter2Seconds()
//     console.log(result)
// }

// asyncCall()

///////// Promise//////////

// const delayedColorChange = (color, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color
//             resolve()
//         }, delay)
//     })
// }

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))



let fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        let num = Math.random()
        setTimeout(() => {
            if (num >= 0.5) {
                resolve('It Resolved')
            } else {
                reject('It rejected')
            }
        }, 1000)
    })
}
fakeRequest('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise')
    .then((res) => {
        console.log("It is success", res)
    })
    .catch((err) => {
        console.log("It an error", err)
    })

//////////////////////////////////////////////////////////////

const div = document.querySelector('#abd')

let url = "https://jsonplaceholder.typicode.com/users"
fetch(url)
    .then((res) => {
        console.log(res)
        return res.json()
    })
    .then((data) => {
        console.log(data)
        for (let item of data) {
            let list = document.createElement('li')
            list.innerHTML = item.username
            div.appendChild(list)
            console.log(item)
        }
    })

// let num = parseInt(prompt("Enter a number"))
// let isPrime = true

// if (num === 1) {
//     console.log("1 is nor a prime neither a composite")
// } else if (num > 1) {
//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) {
//             isPrime = false
//             break
//         }
//     }
//     if (isPrime) {
//         console.log(`${num} is a prime number`)
//     } else {
//         console.log(`${num} is not prime number`)
//     }
// }
// else {
//     console.log('invalid number')
// }


const takeInput = document.querySelector('#inputVal')
function getValue(num) {
    let result = ""
    if (num <= 0) {
        result = "Enter positive number"
    } else {
        result = `${num + 2},${num + 4},${num + 6}`
    }
    return result
}

takeInput.addEventListener('input', (e) => {
    const output = document.querySelector('#output')
    if (e.target.value) {
        output.textContent = getValue(parseInt(e.target.value))
    } else {
        output.textContent = ""
    }
})

/////////// Callback Function =========================

function greet(name, callback) {
    console.log(`Hello ${name}`)
    callback()
}
function callMe() {
    console.log("I am callback Func")
}
greet("Peter", callMe)

///////////// HIGHER ORDER FUNCTION=============
const double = (x) => x * 2
const result = double(3)
console.log(result)


///////////// IIFE /////////////////
let sum = (function (x, y) {
    return x + y
})(3, 4)
console.log(sum)

//////////////////// SWAPPING With Temp Variabe///////////////
let var1 = "John"
let var2 = "Shelby"
let temp

temp = var1
var1 = var2
var2 = temp
console.log(var1)
console.log(var2)
console.log(temp)

////////////////////////////Using Destructuring ////////////////////////////////
let a1 = "jhon";
let b1 = "willy";
[a1, b1] = [b1, a1];
console.log(a1);
console.log(b1);

////////////////////////////SWAPPING AGAIN///////////////////////////
let swap1 = 3;
let swap2 = 5;
swap1 = swap1 + swap2;
swap2 = swap1 - swap2;
swap1 = swap1 - swap2;
swap1;
swap2;

