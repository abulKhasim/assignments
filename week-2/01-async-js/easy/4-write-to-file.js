// <!-- ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks. -->

const fs = require("fs");

const fileName = "temp1.txt";

const contentToAdd = "hello, this is some content to add to the file!"

fs.writeFile(fileName, contentToAdd, (err) => {
    if(err) {
        console.log("error", err);
    } else {
        console.log("content add successful!!!");
    }
})