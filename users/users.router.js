const express = require("express");
const usersService = require("./users.service");
const usersRouter = express.Router();

usersRouter.post("/login", (req,res) =>{
    const login = usersService.userLogin(req,res);
    return res.json(login);
});

module.exports = usersRouter;