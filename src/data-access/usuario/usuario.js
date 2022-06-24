/*
TODO:
    - [ ✅ ] Crear un clousure para el modelo de usuario donde reciba y la conexion y contenga todos los metodos de la entidad
    - [ ] Crear metodo para buscaUsuarioPorRud, actualizaUsuario, actualizaFoto
    - [ ] Crear un Object.freeze de los metodos de la entidad para asi asegurar que no se puedan modificar    
*/

export default function hacerUsuarioDb( { conexion } ) {
    return Object.freeze({

    });


    async function buscaUsuarioPorRud ( { rud: _id = null } ) {

        if(!_id) return null;

        const usuario = await conexion.collection('usuarios').findOne({ _id });

        console.log(usuario)
        return null;
    }
}