

import express from "express";

import {
  getUsers ,
  getUser ,
  createUser ,
  editUser ,
  deleteUser
} from "../controllers/UserController.js"

const router = express.Router();


// get all artiles
router.get("/", getUsers)

// post a new article
router.post("/", createUser)

// get article using id 
router.get("/:id", getUser)

// update an article using id
router.put("/update/:id", editUser)

// delete an article using id
router.delete("/delete/:id", deleteUser)



export default router;
