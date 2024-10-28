

import express from "express";

import {
  getUsers ,
  getUser ,
  createUser ,
  editUser ,
  deleteUser,
  checkFile
} from "../controllers/UserController.js"

import {upload} from "../utils/fileUpload.js"

const router = express.Router();


// get all users
router.get("/", getUsers)

// post a new user
router.post("/"   ,createUser)

// get user using id 
router.get("/:id", getUser)

//check file 
router.patch("/checkFile" ,checkFile)

// update a user using id
router.put("/update/:id"  , upload.single("image") ,editUser)

// delete a user using id
router.delete("/delete/:id", deleteUser)

// post a new profile image
// router.post("/upload", createUser)



export default router;
