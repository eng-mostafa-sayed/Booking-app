import Room from "../models/Room.model.js";
import Hotel from "../models/Hotel.model.js";
import { createError } from "../helper/error.helper.js";

export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  const newRoom = new Room(req.body);
  try {
    const savedRoom = await newRoom.save();
    // to update the hotel
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json("room added successfully");
  } catch (e) {
    next(e);
  }
};

export const updateRoom = async (req, res) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (e) {
    res.status(500).send(e.message);
  }
};
export const deleteRoom = async (req, res) => {
  try {
    const Room = await Room.findByIdAndDelete(req.params.id);
    res.status(200).json("room has been deleted");
  } catch (e) {
    res.status(500).send(e.message);
  }
};
export const getRoom = async (req, res) => {
  try {
    const Room = await Room.findById(req.params.id);
    res.status(200).json(Room);
  } catch (e) {
    res.status(500).send(e.message);
  }
};
export const getAllRooms = async (req, res, next) => {
  try {
    const Rooms = await Room.find();
    res.status(200).json(Rooms);
  } catch (e) {
    next(e);
  }
};
