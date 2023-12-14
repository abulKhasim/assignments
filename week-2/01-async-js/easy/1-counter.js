// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

//-------------------------------------------------------------------------------------------------------------

// let counter = 0;

// setInterval(function(){
//     counter++
//     console.log(counter);
// }, 1000)

//-------------------------------------------------------------------------------------------------------------

function delay(ms) {
    return new Promise(resolve => setInterval(resolve, ms))
}

async function counter() {
    for(let i=0; i<100; i++) {
        console.log(i);
        await delay(1000);
    }
}

counter();

