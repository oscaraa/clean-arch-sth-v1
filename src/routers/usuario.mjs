import { Router } from "express";
import { makeExpressCallback } from "../express-callback/index.mjs";
import { obtenerUsuario } from "../controllers/usuario/index.mjs";

const usuarioRouter = Router();

usuarioRouter.get("/:rud", makeExpressCallback(obtenerUsuario));

export {
	usuarioRouter
};