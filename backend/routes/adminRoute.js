import express from 'express'
import { addDoctor } from '../controllers/adminControllers.js'
import upload from '../middlewares/multer.js'
import { loginAdmin } from '../controllers/adminControllers.js'

const adminRouter=express.Router()

adminRouter.post('/add-doctor',upload.single('image'),addDoctor)
adminRouter.post('/login',loginAdmin)

export default adminRouter