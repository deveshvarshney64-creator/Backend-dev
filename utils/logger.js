import Log from "../models/Log.js"

export default async (msg) => {
  await Log.create({ message: msg })
}