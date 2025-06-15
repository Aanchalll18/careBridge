import validator from 'validator'
import bcrypt from 'bcrypt'

const addDoctor=async(req,res)=>{
    try {
        const {name,email,password,speciality,degree,experience,about,fees,address}=req.body

        const imageFile=req.file

        if(!name|| !email|| !password|| !speciality|| !degree|| !experience || !about|| !fees|| !address){
             return res.json({
                success:false,
                message:"Missing Data"
             })
        }
        if(!validator.isEmail(email)){
            return res.json({
                success:false,
                message:"Please enter a valid email"
            })
        }
        if(password.length<8){
            return res.json({
                success:false,
                message:"Please enter a strong password"
            })
        }
        
    } catch (error) {
        
    }
}

export {addDoctor}