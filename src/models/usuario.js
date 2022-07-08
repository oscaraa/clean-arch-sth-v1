import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const Usuariochema = new Schema({
    rud: {
        type: Number,
        required: true,
        unique: true,
        min: 40000,
        max: 9999999
    },
    nombre: {
        type: String,
        required: true,
    },
    apellido_paterno: {
        type: String,
        required: true
    },
    apellido_materno: {
        type: String,
    }
});

Usuariochema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});


const Usuario = model('Usuario', Usuariochema);


export default  Usuario;