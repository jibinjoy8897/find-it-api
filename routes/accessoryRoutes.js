import express from "express";
import {
  getAccessories,
  createAccessory,
  getAccessory,
  updateAccessory,
  deleteAccessory,
} from "../controllers/accessoryController.js";
const router = express.Router();

router.route("/").get(getAccessories).post(createAccessory);
router
  .route("/:id")
  .get(getAccessory)
  .put(updateAccessory)
  .delete(deleteAccessory);

export default router;
