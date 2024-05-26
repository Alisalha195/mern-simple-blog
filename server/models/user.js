
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
      // default:20
      // required: true
    },
    breifInfo: {
      type : String,
      // default:"Breif Info"
      // required: true
    }
    // authenticated : {
    //   type: Boolean,
    //   required: true,
    //   default: false
    // }
 });
const User = mongoose.model("User", UserSchema);
export default User;