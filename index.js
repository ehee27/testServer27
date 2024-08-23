// import express from 'express'
// import router from './routes/butters.js'
const express = require('express')
const buttersRouter = require('./routes/butters')
const scottRouter = require('./routes/scott')

const port = 3500
const app = express()

app.use('/api/butters', buttersRouter)
app.use('/api/scott', scottRouter)

app.get('/', (req, res) => {
  res.send("Butter's needs to go outside.")
})

app.listen(port, () =>
  console.log(`Hello Scott, the server is live on port ${port}.`)
)
