const express = require('express')
const mysql = require('mysql2')
const bookRoute = require('./Routes/book')
const authorRoute = require('./Routes/author')
const dbConfig = require('./config/database')
const pool = mysql.createPool(dbConfig)

pool.on('error', (err) => {
    console.log(err)
})

const app = express()
const PORT = 2000

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

//Membuar parameter harus di awalai dengan : di awal
app.get('/contohparameter/:username/:jurusan/:kelas', (req, res) => {
    res.json(req.params)
})

app.get('/contohparam', (req, res) => {
    res.json(req.query)
})

app.get('/', (req, res) => {
    res.write('hello world')
    res.end()
})

app.use('/book', bookRoute)
app.use('/author', authorRoute)

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`)
})