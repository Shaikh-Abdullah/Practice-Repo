function a() {
    let x = 10
    function b() {
        console.log(x)
    }
    b()
}
a()

class Counter {
    constructor() {
        let counter = 0
        this.incrementCount = function () {
            counter++
            console.log(counter)
        }
        this.decrementCount = function () {
            counter--
            console.log(counter)
        }
    }
}

let counter1 = new Counter()

counter1.incrementCount()
counter1.incrementCount()
counter1.decrementCount()

///////////////////////////////////////////////////////////////

for(let i=1; i<=5; i++){
    setTimeout(() => {
        console.log(i)
    }, i * 1000)
}

/////////////// Closures dome with eventListener ////////////////////

let btn = document.querySelector('#clickMe')
function attachEventListener() { // <===== Closures
    let count = 0
    btn.addEventListener('click', () => (
    console.log("Button clicked", count++)
))
}
attachEventListener()
