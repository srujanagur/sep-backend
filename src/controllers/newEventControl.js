/* eslint-disable new-cap */
import NewEvent from '../models/newEventModel.js'
import ErrorHandler from '../utils/errorHandler.js'
import catchAsyncErrors from '../middlewares/catchAsyncErrors.js'

// Create new event - Customer services team
export const createNewEvent = catchAsyncErrors(async (req, res, next) => {
  const newEvent = await NewEvent.create(req.body)
  res.status(201).json({
    eventAdded: true,
    newEvent,
  }) 
})

//Get all events - All the managers
export const getAllEvents = catchAsyncErrors(async (req, res, next) => {
  const events = await NewEvent.find()
  const eventCount = await NewEvent.countDocuments()
  res.status(200).json({
    success: true,
    eventCount,
    events,
  })
})

//Add Budget Review - Financial manager
export const addBudgetReview = catchAsyncErrors(async ( req, res, next ) =>
{
    let event = await NewEvent.findById(req.params.id)
  if (!event) {
    return next(new ErrorHandler("Event not found", 404))
  }
  event = await NewEvent.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  })
  res.status(200).json({
    budgetReviewAdded: true,
    event
  })
})

// Approval/Rejection of event - Sr. Financial manager or Admin manager
export const approveOrRejectEvent = catchAsyncErrors(async ( req, res, next ) =>
{
    let event = await NewEvent.findById(req.params.id)
  if (!event) {
    return next(new ErrorHandler("Event not found", 404))
  }
  event = await NewEvent.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  })
  res.status(200).json({
    statusChanged: true,
    event
  })
})