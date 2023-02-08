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
// function Person() {
//     this.name = 'Jhon',
//     this.age = 20,
//     this.hobbies = ['reading', 'games', 'coding']
//     this.greet = function(){
//         console.log(`Hello from ${this.name}`)
//     },
//     this.score = {
//         maths: 89,
//         science: 80
//     }
// }

// const person = new Person()
// console.log(person.name)
// console.log(person.age)
// console.log(person.hobbies[2])
// person.greet()
// console.log(person.score.science)

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
// let vowels = ['a','e','i','o','u']
// function countVowels(str){
//     let count = 0
//     for(let letter of str.toLowerCase()){
//         if(vowels.includes(letter)){
//             count++
//         }
//     }
//     return count
// }
// const string = prompt('Enter a string: ')
// const result = countVowels(string)
// console.log(result)

// 41.JavaScript Program to Remove a Property from an Object
// const student = {
//     name: 'John',
//     age: 20,
//     hobbies: ['reading', 'dancing', 'coding'],
//     greet: function(){
//         console.log('Hello everyone')
//     },
//     score: {
//         math: 84,
//         science: 87
//     }
// }

// delete student.greet
// delete student['score']
// console.log(student)

// 42.JavaScript Program to Check Whether a String Starts and Ends With Certain Characters
// function checkString(str) {
//     if(str.startsWith('S') && str.endsWith('G')){
//         console.log('The string starts with S and ends with G');
//     } else if(str.startsWith('S')){
//         console.log('The string starts with S but does not end with G');
//     } else if(str.endsWith('G')){
//         console.log('The string starts does not with S but end with G');
//     }
//     else{
//         console.log('The string does not start with S and does not end with G');
//     }
// }

// let string = prompt('Enter a string: ')
// checkString(string)

// 43.JavaScript Program to Check if a Key Exists in an Object
// const person = {
//     id: 1,
//     name: 'John',
//     age: 23
// }
// const hasKey = 'name' in person
// if(hasKey){
//     console.log('The key exist')
// } else {
//     console.log('The key does not exist.');
// }

//44.JavaScript Program to Clone a JS Object
// const person = {
//     name: 'Thomas',
//     age: 34
// }
// const clonePerson = { ...person }
// console.log('this is clone',clonePerson)
// clonePerson.name = 'Thomas Shelby'
// console.log(clonePerson.name)
// console.log(person.name)

//45.JavaScript Program to Loop Through an Object
// const student = {
//     name: 'Shaw',
//     age: 10,
//     hobbies : ['reading', 'games', 'coding']
// }
// for(let key in student){
//     let value
//     value = student[key]
//     console.log(key + ' - ' + value)
// }

//46.JavaScript Program to Merge Property of Two Objects
// const obj1 = {
//     name: 'Willy',
//     age: 20
// }

// const obj2 = {
//     name: 'Thomas',
//     age: 21,
//     gender: 'Male'
// }
// const newObj = { ...obj1, ...obj2 }
// console.log(newObj)

//47.JavaScript Program to Count the Number of Keys/Properties in an Object
// const student = {
//     name : 'qwerty',
//     hobbies: ['coding', 'music'],
//     extra: 'Artist'
// }
// let count = 0
// for(let key in student){
//     ++count
// }
// console.log(count)

//48.JavaScript Program to Add Key/Value Pair to an Object
// const obj1 = {
//     name: 'Willy',
//     age: 20
// }
// obj1.hobbies = ['coding', 'games']
// console.log(obj1.hobbies)

//49.JavaScript Program to Replace All Occurrences of a String
// const string = 'Mr red has a red house and a red car';
// const result = string.split('red').join('purple')
// console.log(result)

//50.JavaScript Program to Create Multiline Strings
// const string1 = `In this example,
// you will learn to write a JavaScript
// program that will create multiline strings.`
// console.log(string1)

//51.JavaScript Program to Format Numbers as Currency Strings
// const money = (2500).toLocaleString('en-US', {
//     style: 'currency',
//     currency: 'USD'
// })
// console.log(money)

