import {Request, Response} from "express";
import {T} from "../libs/types/common"
import {} from '../models/Member.service'

const restaurantController: T= {};
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        res.send("Home Page");
    } catch (err) {
        console.log("Error, goHome", err);
    }
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        res.send("Login Page");
    } catch (err) {
        console.log("Error, on login", err);
    }
};

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        res.send("Signup Page");
    } catch (err) {
        console.log("Error, signup", err);
    }
};

export default restaurantController;