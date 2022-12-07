import mongoose from 'mongoose'

//Option to add comments by the sub-teams will be given in the next release cycle
//assignTo should be an array, changed in nect release cycle/refactoring

const taskAllocationSchema = new mongoose.Schema(
  {
    general: {
      projectReference: {
        type: String,
        required: [true, 'Please add project reference'],
      },
      description: {
        type: String,
        required: [true, 'Please add description'],
      },
      assignTo: {
        type: String,
        required: [true, 'Please add people to be assigned'],
      },
      priority: {
        type: String,
        enum: ['High', 'Medium', 'Low'],
        default: 'High',
      },
    },
    decorations: {
      projectReference: {
        type: String,
        required: [true, 'Please add project reference'],
      },
      description: {
        type: String,
        required: [true, 'Please add description'],
      },
      assignTo: {
        type: String,
        required: [true, 'Please add people to be assigned'],
      },
      priority: {
        type: String,
        enum: ['High', 'Medium', 'Low'],
        default: 'High',
      },
    },
    photography: {
      projectReference: {
        type: String,
        required: [true, 'Please add project reference'],
      },
      description: {
        type: String,
        required: [true, 'Please add description'],
      },
      assignTo: {
        type: String,
        required: [true, 'Please add people to be assigned'],
      },
      priority: {
        type: String,
        enum: ['High', 'Medium', 'Low'],
        default: 'High',
      },
    },

    music: {
      projectReference: {
        type: String,
        required: [true, 'Please add project reference'],
      },
      description: {
        type: String,
        required: [true, 'Please add description'],
      },
      assignTo: {
        type: String,
        required: [true, 'Please add people to be assigned'],
      },
      priority: {
        type: String,
        enum: ['High', 'Medium', 'Low'],
        default: 'High',
      },
    },
    graphicDesign: {
      projectReference: {
        type: String,
        required: [true, 'Please add project reference'],
      },
      description: {
        type: String,
        required: [true, 'Please add description'],
      },
      assignTo: {
        type: String,
        required: [true, 'Please add people to be assigned'],
      },
      priority: {
        type: String,
        enum: ['High', 'Medium', 'Low'],
        default: 'High',
      },
    },
    computerRelated: {
      projectReference: {
        type: String,
        required: [true, 'Please add project reference'],
      },
      description: {
        type: String,
        required: [true, 'Please add description'],
      },
      assignTo: {
        type: String,
        required: [true, 'Please add people to be assigned'],
      },
      priority: {
        type: String,
        enum: ['High', 'Medium', 'Low'],
        default: 'High',
      },
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timeStamps: true }
)
export default mongoose.model('TaskAllocation', taskAllocationSchema)
