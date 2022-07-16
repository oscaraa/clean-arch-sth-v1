import { Router } from "express";
import { usuarioRouter } from "./usuario.js";
import { isTrustedError, handleError, saveError } from "../util/error/index.js"

const handlerProgramerError = handleError( { saveError } )

const router = Router();

router.use("/api/usuario", usuarioRouter);

router.use(async (err, req, res, next) => {
	
	if (isTrustedError(err)) {
		// return { statusCode: err.st⁄atusCode, body: { error: err.message } };
		// err.body = { error: err.message }
		return { statusCode: err.statusCode, body: { error: err.message } };
	}
	await handlerProgramerError(err, { url: req.url, method: req.method, paramas: req.params, body: req.body, query: req.query });
	return { statusCode: 500, body: { error: "An unkown error occurred." } };
});

export {
	router
};