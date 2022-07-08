
import { hacerUsuarioDb } from './usuario/index.js';
// import { makeConnection } from './conexion.js'
import Usuario from '../models/usuario.js';
import { makeConnection } from './conexion.js';

// Create Connection to MongoDB
makeConnection();

const usuarioDb = hacerUsuarioDb({ Usuario });

export {
    usuarioDb
}