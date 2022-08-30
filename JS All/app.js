// 1.JavaScript Program To Print Hello World
console.log("Hello World : )")

// 2.JavaScript Program to Add Two Numbers
function add(a,b){
    return a + b
}
add()

// 3.JavaScript Program to Find the Square Root
// let x = parseInt(prompt('Enter a Number')) <= Commented out kindly press ctrl+/
// let sqroot = Math.sqrt(x)
// console.log(sqroot)

//4.JavaScript Program to Calculate the Area of a Triangle
function areaOfTriangle(base, height){
    return base * height / 2
}
areaOfTriangle()

// 5.JavaScript Program to Swap Two Variables
// let a = prompt('Enter the first variable')
// let b = prompt('Enter the second variable')

// let temp
// swap variable
// temp=a
// a=b
// b=temp

// console.log(`The value of a after swapping: ${a}`);
// console.log(`The value of b after swapping: ${b}`);

// 6.Javascript Program to Solve Quadratic Equation

let root1, root2

// let a = prompt("Enter value of a")
// let b = prompt("Enter value of b")
// let c = prompt("Enter value of c")

// let discriminant = b * b - 4 * a * c / 2 * a

// if(discriminant > 0){
//     root1 = (-b + Math.sqrt(discriminant)) / (2 * a)
//     root2 = (-b - Math.sqrt(discriminant)) / (2 * a)
    
//     console.log(`THe roots of quadractic equation are ${root1} and ${root2}`)
// }

// else if(discriminant == 0){
//     root1 = root2 = -b / (2 * a)
//     console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
// }

// else{
//     let realPart = (-b / (2 * a)).toFixed(2)
//     let imagPart = (Math.sqrt(-discriminant) / (2 * a))
//     console.log(`The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`)
// }

// 7.JavaScript Program to Convert Kilometers to Miles

// let kilometers = prompt("Enter value in kilometers: ")

// const factor = 0.621371
// const miles = kilometers * factor
// const calculateKilometer = miles / factor  // <==To convert miles to kilometers, you can use formula:

// console.log(`${kilometers} kilometers is equal to ${miles} miles.`)
// console.log(calculateKilometer)

// 8.Javascript Program to Convert Celsius to Fahrenheit
// let celsius = prompt('Enter a celsius value: ')
// const fahrenheit = (celsius * 1.8) + 32

// console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);

// 9.Javascript Program to Generate a Random Number
const randomNo = Math.floor(Math.random() * 10)
console.log(randomNo)

// 10.Javascript Program to Check if a number is Positive, Negative, or Zero

// let num = prompt('Enter a Number:')
// if(num > 0) {
//     console.log(`${num} is Positive`)
// } else if(num == 0){
//     console.log(`${num} is Zero`)
// } else {
//     console.log(`${num} is Negative`)
// }

// 11.Javascript Program to Check if a Number is Odd or Even

// let findOddEven = prompt('Enter a number')
// if(findOddEven / 2 !== 0){
//     console.log(`${findOddEven} is even number`)
// } else{
//     console.log(`${findOddEven} is even number`)
// }

// 12. JavaScript Program to Find the Largest Among Three Numbers
// let num1 = parseFloat(prompt('Enter num1'))
// let num2 = parseFloat(prompt('Enter num2'))
// let num3 = parseFloat(prompt('Enter num3'))
// let largest;

// if(num1>=num2 && num1>=num3){
//     largest = num1
// } else if(num2>=num1 && num2>=num3){
//     largest = num2
// } else{
//     largest = num3
// }
// console.log(`The largest number is ${largest}`)

//13.JavaScript Program to Check Prime Number

// let num = parseInt(prompt('Enter a positive number'))
// let isPrime = true

// if(num === 1){
//     console.log(`${num} is neither a prime nor a composite`)
// }
// else if(num>1){
//     for(let i=2; i<num; i++){
//         if(num % i == 0){
//             isPrime=false
//             break
//         }
//     }
//     if(isPrime){
//         console.log(`${num} is a prime Number`)
//     } else{
//         console.log(`${num} is not a prime number`)
//     }
// }
// else {
//     console.log('Enter a valid number')
// }

// 14.JavaScript Program to Print All Prime Numbers in an Interval
// let lowerestNum = parseInt(prompt('Please Enter a lowest Number'))
// let highestNum = parseInt(prompt('Please Enter a higest Number'))

// console.log(`The prime numbers between ${lowerestNum} and ${highestNum} are:`);

// for(let i = lowerestNum; i<= highestNum; i++){
//     let flag = 0
//     for(let j = 2; j<i; j++){
//         if(i % j == 0){
//             flag = 1
//             break
//         }
//     }

//     if(i>1 && flag == 0){
//         console.log(i)
//     }
// }

// 15.JavaScript Program to Find the Factorial of a Number
// const number = parseInt(prompt('Enter a positive integer: '))
// if(number<0){
//     console.log('Error! Factorial for negative number does not exist.');
// }

// else if(number === 0){
//     console.log(`The factorial of ${number} is 1.`);
// }

// else{
//     let fact = 1
//     for(let i = 1; i<= number; i++){
//         fact *= i
//     }
//     console.log(`The factorial of ${number} is ${fact}.`);
// }

// 16.JavaScript Program to Find the Factorial of a Number
// let number = parseInt(prompt('Enter a number:'))
// for(let i=1; i<=10; i++){
//     console.log(`${number} * ${i} = ${number * i}`)
// }

// 17.JavaScript Program to Print the Fibonacci Sequence
// const number = parseInt(prompt('Enter the number of terms: '))
// let n1=0, n2 = 2, nextTerm
// console.log('Fibonacci Series')
// for(let i=1; i<=number; i++){
//     console.log(n1)
//     nextTerm = n1 + n2
//     n1 = n2
//     n2 = nextTerm
// }

// 18.JavaScript Program to Check Armstrong Number
// let sum = 0
// const number = prompt("Enter a three-digit positive integer: ")
// let temp = number
// while(temp > 0){
//     let remainder = temp % 10
//     sum += remainder * remainder * remainder
//     temp = parseInt(temp/10)
// }
// if(sum == number){
//     console.log(`${number} is an Armstrong number`);
// } else {
//     console.log(`${number} is not an Armstrong number.`);
// }

// 19.JavaScript Program to Find Armstrong Number in an Interval

// const lowerNumber = parseInt(prompt('Enter a positive low number'))
// const highNumber = parseInt(prompt("Enter a positive high number"))
// console.log ('Armstrong Numbers:');

// for(let i = lowerNumber; i<= highNumber; i++){
//     let numberOfDigits = i.toString().length
//     let sum = 0
//     let temp = i
//     while(temp>0){
//         let reminder = temp % 10
//         sum += reminder ** numberOfDigits
//         temp = parseInt(temp / 10) 
//     }

//     if(sum == i){
//         console.log(i)
//     }
// }

// 20.JavaScript Program to Make a Simple Calculator

// const operator = prompt('Enter Operator(+,-,*,/)')

// const num1 = parseInt(prompt('Enter first number'))
// const num2 = parseInt(prompt('Enter second number'))

// if(operator == '+'){
//     result = num1 + num2
// } else if(operator == '-'){
//     result = num1 - num2
// } else if(operator == '*'){
//     result = num1 * num2
// } else if(operator == '/'){
//     result = num1 / num2
// } else {
//     console.log("Enter a valid Number")
// }
// console.log(`${num1} ${operator} ${num2} = ${result}`);










