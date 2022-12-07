import express from 'express'
import { createRecruitmentReq,getAllRecReqs } from '../controllers/recruitmentReqControl.js'
const router = express.Router()

router
    .get('/recReqs', getAllRecReqs )
    .post('/newRecReq', createRecruitmentReq )
  

export default router