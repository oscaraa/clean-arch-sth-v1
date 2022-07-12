import { Router } from "express";
import { usuarioRouter } from "./usuario.js";
import { isTrustedError, handleError } from "../util/error/errorHandler.js"

const router = Router();

router.use("/api/usuario", usuarioRouter);

router.use(async (err, req, res, next) => {
	console.log('entre al error handler');
	if (!isTrustedError(err)) {
		console.log('fsdfsdfdsfdsd ees');
	  next(err);
	}
	await handleError(err);
});

export {
	router
};