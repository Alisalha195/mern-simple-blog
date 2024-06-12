

import express from "express";

import {
  getUsers ,
  getUser ,
  createUser ,
  editUser ,
  deleteUser
} from "../controllers/UserController.js"

import {upload} from "../utils/fileUpload.js"

const router = express.Router();


// get all artiles
router.get("/", getUsers)

// post a new article
router.post("/" , upload.single("image")  ,createUser)

// get article using id 
router.get("/:id", getUser)

// update an article using id
router.put("/update/:id", upload.single("image")   ,editUser)

// delete an article using id
router.delete("/delete/:id", deleteUser)

// post a new profile image
// router.post("/upload", createUser)



export default router;
