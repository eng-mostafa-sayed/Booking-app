import express from "express";
const router = express.Router();
import Hotel from "../models/Hotel.model.js";
import { createError } from "../helper/error.helper.js";

//CREATE
router.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
//DELETE
router.delete("/:id", async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("hotle has been deleted");
  } catch (e) {
    res.status(500).send(e.message);
  }
});
//GET
router.get("/:id", async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
//GETALL
router.get("/", async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (e) {
    next(e);
  }
});
export default router;
