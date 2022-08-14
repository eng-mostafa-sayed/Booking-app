import express from "express";

const router = express.Router();
import {
  getUser,
  updateUser,
  deleteUser,
  getAllUsers,
  checkAuthentication,
} from "../controllers/User.controller.js";
import { verifyToken } from "../helper/verify.token.helper.js";

router.get("/checkauthentication", verifyToken, checkAuthentication);
//UPDATE
router.put("/:id", updateUser);
//DELETE
router.delete("/:id", deleteUser);
//GET
router.get("/:id", getUser);
//GETALL
router.get("/", getAllUsers);
export default router;
