import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb from './config/mongodb.js'
import connectCloudinary from './config/clodniary.js'
import adminRoute from './routes/adminRoute.js'

const app=express()
const port=process.env.PORT || 4000
connectDb()
connectCloudinary()

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send('Api Working')
})

app.use('/api/admin',adminRoute)

app.listen(port,()=>console.log("Server Started",port))