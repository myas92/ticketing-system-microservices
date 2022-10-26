import express from "express";
import 'express-async-errors'
import { json } from "body-parser";
import mongoose from "mongoose";
import cookieSession from 'cookie-session'

import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";

const app = express();
// بصورت پیش فرض وقتی درخواست از با اچ تی تی پی اس بیاد اکسپرس ردش میکنه
app.set('trust proxy', true); // ترافیک از طریق پروکسی اینگرس میاد
app.use(json());
app.use(cookieSession({
  signed: false, // Because JWT is signed with SHA-256
  secure: true // visited user the app HTTPS connection

}))

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all('/*', async () => {
  throw new NotFoundError()
})

app.use(errorHandler);


const start = async () => {
  try {
    if(!process.env.JWT_KEY){
      throw new Error('JWT_KEY must be defined')
    }
    //Connect to databse or ...
  } catch (error) {
    console.log(error)
  }
}

app.listen(3000, async () => {
  console.log("Listening on port 3000!!!!!!!!");
});
start()