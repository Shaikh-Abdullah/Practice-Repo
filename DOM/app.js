// const head = document.querySelector(".header")
// const btn = document.querySelector(".btn")

// btn.addEventListener('click', () => {
//     head.innerHTML = "Real madrid"
// })

///// Todo Type of Example

const form = document.querySelector("#todoForm")
const input = document.querySelector('#todo')
const list = document.querySelector('#list')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const newTodo = input.value
    console.log(newTodo)
    const newLI = document.createElement('li')
    newLI.innerText = newTodo
    console.log(newLI)
    list.append(newLI)
    input.value = ''
})

//////// Random Color ///////////

const changeColorBtn = document.querySelector('.change')
const displayHeader = document.querySelector('.displayColor')
changeColorBtn.addEventListener('click', () => {
    const head = makerandomColor();
    document.body.style.backgroundColor = head
    document.body.style.color = 'white'

    displayHeader.innerText = head
})

function makerandomColor() {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r},${g},${b})`
}

/////////////////////////////////////////////////////
const takeInput = document.querySelector('#inputVal')
function getValue(num) {
    let result = ''
    if (num <= 0) {
        result = 'Enter a positive number'
    } else {
        result = `${num + 2}, ${num + 4}, ${num + 6}`
    }
    return result
}
takeInput.addEventListener('input', (e) => {
    const output = document.querySelector('#output')
    if (e.target.value) {
        output.textContent = getValue(parseInt(e.target.value))
    } else {
        output.textContent = ''
    }
})

/////////////////////////////////////////////////////////////////
// const userInput = parseInt(prompt("Enter a positive number"))
// let isPrime = true
// if (userInput === 1) {
//     console.log("1 is neither prime nor composite")
// } else if (userInput > 1) {
//     for (let i = 2; i < userInput; i++) {
//         if (userInput % i == 0) {
//             isPrime = false
//             break
//         }
//     }
//     if (isPrime) {
//         console.log(`${userInput} is Prime Number`)
//     } else {
//         console.log(`${userInput} is not a prime number`)
//     }
// } else {
//     console.log("Invalid Input")
// }

//////////////////// Fibonacci Series

// const fiboInput = parseInt(prompt("Enter a number"))
// let n1 = 0, n2 = 1, nextTerm
// console.log("Fibonnaci series")
// for (let i = 0; i < fiboInput; i++) {
//     console.log(n1)
//     nextTerm = n1 + n2
//     n1 = n2
//     n2 = nextTerm
// }

/////////////////////////// Armstrong Number
// let sum = 0
// const number = prompt("Enter a three-digit positive number")
// let temp = number
// while (temp > 0) {
//     let reminder = temp % 10
//     sum += reminder * reminder * reminder
//     temp = parseInt(temp / 10)
// }
// if (sum == number) {
//     console.log(`${number} is an Armstrong number`);
// } else {
//     console.log(`${number} is not an Armstrong number.`);
// }

//////////////////////////////////////

// let sum = 0
// const number = parseInt(prompt("Enter a three digit number"))
// let temp = number
// while (temp > 0) {
//     let reminder = temp % 10
//     sum += reminder * reminder * reminder
//     temp = parseInt(temp / 10)
// }
// if (sum == number) {
//     console.log(`${number} is an Armstrong number`);
// } else {
//     console.log(`${number} is not an Armstrong number.`);
// }

/////////////////////Palindrome////////////////////////
function checkPali(string) {
    const len = string.length
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return "Its not"
        }
    }
    return "It is Palindrome"
}

const string = prompt("Enter a string")
const value = checkPali(string)
console.log(value)