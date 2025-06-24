import express from 'express';
import path from "path";
import router from "./router";

/** I Entrance */
const app = express();
console.log("__dirname", __dirname);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true})); // Middleware DP -> Traditional API
app.use(express.json()); //Middleware DP -> RestAPI

/** II Sessions */

/** III Views */
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

/** IV Routers */
app.use("/", router);  // Middleware Design Pattern


export default app; //module.exports