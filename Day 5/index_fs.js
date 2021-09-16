const fs = require('fs');

fs.mkdirSync("newFolder")
// fs.writeFileSync("nayaFile.js", "console.log(kuchhni)");
// fs.writeFileSync("nayaFile.js", "console.log(kuchhAur);");

// fs.appendFileSync("nayaFile.js", "yeh aage ka text hai");

// const file_read = fs.readFileSync("nayaFile.js")


// const noBits = file_read.toString();
// console.log(noBits);

// fs.renameSync("nayaFile.js", "abPuranaHoGaya.js");

fs.unlinkSync("abPuranaHoGaya.js");
fs.rmdirSync("newFolder");


// in REPL we can log errors:


fs.writeFileSync("nayaFile.js", "message", function (err) {
    if (err) {
        console.log(err);
    }
});