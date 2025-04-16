const express = require("express");
const { userLogin,userSignUp } = require("../controllers/User.controller");
const router = express.Router();

router.post("/login", userLogin);
router.post ("/sign-up",userSignUp);

module.exports = router;
