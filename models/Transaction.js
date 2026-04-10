import mongoose from "mongoose"

const transactionSchema = new mongoose.Schema({
  userId: String,
  amount: Number,
  status: String,
  otp: String
})

export default mongoose.model("Transaction", transactionSchema)