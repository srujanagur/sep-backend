import ErrorHandler from '../utils/errorHandler.js'
import catchAsyncErrors from '../middlewares/catchAsyncErrors.js'
import User from '../models/userModel.js'
import sendToken from '../utils/jwtToken.js'
import bcrypt from 'bcrypt'


// Register user
export const registerUser = catchAsyncErrors(async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body
  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
  })
  res.status(201).json({
    registered: true,
    user,
  }) 
})

// Login User
export const loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body
  // Checking if both email, password are entered
  if (!email || !password) {
    return next(new ErrorHandler('PLease enter Email & Password', 400))
  }
  // +password because in the userModel 'select': false and we need it now
  const user = await User.findOne({ email }).select('+password')
  if (!user) {
    return next(new ErrorHandler('Invalid Email or Password', 401))
  }

  if (password !== user.password) {
    return next(new ErrorHandler('Invalid Email or Password', 401))
  }
  res.status(200).json({
    success: true,
    message: 'Logged in',
  })
})

// Logout User
export const logoutUser = catchAsyncErrors(async (req, res, next) => {
  res.cookie('token', null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  })
  res.status(200).json({
    success: true,
    message: 'Logged out',
  })
})
  