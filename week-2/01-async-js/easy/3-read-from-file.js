// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require("fs");

function readFileAndPrint(filename) {
    fs.readFile(filename, 'utf-8', (err, data) => {
        if(err) {
            console.log("error", err);
        } else {
            console.log("file content: ", data);
            expensiveTask();
        }
    })

}

function expensiveTask() {
    console.log("before expensive task");

    for(let i=0; i<100000000; i++) {

    }

    console.log("after expensive");
}

const filename = "1-counter.js";

readFileAndPrint(filename);





console.log("hi");

for(let i=0; i<100000000; i++) {

}

console.log("hell");