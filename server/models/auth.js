
import mongoose from "mongoose";
 
const AuthSchema = new mongoose.Schema({     
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
  userID : {
    type: mongoose.Schema.Types.ObjectId , 
    ref : "User"
  },
  date: { type: Date, default: Date.now },
});
 
const Auth = mongoose.model("Auth", AuthSchema);
export default Auth;