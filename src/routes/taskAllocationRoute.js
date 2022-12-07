import express from 'express'
import { createTaskAllocation,getAllTaskAllocations} from '../controllers/taskAllocationControl.js'
const router = express.Router()

router
    .get('/taskAllocations', getAllTaskAllocations )
    .post('/newTaskAllocation', createTaskAllocation )
  

export default router