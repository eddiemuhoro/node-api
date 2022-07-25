import express from 'express'
import {getGoal, setGoal, updateGoal, deleteGoal} from '../controllers/goalController.js'
const router = express.Router()
router.route('/').get(getGoal).post(setGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal)



    export default router

    