import app from './app.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

// ErrorHandling for Uncaught exceptions (like undefined eg.console.log(abc))
process.on('uncaughtException', (err) => {
  console.log(`Error: ${err.message}`)
  console.log('Shutting down the server due to UNCAUGHT EXCEPTIONS')
  process.exit(1)
})

dotenv.config()

// Connecting mongoDB
const uri = process.env.MONGODB_URI
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connection succesful')
    const server = app.listen(process.env.PORT || 5000, () =>
      console.log(`App running on port ${process.env.PORT || 5000}`)
    )
  })
  .catch(() => {
    console.log('Connection failed')
  })

// ErrorHandling for Unhandled Promise Rejection(like No try or catch for a promise)
process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`)
  console.log('Shutting down the server due to UNHANDLED PROMISE REJECTION')
  server.close(() => {
    process.exit(1)
  })
})
