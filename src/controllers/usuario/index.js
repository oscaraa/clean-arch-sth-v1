import { listarUsuario, editarUsuario, subirFotoPerfil } from "../../use-cases/usuario/index.js";
import { hacerGetUsuario, hacerPatchUsuario, hacerPostUsarioFotoPerfil } from "./usuario.js";


const patchUsuario = hacerPatchUsuario( { editarUsuario } );
const getUsuario = hacerGetUsuario( { listarUsuario } );
const postUsuarioFotoPerfil = hacerPostUsarioFotoPerfil( { subirFotoPerfil } );


const usuarioController = Object.freeze({
	patchUsuario,
	getUsuario,
	postUsuarioFotoPerfil
});

export default usuarioController;

export {
	patchUsuario,
	getUsuario,
	postUsuarioFotoPerfil
};