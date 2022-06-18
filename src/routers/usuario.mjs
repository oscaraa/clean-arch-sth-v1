import { Router } from "express";
import { makeExpressCallback } from "../express-callback/index.mjs";
import { getUsuario, patchUsuario, postUsuarioFotoPerfil } from "../controllers/usuario/index.mjs";

const usuarioRouter = Router();

usuarioRouter.get("/:rud", makeExpressCallback(getUsuario));

usuarioRouter.patch("/:rud", makeExpressCallback(patchUsuario));

usuarioRouter.post("/fotoPerfil/:rud", makeExpressCallback(postUsuarioFotoPerfil));

export {
	usuarioRouter
};