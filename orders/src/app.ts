import { config } from 'dotenv';
import express from "express";
import 'express-async-errors'
import { json } from "body-parser";
import cookieSession from 'cookie-session'
import { errorHandler, NotFoundError, currentUser } from "@myasticketing/common";

import { newOrderRouter } from "./routes/new";
import { showOrderRouter } from './routes/show';
import { indexOrderRouter } from './routes';
import { deleteOrderRouter } from './routes/delete';

config()
const app = express();
// بصورت پیش فرض وقتی درخواست از با اچ تی تی پی اس بیاد اکسپرس ردش میکنه
app.set('trust proxy', true); // ترافیک از طریق پروکسی اینگرس میاد
app.use(json());
app.use(cookieSession({
    signed: false, // Because JWT is signed with SHA-256
    secure: process.env.NODE_ENV == 'dev' || 'test' ? false : true // visited user the app HTTPS connection
}))

app.use(currentUser);

app.use(newOrderRouter);
app.use(showOrderRouter);
app.use(indexOrderRouter);
app.use(deleteOrderRouter);


app.all('*', async () => {
    throw new NotFoundError()
})

app.use(errorHandler);


export { app }