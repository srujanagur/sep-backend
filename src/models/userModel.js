//Hashing of passwords and authorization will be don in the next release

import mongoose from 'mongoose'
import validator from 'validator'

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'Please Enter Your first Name'],
      maxLength: [30, 'Name cannot exceed 30 characters'],
      minLength: [4, 'Name should have more than 4 characters'],
    },
    lastName: {
      type: String,
      required: [true, 'Please Enter Your last Name'],
      maxLength: [30, 'Name cannot exceed 30 characters'],
      minLength: [4, 'Name should have more than 4 characters'],
    },
    email: {
      type: String,
      required: [true, 'Please Enter Your Email'],
      unique: true,
      validate: [validator.isEmail, 'Please Enter a valid Email'],
    },
    password: {
      type: String,
      required: [true, 'Please Enter Your Password'],
      minLength: [8, 'Password should be greater than 8 characters'],
      // While fetching info, password will not be fetched
      select: false,
    },
    role: {
      type: String,
      default: 'user',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timeStamps: true }
)

export default mongoose.model('User', userSchema)
