import express from 'express';
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin"
import morgan from 'morgan';
import { MORGAN_FORMAT } from './libs/config';

import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";
import { T } from './libs/types/common';

const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
uri: String(process.env.MONGO_URL),
collection: "sessions",
});

/** I Entrance */
const app = express();
console.log("__dirname", __dirname);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true})); // Middleware DP -> Traditional API
app.use(express.json()); //Middleware DP -> RestAPI
app.use(morgan(MORGAN_FORMAT));

/** II Sessions */
app.use(
  session({
        secret: String(process.env.SESSION_SECRET),
        cookie: {
        maxAge: 1000 * 3600 * 3 // 3h
  },
  store: store,
  resave: true, // 10:30 auth => 13:30 | 12:00 => 15:00
  saveUninitialized: true   
    })
);

app.use(function(req, res, next) {
  const sessionInstance = req.session as T;
  res.locals.member = sessionInstance.member;
  next()
});


/** III Views */
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

/** IV Routers */
// BSSR: Backendda frontendni qurib olish
app.use("/admin", routerAdmin);  // Middleware Design Pattern EJS  SSR
app.use("/", router);  // Middleware Design Pattern: React  Frontend

export default app; //module.exports