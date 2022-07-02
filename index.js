const express = require("express");
const app = express();
const port = 8000;
const usersRouter = require("./users/users.router");

app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.get("/", (req,res) => {
    return res.render("index");
});

app.get("/game", (req,res) => {
    return res.render("game");
});

app.post("/login", (req,res) => {
    const user = {
        username: "username",
        password: "password"
    }
});


// router

app.use("/users", usersRouter);

app.get("/test", (req,res) => {
    return res.send("berhasil");
});

app.listen(port, () => 
    console.log("> Server is up and running on port : " + port)
);