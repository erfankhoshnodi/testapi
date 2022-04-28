var express = require('express')
const res = require('express/lib/response')
var app = express()

app.get('/api',(req,res) => {
    res.send('server is running')
})

app.listen(3000,() => {
    console.log('server is running on http://localhost:3000')
})