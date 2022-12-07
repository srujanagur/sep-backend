import express from 'express'
import { createNewClientReq, getAllClientReq } from '../controllers/clientRequestControl.js'
const router = express.Router()

router
    .get('/newClientRequests', getAllClientReq )
    .post('/newClientRequest', createNewClientReq)

export default router