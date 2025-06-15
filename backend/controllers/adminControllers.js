import validator from 'validator'
import bcrypt from 'bcrypt'
import { v2 as cloudinary } from 'cloudinary';
import doctorModel from '../models/doctorModel.js'

// const addDoctor=async(req,res)=>{
//     try {
//         const {name,email,password,speciality,degree,experience,about,fees,address}=req.file

//         const imageFile=req.file

//         if(!name|| !email|| !password|| !speciality|| !degree|| !experience || !about|| !fees|| !address){
//              return res.json({
//                 success:false,
//                 message:"Missing Data"
//              })
//         }
//         if(!validator.isEmail(email)){
//             return res.json({
//                 success:false,
//                 message:"Please enter a valid email"
//             })
//         }
//         if(password.length<8){
//             return res.json({
//                 success:false,
//                 message:"Please enter a strong password"
//             })
//         }
//         const salt=await bcrypt.genSalt(10)
//         const hashedpassword=await bcrypt.hash(password,salt)

//         const imageUpload=await cloudniary.uploader.upload(imageFile.path,{resource_type:"image"})

//         const imageUrl=imageUpload.secure_url

//         const doctorData={
//             name,
//             email,
//             image:imageUrl,
//             password:hashedpassword,
//             speciality,
//             degree,
//             experience,
//             about,
//             fees,
//             address:JSON.parse(address),
//             date:Date.now()
//         }
//         const newDoctor=new doctorModel(doctorData)
//         await newDoctor.save()
//         res.json({
//             success:true,
//             message:"Doctor Added"
//         })
        
//     } catch (error) {
//         console.log(error)
//         res.json({
//             success:false,
//             message:error.message
//         })
//     }
// };

const addDoctor = async (req, res) => {
    try {
        const { email, password, speciality, degree, experience, about, fees, address, name } = req.body;

        const imageFile = req.file; // Ensure imageFile exists and is valid

        // console.log({ email, password, speciality, degree, experience, about, fees, address, name, imageFile });

        // Validate input
        if (
            !email ||
            !password ||
            !speciality ||
            !degree ||
            !experience ||
            !about ||
            !fees ||
            !address ||
            !name ||
            !imageFile
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are mandatory",
            });
        }

        // Validate email format
        if (!validator.isEmail(email)) {
            return res.status(400).json({
                success: false,
                message: "Please enter a valid email",
            });
        }

        // Validate password strength
        if (password.length < 8) {
            return res.status(400).json({
                success: false,
                message: "Please enter a strong password",
            });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Upload image to Cloudinary
        if (!imageFile || !imageFile.path) {
            return res.status(400).json({
                success: false,
                message: "Image file is required",
            });
        }

        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
            resource_type: "image",
        });

        const imageUrl = imageUpload.secure_url;

        // Prepare doctor data
        const docData = {
            name,
            email,
            image: imageUrl,
            password: hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            
            address: typeof address === 'string' ? JSON.parse(address) : address,
            date: Date.now(),
        };

        // Save to database
        const newDoc = new doctorModel(docData);
        await newDoc.save();

        return res.status(201).json({
            success: true,
            message: "Doctor added successfully",
        });
    } catch (e) {
        console.error(e.message);
        return res.status(500).json({
            success: false,
            message: e.message,
        });
    }
};

export {addDoctor}