// 52.JavaScript Program to Generate Random String
// const result = Math.random().toString(36).substring(2,9)
// console.log(result)
//Aternative way
// const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// function generateString(length){
//     let result = " "
//     const characterLength = characters.length
//     for(let i = 0; i<length; i++){
//         result += characters.charAt(Math.floor(Math.random() * characterLength))
//     }
//     return result
// }
// console.log(generateString(5))

// 53.JavaScript Program to Check if a String Starts With Another String
// const str1 = "learning JavaScript"
// const str2 = "JavaScript is Great"
// if(str1.endsWith('JavaScript') && str2.startsWith('JavaScript')){
//     console.log('Success')
// } else {
//     console.log('Failed')
// }

// 54.JavaScript Program to Trim a String
// const srt = "      JavaScript is by far most loved language"
// const result = srt.trim()
// console.log(result)

// 55.JavaScript Program to Convert Objects to Strings
// const per = {
//     name: 'Miles',
//     age: 27
// }
// const result =JSON.stringify(per)
// console.log(result)
// console.log(typeof result)

//56.JavaScript Program to Check Whether a String Contains a Substring
// const str = prompt('Enter a String')
// const checkString = prompt('Enter a string to check')
// if(str.includes(checkString)){
//     console.log(`The string contains ${checkString}`);
// } else {
//     console.log(`The string does not contain ${checkString}`);
// }

//57.JavaScript Program to Compare Two Strings
// const str1 = prompt('Enter String')
// const srt2 = prompt('Enter another String')
// if(str1 == srt2){
//     console.log('Same String')
// } else {
//     console.log('Different String')
// }

//58.JavaScript Program to Encode a String to Base64
// const str = "Learning JavaScript"
// const result = window.btoa(str)
// console.log(result)
// const  result1 = window.atob(result)
// console.log(result1)

//59.JavaScript Program to Replace all Instances of a Character in a String
// const string = 'Learning JavaScript Program'
// const splitString = string.split('a')
// console.log(splitString)
// const result = splitString.join('A')
// console.log(result)

// 60.JavaScript Program to Replace All Line Breaks with <br>
// const str = `I am Learning JavaScript.
// JavaScript is fun.
// JavaScript is easy.`
// const result = str.split('\n').join('<br>')
// console.log(result)

// 61.JavaScript Program to Display Date and Time
// const date = new Date()
// console.log(date)

//62.JavaScript Program to Check Leap Year
// const year = prompt("Enter a year check if it's leap year")
// if(year % 4 == 0){
//     console.log(`${year} is a leap year`)
// } else {
//     console.log(`${year} is not a leap year`)
// }

// 63.JavaScript Program to Format the Date
//  let currentDate = new Date()
//  let day = currentDate.getDate()
//  let month = currentDate.getMonth()
//  let year = currentDate.getFullYear()
//  if(day < 10){
//     day = '0' + day
//  }
//  if(month < 10){
//     month = '0' + month
//  }
//  const formattedDate = day + '/' + month + '/' + year
//  console.log(formattedDate)

 // 64.Javascript Program to Display Current Date
const date = new Date()
const ndate = date.toDateString()
const time = date.toLocaleTimeString()
console.log('Date: ' + ndate)
console.log('Time: ' + time)

// 65.JavaScript Program to Compare The Value of Two Dates
// const d1 = new Date()
// const d2 = new Date()
// const compare1 = d1 < d2
// console.log(compare1)
// const compare2 = d1 > d2
// console.log(compare2)
// const compare3 = d1 <= d2
// console.log(compare3)
// const compare4 = d1 >= d2
// console.log(compare4)
// const compare5 = d1.getTime() === d2.getTime()
// console.log(compare5)
// const compare6 = d1.getTime() !== d2.getTime()
// console.log(compare6)

// 66.JavaScript Program to Create Countdown Timer
// let countDownDate = new Date().getTime() + 24 * 60 * 60 * 1000
// let x = setInterval(function() {
//     let now = new Date().getTime()
//     let timeLeft = countDownDate - now

//     const days = Math.floor(timeLeft/(1000*60*60*24))
//     const hours = Math.floor(timeLeft/(1000*60*60) % 24)
//     const minutes = Math.floor(timeLeft/(1000*60) % 60)
//     const seconds = Math.floor(timeLeft/(1000) % 60)
//     console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
//     if(timeLeft < 0){
//         clearInterval(x)
//         console.log('CountDown Finished')
//     }
// }, 2000)

