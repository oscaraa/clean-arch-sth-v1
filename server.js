import { config } from "dotenv";
// Load environment variables from .env file
config();

import express from "express";
import fileupload from "express-fileupload"
import cors from "cors";
import { router } from "./src/routers/index.js";

// Create Express server
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);
app.use(fileupload());

// Routes
app.use("/", router);

app.listen(process.env.PORT, () => {
	console.log(`Example app listening on port ${process.env.PORT}!`);
});





