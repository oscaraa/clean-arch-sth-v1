import { listarUsuario } from "../../use-cases/usuario/index.mjs";
import { hacerActualizarUsurio, hacerObtenerUsurio } from "./usuario.mjs";


const actualizarUsuario = hacerActualizarUsurio();
const obtenerUsuario = hacerObtenerUsurio({ listarUsuario });


const usuarioController = Object.freeze({
	actualizarUsuario,
	obtenerUsuario
});

export default usuarioController;

export {
	actualizarUsuario,
	obtenerUsuario
};