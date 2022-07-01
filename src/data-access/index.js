import { makeConnection } from './conexion.js';
import { hacerUsuarioDb } from './usuario/index.js';
import Usuario from '../models/usuario.js';

const conexion = makeConnection();
const usuarioDb = hacerUsuarioDb({ Usuario });

export {
    usuarioDb
}