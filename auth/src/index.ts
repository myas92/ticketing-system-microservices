import express from 'express'
import { json } from 'body-parser'

const app = express()

app.use(json())

app.get('/', (req, res) => {
    res.json({ message: "ok" })
})

app.listen(4000, () => {
    console.log("asd")
    console.log('Listening on port 4000 !!!')
})