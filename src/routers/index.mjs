import { Router } from "express";
import { usuarioRouter } from "./usuario.mjs";

const router = Router();

router.use("/api/usuario", usuarioRouter);

export {
	router
};