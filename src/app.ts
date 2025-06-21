import express from 'express';
import path from "path";

/** I Entrance */
const app = express();
console.log("__dirname", __dirname);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

/** II Sessions */

/** III Views */
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

/** IV Routers */

export default app; //module.exports