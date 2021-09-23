const express = require('express');
const path = require("path");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use("/", (req, res) => {
    // res.sendFile(path.join(__dirname, "public/text.txt"), "text.txt"); //browser can render this directly
    // res.download(path.join(__dirname, "public/text.txt"), "naam.txt"); //seedha download karne ke liye browser se file
    // res.render('index', { title: "Express" })
    //setting cookie when users have auth or login in redis
    res
        .status(201)
        .cookie("token", "test", {
            expire: new Date(Date.now() + 8 * 3600000) //cookie with expiration of 8hrs
        })
        .cookie("hello", "hello") //never expires
        .redirect(301, "/admin") //cookie set ke baad redirect to admin
});


app.listen(5000);
