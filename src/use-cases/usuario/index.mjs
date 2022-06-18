import { hacerListarUsuario, hacerEditarUsuario, hacerSubirFotoPerfil } from "./usuario.mjs";

const listarUsuario = hacerListarUsuario();
const editarUsuario = hacerEditarUsuario();
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