//67.JavaScript Program to Remove Specific Item From an Array
// function removeItemFromArray(array, n){
//     const index = array.indexOf(n)
//     if(index > -1){
//         array.splice(index, 1)
//     }
//     return array
// }
// const res = removeItemFromArray([1,2,3,4,5], 2,3)
// console.log(res)

//Alternative way
// function removeItemFromArray(array, n){
//     const newArray = []
//     for(let i =0; i<array.length; i++){
//         if(array[i] !== n){
//             newArray.push(array[i])
//         }
//     }
//     return newArray
// }
// const res = removeItemFromArray([1,2,3,4,5,3,1], 2,3)
// console.log(res)

// 68.JavaScript Program to Check if An Array Contains a Specified Value
// const array = ['you', 'will', 'learn', 'javascript'];
// if(array.includes('javascript')){
//     console.log('Array contains a value.');
// } else {
//     console.log('Array does not contains a value.');
// }

// 69.JavaScript Program to Insert Item in an Array
// function insertElement() {
//     let array = [1,2,3,4,5]
//     let index = 3
//     let element = 8
//     array.splice(index, 0, element)
//     console.log(array)
// }
// insertElement()

// 70.JavaScript Program to Append an Object to An Array
// function insertObj(array, obj){
//     array.push(obj)
//     console.log(array)
// }
// const array = [1,2,3,4]
// const obj = { x:1, y:3 }
// insertObj(array, obj)

// 71.JavaScript Program to Check if An Object is An Array
// function checkObj(arr){
//     const result = Array.isArray(arr)
//     if(result){
//         console.log(`[${arr}] is an array.`);
//     } else {
//         console.log(`[${arr}] is not an array.`);
//     }
// }
// const array = [1,2,3]
// checkObj(array)

//72.JavaScript Program to Empty an Array
// const numArr = [1,2,3,4,5]
// console.log(numArr)
// const resultArr = numArr.splice(0,0)
// console.log(resultArr)
//Alternate way

// function emptyArr(arr){
//     arr = []
//     return arr
// }
// const array = [1,2,3]
// console.log(array)
// const result = emptyArr(array)
// console.log(result)

//73.JavaScript Program to Add Element to Start of an Array
// const arr = [2,3,4,5,6]
// const result = arr.unshift(1)
// console.log(arr)

// 74.JavaScript Program to Remove Duplicates From Array
// function getUnique(arr) {
//     let uniqueArr = []
//     for (let i of arr) {
//         if (uniqueArr.indexOf(i) === -1) {
//             uniqueArr.push(i)
//         }
//     }
//     console.log(uniqueArr)
// }
// const array = [1, 2, 3, 2, 4, 3]
// getUnique(array)

// 75.JavaScript Program to Merge Two Arrays and Remove Duplicate Items

// function getUniqueAfterMarge(arr1, arr2) {
//     let arr = arr1.concat(arr2)
//     let uniqueArr = []

//     for (let i of arr) {
//         if (uniqueArr.indexOf(i) === -1) {
//             uniqueArr.push(i)
//         }
//     }
//     console.log(uniqueArr)
// }

// const array1 = [1, 2, 3]
// const array2 = [2, 3, 5]
// getUniqueAfterMarge(array1, array2)

// 76.JavaScript Program to Sort Array of Objects by Property Values
// function compareName(a, b) {
//     const name1 = a.name.toUpperCase()
//     const name2 = b.name.toUpperCase()
//     let comparison = 0
//     if (name1 > name2) {
//         comparison = 1
//     } else if (name1 < name2) {
//         comparison = -1
//     }
//     return comparison
// }
// const students = [{ name: 'Sara', age: 24 }, { name: 'John', age: 24 }, { name: 'Jack', age: 25 }];
// console.log(students.sort(compareName))

// 77.JavaScript Program to Create Two Dimensional Array
function twoDimensionArray(a, b) {
    let arr = []
    // creating two dimensional array
    for (let i = 0; i < a; i++) {
        for (let j = 0; j < b; j++) {
            arr[i] = []
        }
    }
    // inserting elements to array
    for (let i = 0; i < a; i++) {
        for (let j = 0; j < b; j++) {
            arr[i][j] = j
        }
    }
    return arr
}
const x = 2
const y = 3
const finalResult = twoDimensionArray(x, y)
console.log(finalResult)

