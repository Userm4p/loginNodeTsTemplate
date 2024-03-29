import { Router } from "express";
import { UserMiddleWare } from "../middlewares/user";
import { UserServices } from "../services/users";


const userRoutes = Router();

const userMiddleware = new UserMiddleWare();
const userServices = new UserServices();

userRoutes.post("/register", userMiddleware.validateUserExist, userServices.createUser);
userRoutes.post("/login", userMiddleware.validateUser, userServices.loginUser);

export default userRoutes;