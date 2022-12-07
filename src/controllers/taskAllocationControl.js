import TaskAllocation from "../models/taskAllocationModel.js"
import catchAsyncErrors from '../middlewares/catchAsyncErrors.js'

// On field managers allocate tasks to their sub-teams
export const createTaskAllocation = catchAsyncErrors(async (req, res, next) => {
  const newTaskAllocation = await TaskAllocation.create(req.body)
  res.status(201).json({
    taskAllocated: true,
    newTaskAllocation,
  }) 
})

//Get all task Allocations - On field managers, sub-teams
export const getAllTaskAllocations = catchAsyncErrors(async (req, res, next) => {
  const taskAllocations = await TaskAllocation.find()
  const taskAllocationCount = await TaskAllocation.countDocuments()
  res.status(200).json({
    success: true,
    taskAllocationCount,
    taskAllocations,
  })
})