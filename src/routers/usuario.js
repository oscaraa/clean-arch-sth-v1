import { Router } from "express";
import { makeExpressCallback } from "../express-callback/index.js";
import { getUsuario, patchUsuario, postUsuarioFotoPerfil } from "../controllers/usuario/index.js";

const usuarioRouter = Router();

usuarioRouter.get("/:rud", makeExpressCallback(getUsuario));

usuarioRouter.patch("/:rud", makeExpressCallback(patchUsuario));

usuarioRouter.post("/fotoPerfil/:rud", makeExpressCallback(postUsuarioFotoPerfil));

export {
	usuarioRouter
};