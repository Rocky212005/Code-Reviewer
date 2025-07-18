const express=require('express')
const aiRoutes=require("./routes/ai.routes")
const app=express()
const cors=require("cors")
const { SchemaType } = require('@google/generative-ai')

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send('hello')
})

app.use('/ai',aiRoutes)
module.exports=app;