// 78.JavaScript Program to Extract Given Property Values from Objects as Array
function extractValue(arr, prop) {
    let extractValue = arr.map(item => item[prop])
    return extractValue
}
const objArray = [{ a: 1, b: 2 }, { a: 4, b: 5 }, { a: 8, b: 9 }];
const extractResult = extractValue(objArray, 'b')
console.log(extractResult)

// 79.JavaScript Program to Compare Elements of Two Arrays
// function compareArrays(arr1, arr2) {
//     if (arr1.length != arr2.length) {
//         return false
//     } else {
//         let result = false
//         for (let i = 0; i < arr1.length; i++) {
//             if (arr1[i] != arr2[i]) {
//                 return false
//             } else {
//                 result = true
//             }
//         }
//         return result
//     }
// }
// const arr1 = [1, 2, 3, 4]
// const arr2 = [1, 2, 3, 4]
// const arrResult = compareArrays(arr1, arr2)
// if (result) {
//     console.log('The arrays have the same elements.');
// } else {
//     console.log('The arrays have different elements.');
// }

// 80.JavaScript Program to Get Random Item From an Array
// function randomItem(arr) {
//     const randomItem = Math.floor(Math.random() * arr.length)
//     const item = arr[randomItem]
//     return item
// }
// const arrayOfRandom = [1, 2, 'Hello', 9]
// const randomArr = randomItem(arrayOfRandom)
// console.log(randomArr)

//81.JavaScript Program To Perform Intersection Between Two Arrays
// function performIntersection(arr1, arr2) {
//     const intersectionResult = arr1.filter(x => arr2.indexOf(x) !== -1)
//     return intersectionResult
// }
// const interArr = [1, 2, 3, 5, 6]
// const interArr2 = [1, 2, 4, 6, 7, 4]
// const resultOfIntersection = performIntersection(interArr, interArr2)
// console.log(resultOfIntersection)

// 82.JavaScript Program to Split Array into Smaller Chunks
function splitingArr(arr, chunks) {
    for (let i = 0; i < arr.length; i += chunks) {
        let tempArr
        tempArr = arr.slice(i, i + chunks)
        console.log(tempArr)
    }
}
const splitArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const chunk = 2
splitingArr(splitArr, chunk)

// 83.JavaScript Program to Get File Extension
// function getFileExtension(fileName) {
//     const extension = fileName.split('.').pop()
//     return extension
// }
// const extensionResult1 = getFileExtension('index.js')
// console.log(extensionResult1)
// const extensionResult2 = getFileExtension('app.txt')
// console.log(extensionResult2)

//84.JavaScript Program To Check If A Variable Is undefined or null
// function checkVariable(variable) {
//     if (variable == null) {
//         console.log('The variable is undefined or null');
//     } else {
//         console.log('The variable is neither undefined nor null');
//     }
// }
// let newVariable
// checkVariable(5)
// checkVariable('Hello')
// checkVariable(null)
// checkVariable(newVariable)

//85.JavaScript Program to Set a Default Parameter Value For a Function
// function sum(x = 3, y = 5) {
//     return x + y
// }
// console.log(sum(5, 15))
// console.log(sum(7))
// console.log(sum())

//86.JavaScript Program to Illustrate Different Set Operations
// function intersection(setA, setB) {
//     let intersectionSet = new Set()
//     for (let i of setB) {
//         if (setA.has(i)) {
//             intersectionSet.add(i)
//         }
//     }
//     return intersectionSet
// }
// const setA = new Set(['apple', 'mango', 'orange']);
// const setB = new Set(['grapes', 'apple', 'banana']);
// const intersectionResult = intersection(setA, setB)
// console.log(intersectionResult)

// 87.Javascript Program to Generate a Random Number Between Two Numbers
// function generateNum(start, end) {
//     const genNumber = Math.floor(Math.random(start) * end)
//     return genNumber
// }
// const generateNumber = generateNum(1, 100)
// console.log(generateNumber)

