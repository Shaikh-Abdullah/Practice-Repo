// function a() {
//     let x = 10
//     function b() {
//         console.log(x)
//     }
//     b()
// }
// a()

// class Counter {
//     constructor() {
//         let counter = 0
//         this.incrementCount = function () {
//             counter++
//             console.log(counter)
//         }
//         this.decrementCount = function () {
//             counter--
//             console.log(counter)
//         }
//     }
// }

// let counter1 = new Counter()

// counter1.incrementCount()
// counter1.incrementCount()
// counter1.decrementCount()

///////////////////////////////////////////////////////////////

// for(let i=1; i<=5; i++){
//     setTimeout(() => {
//         console.log(i)
//     }, i * 1000)
// }

/////////////// Closures dome with eventListener ////////////////////

// let btn = document.querySelector('#clickMe')
// function attachEventListener() { // <===== Closures
//     let count = 0
//     btn.addEventListener('click', () => (
//     console.log("Button clicked", count++)
// ))
// }
// attachEventListener()

//======Closure===============
// function outer() {
//     let name = 'OuterFunction'
//     function inner() {
//         console.log(name)
//     }
//     inner()
// }
// outer()

//------------Tricky Closure ====================
// function outerFun() {
//     let writeSomething = "Tricky Question"
//     return function innerFun() {
//         console.log(writeSomething)
//     }
// }
// outerFun()()

// console.log('Start')
// setTimeout(() => {
//     console.log('After sometime')
// }, 2000)
// console.log('End')

//////////====Star pattern=======================

// let number = 6
// let str = ""
// for (let i = 1; i <= number; i++) {
//     for (let j = 0; j < i; j++) {
//         str += "*"
//     }
//     str += '\n'
// }
// console.log(str)



// let number = 5
// let str = ""
// for (let i = 1; i <= number; i++) {
//     for (let j = 0; j < i; j++) {
//         str += '*'
//     }
//     str += '\n'
// }
// console.log(str)

// function abc() {
//     var input = "name"
//     console.log(input)
// }
// abc()

// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         let num = Math.floor()
//         setTimeout(() => {
//             if (num > 0.5) {
//                 resolve("It Resolved : )")
//             } else {
//                 reject("Rejected : (")
//             }
//         }, 1000)
//     })
// }

// fakeRequest("https://app.netlify.com/teams/shaikh-abdullah/overview")
//     .then((data) => console.log('It resolver', data))
//     .catch((err) => console.log('Error', err))

////////////////////////////////////////////////////////

/////////// ASYNC FUNCTION==========================
// const asyncFun = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = res.json()
//     console.log(data)
// }
// asyncFun()

/////////////////////////////////
/// Hoisting //////////////////////
a()
function a() {
    console.log('HELLO')
    let name = "Owais"
    console.log(name)
}

////////// PURE FUNCTION ============

function add(x, y) {
    return x + y
}
add()

/// IIFE(JavaScript Immediately Invoked Function Expression)
let sum = (function (a, b) {
    return a + b
})(10, 20)
console.log(sum)

// let num = 5
// let str = ""
// for (let i = 0; i <= num; i++) {
//     for (let j = 0; j < i; j++) {
//         str += "*"
//     }
//     str += "\n"
// }
// console.log(str)