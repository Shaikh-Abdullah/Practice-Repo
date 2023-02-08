function reveseArray(arr) {
    let result = arr.reverse()
    console.log("Used Function to reverse")
    console.log(result)
}

reveseArray([1, 2, 3, 4])

let arr = ['Jhon', 'Mic', "Willy", "Adam"]
let resultOfArr = arr.reverse()
console.log("Array already given")
console.log(resultOfArr)

let str = "Hello World"
let strResult = str.split("").reverse().join("")
console.log("Reversed Normal given String")
console.log(strResult)

let arrOfAlpa = ['A', 'B', 'C', 'D', 'A', 'D']
let resultOfAlpa1 = new Set([...arrOfAlpa])
console.log("Using Set keyword")
console.log(resultOfAlpa1)

let resultOfAlpa = []

for (let i = 0; i <= arrOfAlpa.length - 1; i++) {
    if (!resultOfAlpa.includes(arrOfAlpa[i])) {
        resultOfAlpa.push(arrOfAlpa[i])
    }
}
console.log("without Set keyword")
console.log(resultOfAlpa)

let mapTheArr = [1, 2, 3, 4, 5]
let resultOfMapArr = mapTheArr.map((x) => {
    return x * 2
})
console.log(resultOfMapArr)

let filterTheArr = [1, 2, 3, 4, 5]
let resultOfFilterArr = filterTheArr.filter((x) => {
    if (x % 2 == 0) {
        return x
    }
})
console.log(resultOfFilterArr)
//////////////////////////////////////////////////////////

console.log("forEach")
let arrForEach = []
for (let i = 1; i <= 20; i++) {
    arrForEach.push(i)
}
console.log(arrForEach)
arrForEach.forEach((x) => {
    if (x % 2 != 0) {
        let arrForNew = []
        arrForNew.push(x)
        console.log(arrForNew)
    }
})


function checkPrime(number) {
    if (number <= 1) {
        return false
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return false
            }
        }
    }
    return true
}
checkPrime(3)

let checkArrPrime = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]

checkArrPrime.forEach(function (ele) {
    const isPrime = checkPrime(ele)
    if (isPrime) {
        console.log(`${ele} is a prime number`);
    }
})

function reverseString(str) {
    let result = str.split("").reverse().join("")
    console.log(result)
}
reverseString("abdullah is goood boy")

let getNumArr = [null, 0, 2, false, 7, undefined, true]
getNumArr.filter((ele) => {
    if (typeof (ele) == 'number' && ele) {
        console.log(ele)
    }

})

// let randomStr = "react is library of javascript"
// let randomStrResult = randomStr.split(" ")
// randomStrResult.map((word) => {
//     return word.charAt(0).toUpperCase() + word.substring(1)
// }).join(" ")

