// let num = parseInt(prompt('Enter a Positive number'))
// let isPrime = true

// if(num === 1){
//     console.log("1 is nor a prime neither a composite")
// }

// else if(num>1){
//     for(let i=2; i<num; i++){
//         if(num % i == 0){
//             isPrime=false
//             break
//         }
//     }


//     if(isPrime){
//         console.log(`${num} is a Prime Number`)
//     } else {
//         console.log(`${num} is not a Prime Number`)
//     }
// }

// else{
//     console.log('Invalid number')
// }

const takeInput = document.querySelector('#input')
const getValue = (num) => {
    let result = ""
    if (num <= 0) {
        result = "Enter a positive number"
    } else {
        result = `${num + 2}, ${num + 4}, ${num + 6}`
    }
    return result
}

takeInput.addEventListener('input', (e) => {
    const outputVal = document.querySelector('#output')
    if (e.target.value) {
        outputVal.textContent = getValue(parseInt(e.target.value))
    } else {
        outputVal.textContent = ""
    }
})


