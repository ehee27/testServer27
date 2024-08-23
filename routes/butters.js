// import express from 'express'
const express = require('express')

const names = ['Butters', 'Bernie', 'Betsy']

const buttersRouter = express.Router()

buttersRouter.get('/', (req, res) => {
  res.send('Butters route live.')
})

module.exports = buttersRouter
