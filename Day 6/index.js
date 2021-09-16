const fs = require('fs');

fs.mkdir("folder_async", (err) => {
    console.log("created folder");
});

fs.writeFile("./folder_async/async_file.js", "imma type some shit here", (err) => {
    console.log("file created");
})

fs.appendFile("./folder_async/async_file.js", "hemlo,appended this just fineee.", (err) => {
    console.log("stuff appended");
})

fs.readFile("./folder_async/async_file.js", "utf-8", (err, data) => {
    console.log(data);
})

fs.rename("./folder_async/async_file.js", "./folder_async/async_renamed.js", (err) => {
    console.log("file renamed");
})

// fs.unlink("./folder_async/async_renamed.js", (err) => {
//     console.log("file deleted");
// })

// fs.rmdir("folder_async", (err) => {
//     console.log("folder deleted");
// })