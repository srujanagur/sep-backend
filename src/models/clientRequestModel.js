import mongoose from 'mongoose'

const clientRequestSchema = new mongoose.Schema(
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
    description: {
      type: String,
      required: [true, 'Please add event description'],
    },
    expectedNumOfAttendees: {
      type: Number,
      default: 100,
    },
    plannedBudget: {
      type: Number,
      required: [true, 'Please add planned budget'],
      default: 7000,
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

    preferences: {
      decorations: {
        type: String,
        default: 'White and red balloons',
      },
      parties: {
        type: String,
        default: 'NA',
      },
      photosOrFilming: {
        type: String,
        default: 'Interested in more of candid photography',
      },
      food: {
        type: String,
        default: 'Prefer vegan options',
      },
      drinks: {
        type: String,
        default: 'NA',
      },
      computerRelatedIssues: {
        type: String,
        default: 'NA',
      },
    },
    otherNeeds: {
      type: String,
      default: 'NA',
    },

    status: {
      type: String,
      default: 'Initial Approval',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timeStamps: true }
)
export default mongoose.model('Event', clientRequestSchema)
