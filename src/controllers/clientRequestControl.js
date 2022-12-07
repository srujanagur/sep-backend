import Event from '../models/clientRequestModel.js'
import catchAsyncErrors from '../middlewares/catchAsyncErrors.js'

// Create new client requirements - Sr. Customer services officer
export const createNewClientReq = catchAsyncErrors(async (req, res, next) => {
  const newEvent = await Event.create(req.body)
  res.status(201).json({
    clientRequestAdded: true,
    newEvent,
  }) 
})

//Get all client requirements - All the managers
export const getAllClientReq = catchAsyncErrors(async (req, res, next) => {
  const clientRequests = await Event.find()
  const clientReqCount = await Event.countDocuments()
  res.status(200).json({
    success: true,
    clientReqCount,
    clientRequests,
  })
})