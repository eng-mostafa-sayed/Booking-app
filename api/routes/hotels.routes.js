import express from "express";
const router = express.Router();
import {
  createHotel,
  getHotel,
  updateHotel,
  deleteHotel,
  getAllHotels,
} from "../controllers/hotel.controller.js";

//CREATE
router.post("/", createHotel);
//UPDATE
router.put("/:id", updateHotel);
//DELETE
router.delete("/:id", deleteHotel);
//GET
router.get("/:id", getHotel);
//GETALL
router.get("/", getAllHotels);
export default router;
