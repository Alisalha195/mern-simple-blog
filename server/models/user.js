
import mongoose from "mongoose";
 
// const UserSchema = new mongoose.Schema({     
//   username: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   password: {
//     type : String,
//     required: true
//   },
//   date: { type: Date, default: Date.now },
// });
 
 const UserSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type : String,
      required: true
    },
    firstname : {
      type : String,
      required: true
    },
    lastname : {
      type : String,
      required: true
    },
    age : {
      type : Number,
      required: false
      // required: true
    },
    
    jobTitle : {
      type : String,
      required: false
    },
    isAdmin : {
      type: Boolean,
      required: true,
      default: false
    },
    
    breifInfo: {
      type : String,
      required: false
      // required: true
    },
    date: { type: Date, default: Date.now },
    // authenticated : {
    //   type: Boolean,
    //   required: true,
    //   default: false
    // }
 });
const User = mongoose.model("User", UserSchema);
export default User;