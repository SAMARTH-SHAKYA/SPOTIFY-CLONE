import express from "express";
import { listUsers, userLogin, userSignUp } from "../controllers/userController.js";

const router = express.Router();

router.post("/login", userLogin);
router.post("/sign-up", userSignUp);
router.get("/list", listUsers);
export default router;