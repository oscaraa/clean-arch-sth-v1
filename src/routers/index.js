import { Router } from "express";
import { usuarioRouter } from "./usuario.js";

const router = Router();

router.use("/api/usuario", usuarioRouter);

export {
	router
};