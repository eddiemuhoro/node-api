import asyncHandler from 'express-async-handler';

const getGoal= asyncHandler( async(req, res)=>{
    res.status(200).json({message: 'get goals'})
}
)
const setGoal= asyncHandler(async(req, res)=>{
    if(!req.body.text){
        res.status(400).json({message:'Invalid goal! '})
    }
    res.status(200).json({message: 'set goals'})
})

const updateGoal= asyncHandler(async(req, res)=>{
    res.status(200).json({message:`Update World! ${req.params.id}`})
})

const deleteGoal= asyncHandler(async(req, res)=>{
    res.status(200).json({message:`Delete World! ${req.params.id}`})
})

export  {getGoal, setGoal, updateGoal, deleteGoal}