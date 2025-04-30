import bcrypt from "bcrypt";
import { User } from "../models/User.js";
import jwt from "jsonwebtoken";

const maxAge = 24 * 60 * 60 * 1000;
const createToken = (id, email, name) => {
  const token = jwt.sign(
    {
      id,
      email,
      name,
    },
    process.env.SECRET,
    { expiresIn: maxAge }
  );
  return token;
};

export const userSignUp = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).send("All details are required.");
    }

    const hasUser = await User.findOne({ email });
    if (hasUser) {
      return res.status(400).send("User already exists.");
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name: username,
      email: email,
      password: hashPassword,
    });
    res.cookie("jwt", createToken(user._id, user.email, user.name), {
      maxAge,
      secure: true,
      sameSite: "None",
      httpOnly: true,
    });

    return res.status(201).json({
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (error) {
    console.error("Signup Error:", error);
    return res.status(500).send("Something went wrong.");
  }
};

export const userLogin = async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send("Email and password is required");
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send("User not Found");
    }
    res.cookie("jwt", createToken(user._id, user.email, user.name), {
      maxAge,
      secure: true,
      sameSite: "None",
      httpOnly: true,
    });

    return res.status(200).json({
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).send("Something went wrong.");
  }
};

export const listUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 }); // Exclude password field
    res.status(200).json({ success: true, users });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ success: false, message: "Failed to fetch users" });
  }
};