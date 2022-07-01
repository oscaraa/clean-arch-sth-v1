import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const Usuariochema = Schema({
    rud: {
        type: Number,
        required: true
    },
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    apellido_paterno: {
        type: String,
        required: true
    },
    apellido_materno: {
        type: String,
    }
});

const Usuario = model('Usuario', Usuariochema);


export default  Usuario;