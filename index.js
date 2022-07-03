const express = require("express");
const usersRouter = require("./users/users.router");
const app = express();
const port = 8000;

app.use(express.json());

// MIDDLEWARE untuk import assets
app.use(express.static("public"));
app.use(express.urlencoded({extended:false}));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

// morgan as logger
const morgan = require("morgan");
app.use(morgan("tiny"));

// route home page
app.get("/", (req,res) => {
     res.render("index");
});

app.get("/game", (req,res) => {
     res.render("game");
});

// route login postman
app.use(usersRouter);

app.listen(port, () => 
    console.log("> Server is up and running on port : " + port)
);