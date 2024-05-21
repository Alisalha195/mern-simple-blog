import User from '../models/user.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
  // console.log("req.body",req.body)
  const { username, email, password } = req.body;

  // if(!username  | !email | !password)
  //   throw new Error("Invalid Crdentials !"); 

  const hashedPassword = bcryptjs.hashSync(password, 10);
  try {
    const user = await User.create({ username, email, password: hashedPassword })
    
    if(user) {
      res.json({
        id:user._id,
        username:user.username,
        email:user.email
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
  // console.log("in login controller", req.body)
  const { email, password } = req.body;
  // if(!email | !password)
  //   throw new Error("Invalid Crdentials !"); 
 
  const validUser = await User.findOne({email});
  // console.log("valid user is ", validUser)
  
  const validPassword = bcryptjs.compareSync(password, validUser.password);
  if(validUser && validPassword) {
    res.json({
      id:validUser._id,
      username:validUser.username,
      email:validUser.email
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
export const login2 = async (req, res, next) => {
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

/*
export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, 'User not found!'));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, 'Wrong credentials!'));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie('access_token', token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const google = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = user._doc;
      res
        .cookie('access_token', token, { httpOnly: true })
        .status(200)
        .json(rest);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      const newUser = new User({
        username:
          req.body.name.split(' ').join('').toLowerCase() +
          Math.random().toString(36).slice(-4),
        email: req.body.email,
        password: hashedPassword,
        avatar: req.body.photo,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = newUser._doc;
      res
        .cookie('access_token', token, { httpOnly: true })
        .status(200)
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};

export const signOut = async (req, res, next) => {
  try {
    res.clearCookie('access_token');
    res.status(200).json('User has been logged out!');
  } catch (error) {
    next(error);
  }
};

*/
