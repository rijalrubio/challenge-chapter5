const express = require("express");
const usersSerivce = require("./users.service");
const usersRouter = express.Router();

usersRouter.post("/login", (req,res) => {
    const login = usersService.userLogin();
    return res.json(login);
});

module.exports = usersRouter;