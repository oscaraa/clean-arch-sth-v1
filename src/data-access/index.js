import { makeConnection } from './conexion.js';
import { hacerUsuarioDb } from './usuario';

const conexion = makeConnection();

const usuarioDb = hacerUsuarioDb( { conexion } );

export {
    usuarioDb
}