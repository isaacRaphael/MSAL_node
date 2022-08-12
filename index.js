const express = require('express')

const app = express()
const morgan = require('morgan')
const path = require('path')


const PORT = 3007

//Middlewares
app.use(morgan('dev'))
app.use(express.static('web'))


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})






app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

