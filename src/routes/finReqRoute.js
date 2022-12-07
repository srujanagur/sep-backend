import express from 'express'
import { createNewFinReq, getAllFinReq } from '../controllers/finReqControl.js'
const router = express.Router()

router
    .get('/FinancialRequests', getAllFinReq )
    .post('/newFinancialRequest', createNewFinReq)

export default router