const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })

db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Database opened'))

app.use(express.json())

const booksRouter = require('./routes/books')
app.use('/books', booksRouter)

app.listen(8000, () => console.log('Server started'))