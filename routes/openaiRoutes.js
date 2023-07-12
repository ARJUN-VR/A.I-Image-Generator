const express=require('express')
const router=express.Router()
const {genImage}=require('../controller/openaicontrollers')

router.post('/genimage',genImage)


module.exports=router