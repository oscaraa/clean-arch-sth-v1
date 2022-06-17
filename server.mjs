import { config } from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { router } from "./src/routers/index.mjs";


// Load environment variables from .env file
config();

// Create Express server
const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

// Routes
app.use("/", router);

app.listen(process.env.PORT, () => {
	console.log(`Example app listening on port ${process.env.PORT}!`);
});





