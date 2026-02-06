//  import registerUser from "./src/registerUser.js";
// registerUser("Devesh", "deveshvarshney64@gmail.com", "1234")

//  import loginUser from "./src/loginUser.js";
// loginUser("Devesh", "deveshvarshney64@gmail.com", "1234")

// import createTodo from "./src/createTodo.js";
// createTodo("Devesh", "deveshvarshney64@gmail.com", "1234")

import logger from "./logger.js";

import express from "express"
import cors from "cors";
import logger from "./logger/logger.js";
let app = express()
let port = 8080
app.use(express.json)
app.use(cors())
