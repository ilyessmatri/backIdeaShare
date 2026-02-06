const express = require("express");
const { SignUp, SignIn } = require("../Controlles/User");
const { isAuth } = require("../Middleswares/isAuth");
const { validSignUp, Validation } = require("../Middleswares/Validation");

const userRouter = express.Router();

userRouter.post("/SignUp", validSignUp, Validation, SignUp);

userRouter.post("/SignIn", SignIn);

userRouter.get("/CurrantUser", isAuth, (req, res) => res.send(req.user));

module.exports = userRouter;
