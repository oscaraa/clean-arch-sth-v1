
import { hacerUsuarioDb } from './usuario/index.js';
import Usuario from '../models/usuario.js';

const usuarioDb = hacerUsuarioDb({ Usuario });

export {
    usuarioDb
}