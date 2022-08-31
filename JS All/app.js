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

// 21.JavaScript Program to Find the Sum of Natural Numbers

// const naturalNum = parseInt(prompt('Enter a natural number'))
// let sum = 0

// for(let i = 1; i<naturalNum; i++){
//     sum += i
// }
// console.log('The sum of natural numbers:', sum);

// 22.JavaScript Program to Check if the Numbers Have Same Last Digit
// let a = prompt('Enter a first number')
// let b = prompt('Enter a second number')
// let c = prompt('Enter a third number')

// const result1 = a % 10
// const result2 = b % 10
// const result3 = c % 10

// if(result1 == result2 && result1 == result3){
//     console.log(`${a}, ${b} and ${c} have the same last digit.`);
// }
// else {
//     console.log(`${a}, ${b} and ${c} have different last digit.`);
// }

// 23.JavaScript Program to Find HCF or GCD

// let hcf
// const number1 = prompt('Enter a first positive integer')
// const number2 = prompt('Enter a second positive integer: ');

// for(let i=1; i<=number1 && i<=number2; i++){
//     if(number1 % i == 0 && number2 % i == 0){
//         hcf=1
//     }
// }
// console.log(`HCF of ${number1} and ${number2} is ${hcf}.`);

// 24.JavaScript Program to Find LCM
// const num1 = prompt('Enter a first positive integer: ');
// const num2 = prompt('Enter a second positive integer: ')

// let min = (num1 > num2) ? num1 : num2
// while(true){
//     if(min%num1 == 0 && min % num2 == 0){
//         console.log(`The LCM of ${num1} and ${num2} is ${min}`);
//         break
//     }
//     min++
// }

// 25.JavaScript Program to Find the Factors of a Number

// let num = prompt("Enter a positive number")
// console.log(`The factors of ${num} is:`);

// for(let i = 1; i<num; i++){
//     if(num % i == 0){
//         console.log(i)
//     }
// }

// 26. JavaScript Program to Find Sum of Natural Numbers Using Recursion
// function sum(num){
//     if(num > 0){
//         return num + sum(num - 1) 
//     } else {
//         return num
//     }
// }
// const number = parseInt(prompt('Enter a positive number: '))
// const result = sum(number)
// console.log(`The sum is ${result}`)

// 27.JavaScript Program to Guess a Random Number
// function guess(){
//     const ran = Math.floor(Math.random() * 10) + 1
//     let input = parseInt(prompt('Enter a number between 1 to 10'))
//     while(input !== ran){
//         input = parseInt(prompt('Enter a number between 1 to 10'))
//     }
//     if(input == ran){
//         console.log('YOU GUSSED IT RIGHT')
//     }
// }
// guess()

// 28. JavaScript Program to Shuffle Deck of Cards
// const suits = ["Spades", "Diamonds", "Club", "Heart"];
// const values = [
//   "Ace",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "10",
//   "Jack",
//   "Queen",
//   "King",
// ];
// let deck = []
// // create a deck of cards
// for(let i=0; i<suits.length; i++){
//     for(let x=0; x<values.length; x++){
//       let card = { Value: values[x], Suit: suits[i] }
//       deck.push(card)  
//     }
// }
// // shuffle the cards
// for (let i=deck.length - 1; i > 0; i++){
//     let j = Math.floor(Math.random() * i)
//     let temp = deck[i]
//     deck[i] = deck[j]
//     deck[j] = temp
// }
// console.log('The first five cards are:');
// for(let i=0; i<5; i++){
//     console.log(`${deck[i].Value} of ${deck[i].Suit}`)
// }

// 29.JavaScript Program to Display Fibonacci Sequence Using Recursion
//  function fibonacci(num){
//     if(num < 2){
//         return num
//     } else {
//         return fibonacci(num -1) + fibonacci(num - 2)
//     }
//  }
// const nTerms = prompt("Enter the number of terms: ")
// if(nTerms <= 0){
//     console.log('Enter a positive number')
// }
// else {
//     for(let i=0; i<nTerms; i++){
//         console.log(fibonacci(i))
//     }
// }

