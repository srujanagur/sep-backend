import FinancialRequest from '../models/financialReqModel.js'
import catchAsyncErrors from '../middlewares/catchAsyncErrors.js'

// Create new financial request - On field managers
export const createNewFinReq = catchAsyncErrors(async (req, res, next) => {
  const newFinReq = await FinancialRequest.create(req.body)
  res.status(201).json({
    financialRequestAdded: true,
    newFinReq,
  }) 
})

//Get all financial requests - Financial manager
export const getAllFinReq = catchAsyncErrors(async (req, res, next) => {
  const finRequests = await FinancialRequest.find()
  const finReqCount = await FinancialRequest.countDocuments()
  res.status(200).json({
    success: true,
    finReqCount,
    finRequests,
  })
})