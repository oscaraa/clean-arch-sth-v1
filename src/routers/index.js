import { Router } from "express";
import { usuarioRouter } from "./usuario.js";
import { isTrustedError, handleError, saveError } from "../util/error/index.js"

const handlerProgramerError = handleError( { saveError } )

const router = Router();

router.use("/api/usuario", usuarioRouter);

router.use(async (err, req, res, next) => {
	if (!isTrustedError(err)) {
	  next(err);
	}
	await handlerProgramerError(err);

	//TODO: FIGURE OUT IF I HAVE TO RESPOND WITH NEXT OR NOT
	next(err);
});

export {
	router
};