// 30.JavaScript Program to Find Factorial of Number Using Recursion
// function factorial(num){
//     if(num == 0){
//         return 1
//     }
//     else{
//         return num * factorial(num -1)
//     }
// }
// let input = prompt('Enter a number')
// if(input >= 0){
//     const result = factorial(input)
//     console.log(`The factorial of ${input} is ${result}`);
// } else {
//     console.log('Enter a positive number.');
// }

// 31.JavaScript Program to Convert Decimal to Binary
// const number = parseInt(prompt('Enter a decimal number: '))

// const result = number.toString(2)

// console.log("Binary:" + ' ' + result)

// 32.JavaScript Program to Find ASCII Value of Character
// const string = prompt('Enter a character: ')
// const result = string.charCodeAt(0)
// console.log(`The ASCII value is: ${result}`)

// 33.JavaScript Program to Check Whether a String is Palindrome or Not
// function checkPalindrome(string){
//     const len = string.length
//     for(let i=0; i<len/2; i++){
//         if(string[i] !== string[len - 1 - i]){
//             return 'It is not a palindrome'
//         }
//     }
//     return 'Its a palindrome'
// }
// const string = prompt('Enter a String: ')
// const value = checkPalindrome(string)
// console.log(value)

// 34.JavaScript Program to Sort Words in Alphabetical Order
// const string = prompt('Enter a sentence: ')
// const words = string.split(' ')
// words.sort()
// console.log('The sorted words are: ')
// for (const element of words){
//     console.log(element)
// }

// 35.JavaScript Program to Replace Characters of a String
// const string = 'Mr Red has a red house and a red car';
// const nextText = string.replace('red', 'blue')
// console.log(nextText)
//Replace Character of a String Using RegEx
// const regex = /red/g
// const result = string.replace(regex, 'purple')
// console.log(result)

//36.JavaScript Program to Reverse a String
// function reverseString(str){
//     let newString = ''
//     for(let i = str.length - 1; i >=0; i--){
//     newString += str[i]
// }
//     return newString
// }
// const string = prompt('Enter a string')
// const result = reverseString(string)
// console.log(result)

// 37.JavaScript Program to Create Objects in Different Ways
function Person() {
    this.name = 'Jhon',
    this.age = 20,
    this.hobbies = ['reading', 'games', 'coding']
    this.greet = function(){
        console.log(`Hello from ${this.name}`)
    },
    this.score = {
        maths: 89,
        science: 80
    }
}

const person = new Person()
console.log(person.name)
console.log(person.age)
console.log(person.hobbies[2])
person.greet()
console.log(person.score.science)

// 38.JavaScript Program to Check the Number of Occurrences of a Character in the String
// function countString(str, letter){
//     let count = 0
//     for(let i = 0; i < str.length; i++){
//         if(str.charAt(i) == letter){
//             count += 1
//         }
//     }
//     return count
// }
// const string = prompt("Enter a string")
// const letterToCheck = prompt('Enter a letter to check')
// const result = countString(string, letterToCheck)
// console.log(result)

// 39.JavaScript Program to Convert the First Letter of a String into UpperCase
// function capitalizeFirstLetter(str){
//     const capital = str.charAt(0).toUpperCase() + str.slice(1)
//     return capital
// }
// const string = prompt('Enter a String: ')
// const result = capitalizeFirstLetter(string)
// console.log(result)

// 40.JavaScript Program to Count the Number of Vowels in a String
let vowels = ['a','e','i','o','u']
function countVowels(str){
    let count = 0
    for(let letter of str.toLowerCase()){
        if(vowels.includes(letter)){
            count++
        }
    }
    return count
}
const string = prompt('Enter a string: ')
const result = countVowels(string)
console.log(result)

// 41.JavaScript Program to Remove a Property from an Object
