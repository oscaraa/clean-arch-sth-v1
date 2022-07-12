import { hacerListarUsuario, hacerEditarUsuario, hacerSubirFotoPerfil } from "./usuario.js";
import { usuarioDb } from '../../data-access/index.js';
import { APIError } from '../../util/error/error.js';

const listarUsuario = hacerListarUsuario({  usuarioDb, APIError });
const editarUsuario = hacerEditarUsuario({ usuarioDb });
const subirFotoPerfil = hacerSubirFotoPerfil();

const servicioUsuario = Object.freeze({
	listarUsuario,
	editarUsuario,
	subirFotoPerfil
});


export default servicioUsuario;

export {
	listarUsuario,
	editarUsuario,
	subirFotoPerfil
};