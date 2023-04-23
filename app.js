const express = require('express')
const app = express()
const dotenv = require('dotenv')
const connectDB = require('./config/database')

require('dotenv').config({ path: './config/.env' })

connectDB()

//  MIDDLEWARE

//  ROUTES

const PORT = process.env.PORT || 8888

app.listen(PORT, () => {
  console.log(`Server is running and connected`)
})