// 88.JavaScript Program To Get The Current URL
// const url1 = window.location.href
// const url2 = document.URL
// console.log(url1)
// console.log(url2)

// 89.JavaScript Program to Validate An Email Address
// function validEmail(email) {
//     if (email.includes('@')) {
//         console.log("It's a vaild Email")
//     } else {
//         console.log('try again, not a valid Email')
//     }
// }
// let emailInput = prompt('Enter Email address: ')
// console.log(validEmail(emailInput))

// 90.JavaScript Program to Check If a Variable is of Function Type
// function testVariable(variable) {
//     if (typeof variable === 'function') {
//         console.log('The variable is of function type');
//     } else {
//         console.log('The variable is not of function type');
//     }
// }
// const counting = true
// const greet = function () {
//     console.log('hello')
// }
// testVariable(count)
// testVariable(greet)

//91.JavaScript Program To Work With Constants
// const val = 3
// console.log(val)

// 92.JavaScript Program to Pass Parameter to a setTimeout() Function
// console.log('before')
// setTimeout(() => {
//     console.log('After some second')
// }, 3000)
// console.log('After')

// 93.JavaScript Program to Generate a Range of Numbers and Characters
// function* iterate(a, b) {
//     for (let i = a; i <= b; i += 1) {
//         yield i
//     }
// }
// function range(a, b) {
//     if (typeof a === 'string') {
//         let result = [...iterate(a.charCodeAt(), b.charCodeAt())].map(n => String.fromCharCode(n));
//         console.log(result)
//     }
//     else {
//         let result = [...iterate(a, b)]
//         console.log(result)
//     }
// }
// range(1, 5)
// range('A', 'G')

// 94.JavaScript Program to Perform Function Overloading
// function sum() {
//     switch (arguments.length) {
//         case 0:
//             console.log('You have not passed any argument');
//             break;
//         case 1:
//             console.log('Pass at least two arguments');
//             break;
//         default:
//             let result = 0
//             let length = arguments.length

//             for (i = 0; i < length; i++) {
//                 result = result + arguments[i]
//             }
//             console.log(result)
//             break
//     }
// }
// sum();
// sum(5);
// sum(5, 9);
// sum(1, 2, 3, 4, 5, 6, 7, 8, 9);

// 95.JavaScript Program to Implement a Stack
// class Stack {
//     constructor() {
//         this.items = []
//     }
//     add(element) {
//         return this.items.push(element)
//     }
//     remove() {
//         if (this.items.length > 0) {
//             return this.items.pop()
//         }
//     }
//     peek() {
//         return this.items[this.items.length - 1]
//     }
//     isEmpty() {
//         return this.items.length == 0
//     }
//     size() {
//         return this.items.length
//     }
//     clear() {
//         this.items = []
//     }
// }

// let stack = new Stack()
// stack.add(1);
// stack.add(2);
// stack.add(4);
// stack.add(8);
// console.log(stack.items);

// stack.remove();
// console.log(stack.items);

// console.log(stack.peek());

// console.log(stack.isEmpty());

// console.log(stack.size());

// stack.clear();
// console.log(stack.items);

// 96.JavaScript Program to Implement a Queue
// class Queue {
//     constructor() {
//         this.items = []
//     }
//     enqueue(element) {
//         return this.items.push(element)
//     }
//     dequeue() {
//         if (this.items.length > 0) {
//             return this.items.shift()
//         }
//     }
//     peek() {
//         return this.items[this.items.length - 1]
//     }
//     isEmpty() {
//         return this.items.length == 0
//     }
//     size() {
//         return this.items.length
//     }
//     clear() {
//         this.items = []
//     }
// }
// let queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(4);
// queue.enqueue(8);
// console.log(queue.items);

// queue.dequeue();
// console.log(queue.items);

// console.log(queue.peek());

// console.log(queue.isEmpty());

// console.log(queue.size());

// queue.clear();
// console.log(queue.items);

