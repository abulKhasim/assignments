/*

## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```

*/

// ------------------------------------------------------------------------------------------------------------

/*
this code will not work because of the asynchronous nature of "fs.readFile" function. 
The readFileName function returns fileData immediately after initiating the asynchronous file read operation, 
and when file read operation is completed, the fileData variable contains nothing.
*/

/*

code - 1;

const fs = require("fs");

function readFileName() {
    let fileData;
    fs.readFile("temp.txt", (err, data)=> {
        if(err) {
            console.log("error occurred when reading file :", err);
        } else {
            fileData = data;
        }
    })
    return fileData;
}


let fileData = readFileName();
fileData = fileData.toString();
fileData.split(" ").join("");

fs.writeFile("temp.txt", fileData, (err)=> {
    if(err) {
        console.log("error occurred when writing file: ", err);
    } else {
        console.log("write succesful!!!");
    }
})

*/

// ------------------------------------------------------------------------------------------------------------

/*

code - 2

const fs = require("fs");

function readFileName() {

    fs.readFile("temp.txt", (err, data)=> {
        if(err) {
            console.log("error occurred when reading file :", err);
        } else {
            let fileData = data.toString();

            fileData = fileData.split(" ").join("");

            fs.writeFile("temp.txt", fileData, (err)=> {
                if(err) {
                    console.log("error occurred when writing file: ", err);
                } else {
                    console.log("write succesful!!!");
                }
            })
        }
    })
    
}

readFileName();

*/

// -------------------------------------------------------------------------------------------------------------

// code - 3 using async-await

const fs = require("fs").promises; // Using fs.promises for Promise-based file operations

async function readFileName() {
    try {
        let fileData = await fs.readFile("temp.txt", "utf-8");
        return fileData.split(" ").join("");
    } catch (err) {
        console.log("error occurred when reading file", err);
    }
}

async function writeFile(fileData) {
    try {
        await fs.writeFile("temp.txt", fileData);
        console.log("write successful!!!");
    } catch(err) {
        console.log("error occurred when writing file", err);
    }
}

async function main() {
    try {
        let fileData = await readFileName();
        await writeFile(fileData);
    } catch(err) {
        console.log("error occured!!!!", err);
    }
}

main();