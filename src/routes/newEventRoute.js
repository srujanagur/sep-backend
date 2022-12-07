import express from 'express'
import { createNewEvent, getAllEvents,addBudgetReview,approveOrRejectEvent } from '../controllers/newEventControl.js'

const router = express.Router()

router
    .get('/newEvents', getAllEvents )
    .post('/newEvent', createNewEvent )
    .put( '/newEvent/:id/budget', addBudgetReview )
    .put('/newEvent/:id/status', approveOrRejectEvent )

export default router