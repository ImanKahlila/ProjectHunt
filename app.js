const express = require('express')
const app = express()
const connectDB = require('./config/database')

require('dotenv').config({ path: '/config/.env' })

connectDB()

//  MIDDLEWARE

//  ROUTES

app.listen(process.env.PORT, () => {
  console.log(`Server is running and connected`)
})
