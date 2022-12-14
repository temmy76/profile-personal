import { Router } from "express";
import profileController from "../controller/profile.js";

const router = Router();

router.get("/", profileController.getAll);
router.get("/see/:id", profileController.seeProfile)
router.post("/", profileController.addProfile);
router.put("/:id", profileController.updateProfile);
router.delete("/:id", profileController.deleteProfile);

export { router as default };
