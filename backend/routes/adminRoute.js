import express from 'express'
import { addDoctor } from '../controllers/adminControllers.js'
import upload from '../middlewares/multer.js'
import { loginAdmin } from '../controllers/adminControllers.js'
import authAdmin from '../middlewares/authAdmin.js'

const adminRouter=express.Router()

adminRouter.post('/add-doctor',authAdmin,upload.single('image'),addDoctor)
adminRouter.post('/login',loginAdmin)

export default adminRouter