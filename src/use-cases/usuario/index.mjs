import { hacerListarUsuario } from "./usuario.mjs";



const listarUsuario = hacerListarUsuario();

const servicioUsuario = Object.freeze({
	listarUsuario,
});


export default servicioUsuario;

export {
	listarUsuario,
};