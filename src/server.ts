import mysql from 'mysql'
import express from 'express'
import ejs from 'ejs'

const app = express()

app.get('/', (req, res) => {
    res.send(ejs.render("index.html"))
})



app.listen(8080, () => console.log("Listening on 8080"))