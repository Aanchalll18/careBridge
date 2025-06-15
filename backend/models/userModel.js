import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    image:{type:String,default:"https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-875.jpg?semt=ais_hybrid&w=740"},
    address:{type:Object,default:{line1:'',line2:''}},
    gender:{type:Object,default:'Not Selected'},
    dob:{type:String,default:"Not Selected"},
    phone:{type:String,default:'0000000000'}
    
})

const userModel= mongoose.models.user
|| mongoose.model('user',userSchema)

export default userModel