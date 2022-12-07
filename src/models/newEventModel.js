import mongoose from 'mongoose'

const newEventSchema = new mongoose.Schema(
  {
    recordNumber: {
      type: Number,
      required: [true, 'Please add record number'],
      default: 1,
    },
    clientName: {
      type: String,
      required: [true, 'Please add client name'],
    },
    eventType: {
      type: String,
      required: [true, 'Please add event type'],
    },
    from: {
      type: Date,
      default: Date.now,
      required: [true, 'Please add from date'],
    },
    to: {
      type: Date,
      default: Date.now,
      required: [true, 'Please add to date'],
    },
    expectedNumOfAttendees: {
      type: Number,
      default: 100,
    },
    preferences: {
      decorations: {
        type: Boolean,
        default: true,
      },
      parties: {
        type: Boolean,
        default: true,
      },
      photosOrFilming: {
        type: Boolean,
        default: true,
      },
      food: {
        type: Boolean,
        default: true,
      },
      drinks: {
        type: Boolean,
        default: true,
      },
    },
    expectedBudget: {
      type: Number,
      required: [true, 'Please add expected budget'],
      default: 5000,
    },
    status: {
      type: String,
      default: 'Pending',
    },
    budgetReview: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timeStamps: true }
)
export default mongoose.model('NewEvent', newEventSchema)
