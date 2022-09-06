import express from 'express'
import { json } from 'body-parser'

const app = express()

app.use(json())

app.get("/", (req, res) => {
    res.send("Yaser Home 1");
  });
app.get("/api/users/currentuser", (req, res) => {
    res.send("Hi there!");
  });

app.listen(3000, () => {
    console.log("asdsds")
    console.log('Listening on port 3000 !!')
})