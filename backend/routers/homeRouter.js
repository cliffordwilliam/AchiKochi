const express = require("express");

//child router
const userRouter = require("./userRouter");

// guards
const Middleware = require("../middleware");

// get controllers
const UserController = require("../controllers/userController");

// craete router
const homeRouter = express.Router();
const chatRoomRouter = require("./chatRoomRouter");
const chatRouter = require("./chatRouter");

// free
homeRouter.post("/user/login", UserController.login);
homeRouter.post("/user/register", UserController.post);
homeRouter.post("/user/googleLogin", UserController.googleLogin);

// token guard
// homeRouter.use(Middleware.tokenGuard);//unguarded for now
homeRouter.use("/user", userRouter);
homeRouter.use("/chatRoom", chatRoomRouter);
homeRouter.use("/chat", chatRouter);

// exports
module.exports = homeRouter;
