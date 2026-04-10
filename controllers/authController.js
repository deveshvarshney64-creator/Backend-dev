import User from "../models/User.js"
import bcrypt from "bcrypt"

export const register = async (req, res) => {
  const hash = await bcrypt.hash(req.body.password, 10)
  const user = await User.create({ email: req.body.email, password: hash })
  res.json(user)
}

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email })
  if (!user) return res.status(400).json({ message: "Invalid" })
  const valid = await bcrypt.compare(req.body.password, user.password)
  if (!valid) return res.status(400).json({ message: "Invalid" })
  req.session.user = user._id
  res.json({ message: "Logged in" })
}