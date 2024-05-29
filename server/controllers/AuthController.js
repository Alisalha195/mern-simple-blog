import User from '../models/user.js';
// import Auth from '../models/auth.js';

import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
  
  const { firstname, lastname, username, email, password } = req.body;
  // console.log("req.body",firstname, lastname, username, email, password)
  // if(!username  | !email | !password)
  //   throw new Error("Invalid Crdentials !"); 

  const hashedPassword = bcryptjs.hashSync(password, 10);
  try {
    // console.log("dfsdfsdf")
    // const user = await User.create({ firstname, lastname });
    // console.log("user : ",user);

    const authUser = await User.create({ username, email, password: hashedPassword, firstname, lastname })
    // console.log("in try");
    
    

    if(authUser ) {
      // console.log("authusr : ",authUser);
      res.json({
        id:authUser._id,
        username:authUser.username,
        email:authUser.email,
        firstname: authUser.firstname,
        lastname : authUser.lastname
      })
      console.log('RES is is is',res.json());
      return res;
    } else {

      // console.log('RES is is',res.json());
      res.status(400);
      res.message = "something went wrong";
      console.log('RES is is',res.message);
      return res.json()

      // throw new Error("Invalid Crdentials !");
    }

    // res.status(201).json('User created successfully!');
  } catch (error) {
    res.status(400);
    res.message = "something went wrong";
    console.log('RES is',res.message);
    return res.json()
    // throw new Error("Invalid Crdentials !");
    // next(error);
  } 
};

export const login = async(req, res, next) => {
  console.log("in login controller", req.body)
  const { email, password } = req.body;
  // if(!email | !password)
  //   throw new Error("Invalid Crdentials !"); 
 
  const validUser = await User.findOne({email});
  console.log("valid user is ", validUser)
  
  const isAdmin = validUser.isAdmin ? true : false
  const validPassword = bcryptjs.compareSync(password, validUser.password);
  if(validUser && validPassword) {
    res.json({
      id:validUser._id,
      username:validUser.username,
      email:validUser.email,
      firstname: validUser.firstname,
      lastname: validUser.lastname,
      isAdmin: isAdmin
    })
    res.message = "User Loged in ";
    console.log('RES is is',res.message);
    return res;
  } else {
    res.status(400);
    res.message = "User Did Not Loged in ";
    console.log('RES is ',res.message);
    
    return res.json()
    // return errorHandler(404, 'Wrong Credentials!')
    // return new Error("Invalid Crdentials !")
  }
}
export const loginBackup = async (req, res, next) => {
  const { email, password } = req.body;
 
    const validUser = await User.findOne({ email });
    if (!validUser) 
      return errorHandler(404, 'User not found!');
      // return next(errorHandler(404, 'User not found!'));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) 
      // return errorHandler(404, 'Wrong credentials!');
    return new Error()
      // return next(errorHandler(401, 'Wrong credentials!'));
    
    // const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass , ...rest } = validUser._doc;
    res
      // .cookie('access_token', token, { httpOnly: true })
      .status(200)
      .json(rest);
    return res;
    // return res.status(200).json("loged in ")
 
};

