import { config } from 'dotenv';
import express from "express";
import 'express-async-errors'
import { json } from "body-parser";
import cookieSession from 'cookie-session'
import { errorHandler, NotFoundError, currentUser } from "@myasticketing/common";

import { createTicketRouter } from "./routes/new";
import { showTicketRouter } from './routes/show';
import { indexTicketRouter } from './routes';
import { updateTicketRouter } from './routes/update';

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

app.use(createTicketRouter);
app.use(showTicketRouter);
app.use(indexTicketRouter);
app.use(updateTicketRouter);


app.all('*', async () => {
    throw new NotFoundError()
})

app.use(errorHandler);


export { app }