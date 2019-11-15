const express=require('express')
////random file
const router=express.Router()

router.get('/login',(req,res)=>{
    res.json('login page')
})
router.post('/login',(req,res)=>{
console.log(req.body)
})

module.exports=router