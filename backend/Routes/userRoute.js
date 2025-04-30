import express from "express";
import { userLogin, userSignUp } from "../controllers/userController.js";

const router = express.Router();

router.post("/login", userLogin);
router.post("/sign-up", userSignUp);

export default router;