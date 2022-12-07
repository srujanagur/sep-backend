import RecruitmentRequest from "../models/recruitmentReqmodel.js"
import catchAsyncErrors from '../middlewares/catchAsyncErrors.js'

// Create new recruitment request - HR team
export const createRecruitmentReq = catchAsyncErrors(async (req, res, next) => {
  const newRecReq = await RecruitmentRequest.create(req.body)
  res.status(201).json({
    RecruitmentRequestAdded: true,
    newRecReq,
  }) 
})

//Get all recruitment requests - HR team manager
export const getAllRecReqs = catchAsyncErrors(async (req, res, next) => {
  const recReqs = await RecruitmentRequest.find()
  const recReqCount = await RecruitmentRequest.countDocuments()
  res.status(200).json({
    success: true,
    recReqCount,
    recReqs,
  })
})