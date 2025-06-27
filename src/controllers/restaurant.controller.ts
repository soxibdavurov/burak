import {Request, Response} from "express";
import {T} from "../libs/types/common"
import MemberService, {} from '../models/Member.service'
import { MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const restaurantController: T= {};
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log('goHome');
        // Logic
        // Service model
        // ....
        res.send("Home Page");
        // send | json | redirect | end | render
    } catch (err) {
        console.log("Error, goHome", err);
    }
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log('getLogin');
        res.send("Login Page");
    } catch (err) {
        console.log("Error, on login", err);
    }
};

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log('getSignup');
        res.send("Signup Page");
    } catch (err) {
        console.log("Error, signup", err);
    }
};

restaurantController.processLogin = (req: Request, res: Response) => {
    try {
        console.log('processLogin');
        res.send("DONE");
    } catch (err) {
        console.log("Error, signup", err);
    }
};

restaurantController.processSignup = async (req: Request, res: Response) => {
    try {
        console.log('processSignup');
        console.log('body', req.body);


        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;

        const memberService  = new MemberService();
        const result = await memberService.processSignup(newMember);
        
        res.send(result);
    } catch (err) {
        console.log("Error, processSignup", err);
        res.send(err);
    }    
};
export default restaurantController;