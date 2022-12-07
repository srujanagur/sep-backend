import express from 'express'
import {
  loginUser,
  logoutUser,
  registerUser,
} from '../controllers/userController.js'
const router = express.Router()

// Register, Login, Logout
router
  .post('/user/register', registerUser)
  .post('/user/login', loginUser)
  .get('/user/logout', logoutUser)

export default router