import { Router } from "express";
import { makeExpressCallback } from "../express-callback/index.js";
import { getUsuario, patchUsuario, postUsuarioFotoPerfil } from "../controllers/usuario/index.js";

const usuarioRouter = Router();

usuarioRouter.get("/:id", makeExpressCallback(getUsuario));

usuarioRouter.patch("/:id", makeExpressCallback(patchUsuario));

usuarioRouter.post("/fotoPerfil/:id", makeExpressCallback(postUsuarioFotoPerfil));



export {
	usuarioRouter
};