//97.JavaScript Program to Check if a Number is Float or Integer
// function checkNumber(x) {
//     if (typeof x == 'number' && !isNaN(x)) {
//         if (Number.isInteger(x)) {
//             console.log(`${x} is integer`)
//         }
//         else {
//             console.log(`${x} is a float value.`);
//         }
//     } else {
//         console.log(`${x} is not number`)
//     }
// }
// checkNumber('hello')
// checkNumber(44)
// checkNumber(3.4);
// checkNumber(-3.4);
// checkNumber(NaN);

// 99.JavaScript Program to Pass a Function as Parameter
// function greeting() {
//     return 'Hello'
// }
// function name(user, func) {
//     const message = func()
//     console.log(`${message} ${user}`);
// }

// name('Jhon', greeting)
// name('Jack', greeting)

// 100.JavaScript Program to Remove All Whitespaces From a Text
// const string = '      Hello World       ';
// const strResult = string.split(" ").join('')
// console.log(strResult)

// 101.JavaScript Program to Write to Console
// console.log(8)
// console.log('JavaScript Program to Write to Console')

// 102.JavaScript Program to Convert Date to Number
// const date1 = new Date()
// console.log(date1)
// const dateResult = date1.getTime()
// console.log(dateResult)

// Star Pattern

// let n = 5
// let str = ""
// for (let i = 0; i <= n; i++) {
//     for (let j = 0; j < i; j++) {
//         str += '*'
//     }
//     str += '\n'
// }
// console.log(str)

////// Another Way using Function

function printStar(str, num) {
    let result = ""
    for (let i = 0; i < num; i++) {
        result += str
        console.log(result)
    }
}
printStar("*", 5)

// Shifting Zero to the End

const shiftZeroToEnd = function (num) {
    for (let i = num.length - 1; i >= 0; i--) {
        num[i] === 0 && num.splice(i, 1) && num.push(0)
    }
    return num
}
console.log(shiftZeroToEnd([0, 0, 23, 0, 23, 0, 34, 55]))

// Star pattern using while loop

let initialValue = 1;
while (initialValue <= 4) {
    let j = 4;
    let str = "";
    while (j >= initialValue) {
        str += "*";
        j--
    }
    console.log(str)
    initialValue++;
}

let data = ['A', 'B', 'C', 'D', 'A', 'A']
let result11 = data.filter((ele, i) => {
    return data.indexOf(ele) == i
})
console.log(result11)
// ---------------------------------

let unique = [...new Set(data)]
console.log(unique)


//------------------------------------
let arrays = ['A', 'B', 'C', 'D', 'A', 'A']
let resu = []

for (let i = 0; i < arrays.length; i++) {
    if (!resu.includes(arrays[i])) {
        resu.push(arrays[i])
    }
}
console.log(resu)

//---------------------------------------

let num = 4
let arr11 = []
for (let i = 1; i <= num; i++) {
    arr11.push(i)
}
console.log(arr11)


function swapToRight(num) {
    for (let i = num.length - 1; i >= 0; i--) {
        num[i] === 0 && num.splice(i, 1) && num.push(0)
    }
    return num
}

console.log(swapToRight([1, 0, 3, 0, 3, 0, 4, 3]))

// --------------------------------------------------------------

const arrayOfOddNumber = [1, 2, 3]
arrayOfOddNumber[100] = 199;
console.log(arrayOfOddNumber.length);  //<-------check in console 

const doubleEle = [1, 2, 3, 4]
let r = doubleEle.reduce((acc, curVal, index, array) =>
    array[index] = array[index] * 2
)
console.log(r)

let arrayOfLetter = ['a', 'b', 'c', 'd', 'e', 'f']
const anotherArrayOfLetter = arrayOfLetter
arrayOfLetter = []
console.log(anotherArrayOfLetter)


let uniquee = [1, 2, 2, 4, 5, 6, 6]
let set = new Set([...unique])
console.log(set)

// Reverse String 
let str = "one man"
let emptyStr = str.split("").reverse().join("")
console.log(emptyStr)

// Reverse String using function
function reverseString(str) {
    let result = str.split("").reverse().join("")
    console.log(result)
}
reverseString("Thomas is goood boy")

let falseyArr = ["", 0, null, 3, 6, 7, undefined, false]

let falseyArrResult = falseyArr.filter((el) => {
    if (el == 'number') {
        return falseyArrResult
    }
})
console.log(falseyArrResult)