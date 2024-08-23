// import express from 'express'
const express = require('express')

const names = ['Butters', 'Bernie', 'Betsy']

const scottRouter = express.Router()

scottRouter.get('/', (req, res) => {
  res.send('Scotts route live.')
})

module.exports = scottRouter
