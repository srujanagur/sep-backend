import mongoose from 'mongoose'

const recruitmentReqSchema = new mongoose.Schema(
  {
    contractType: {
      type: String,
      enum: ['Full time', 'Contract'],
      default: 'Full time',
    },
    RequestingDepartment: {
      type: String,
      enum: ['Administration', 'Services', 'Production', 'Financial'],
      default: 'Services',
    },
    yearsOfExperience: {
      type: Number,
      required: [true, 'Please add years of experience'],
      default: 2,
    },
    jobTitle: {
      type: String,
      required: [true, 'Please add job title'],
    },
    jobDescription: {
      type: String,
      required: [true, 'Please add job description'],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timeStamps: true }
)
export default mongoose.model('RecruitmentRequest', recruitmentReqSchema)
