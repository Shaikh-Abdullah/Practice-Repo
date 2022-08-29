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

let findOddEven = prompt('Enter a number')
if(findOddEven / 2 !== 0){
    console.log(`${findOddEven} is even number`)
} else{
    console.log(`${findOddEven} is even number`)
}












