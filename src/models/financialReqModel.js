import mongoose from 'mongoose'

const finReqSchema = new mongoose.Schema(
  {
    RequestingDepartment: {
      type: String,
      enum: ['Administration', 'Services', 'Production', 'Financial'],
      default: 'Services',
    },
    projectReference: {
      type: String,
      required: [true, 'Please add project reference number'],
    },
    requiredAmount: {
      type: Number,
      required: [true, 'Please add required amount'],
    },
    reason: {
      type: String,
      required: [true, 'Please add reason'],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timeStamps: true }
)
export default mongoose.model('FinancialRequest', finReqSchema)
