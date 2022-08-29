let num = parseInt(prompt('Enter a Positive number'))
let isPrime = true

if(num === 1){
    console.log("1 is nor a prime neither a composite")
}

else if(num>1){
    for(let i=2; i<num; i++){
        if(num % i == 0){
            isPrime=false
            break
        }
    }


    if(isPrime){
        console.log(`${num} is a Prime Number`)
    } else {
        console.log(`${num} is not a Prime Number`)
    }
}

else{
    console.log('Invalid number')
}

