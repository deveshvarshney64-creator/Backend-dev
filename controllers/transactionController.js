import Transaction from "../models/Transaction.js"

export const createTransaction = async (req, res) => {
  const amount = req.body.amount
  if (amount > 1000) return res.status(403).json({ message: "2FA required" })
  const tx = await Transaction.create({ userId: req.session.user, amount, status: "pending" })
  res.json(tx)
}