import express from "express";
const router = express.Router();
import {
  createHotel,
  getHotel,
  updateHotel,
  deleteHotel,
  getAllHotels,
} from "../controllers/hotel.controller.js";
import { verifyAdmin } from "../helper/verify.token.helper.js";

//CREATE
router.post("/", verifyAdmin, createHotel);
//UPDATE
router.put("/:id", verifyAdmin, updateHotel);
//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
//GET
router.get("/:id", getHotel);
//GETALL
router.get("/", getAllHotels);
export default router;
