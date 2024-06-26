import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    profilePicture:{
        type:String,
        default:'https://e1.pxfuel.com/desktop-wallpaper/838/654/desktop-wallpaper-hyper-gaming-logo-gaming-profile-thumbnail.jpg',
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
}
  ,{timestamps:true}
);

const User = mongoose.model('User',userSchema);

export default User;