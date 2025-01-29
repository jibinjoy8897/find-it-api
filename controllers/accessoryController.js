import asyncHandler from "express-async-handler";
import ModelDetail from "../models/accessory.js";
import { Error } from "mongoose";
//@desc Get all accessory
//@route GET /api/accessory
//@access public

export const getAccessories = asyncHandler(async (req, res) => {
  const modelDetails = await ModelDetail.find();
  res.status(200).json(modelDetails);
});

//@desc Create accessory
//@route POST /api/accessory
//@access public

export const createAccessory = asyncHandler(async (req, res) => {
  console.log("res.body>>>>>>>>>>", req.body);
  const { modelNumber, sku, accessories, url } = req.body;
  if (!modelNumber || !sku || !accessories || !url) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }



  const modelDetail = new ModelDetail({
    modelNumber,
    sku,
    accessories,
    url,
  })
  await modelDetail.save();
  res.status(201).json(modelDetail);
});

//@desc Get accessory
//@route GET /api/accessory/:id
//@access public

export const getAccessory = asyncHandler(async (req, res) => {
  // const modelDetail = await ModelDetail.findById(req.params.id);
  const modelDetail = await ModelDetail.find({ modelNumber: req.params.id });
  console.log("MODEL NUMBER IS >>>", req.params.id);
  if (modelDetail.length === 0) {
    res.status(404);
    throw new Error("Model Detail not found");
  }
  res.status(200).json(modelDetail);
});

//@desc Update accessory
//@route PUT /api/accessory/:id
//@access public

export const updateAccessory = asyncHandler(async (req, res) => {
  const updatedModelDetail = await ModelDetail.findOneAndUpdate(
    { modelNumber: req.params.id },
    req.body,
    { new: true }
  );
  res.status(200).json(updatedModelDetail);
});

//@desc Delete accessory
//@route DELETE /api/accessory/:id
//@access public

export const deleteAccessory = asyncHandler(async (req, res) => {
  const modelDetail = await ModelDetail.find({ modelNumber: req.params.id });
  console.log("DEtail to be deleted>>>>", modelDetail);
  if (modelDetail.length === 0) {
    res.status(404);
    throw new Error("Model Detail not found");
  }
  await ModelDetail.deleteOne();
  res
    .status(200)
    .json({ message: `Delete accessory for this model ${req.params.id}` });
});
