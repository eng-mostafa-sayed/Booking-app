import express from "express";
const router = express.Router();
import {
  getUser,
  updateUser,
  deleteUser,
  getAllUsers,
} from "../controllers/User.controller.js";

//UPDATE
router.put("/:id", updateUser);
//DELETE
router.delete("/:id", deleteUser);
//GET
router.get("/:id", getUser);
//GETALL
router.get("/", getAllUsers);
export default router;
