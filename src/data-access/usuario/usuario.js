/*
TODO:
    - [ ✅ ] Crear un clousure para el modelo de usuario donde reciba y la conexion y contenga todos los metodos de la entidad
    - [ ] Crear metodo para buscaUsuarioPorRud, actualizaUsuario, actualizaFoto
    - [ ✅ ] Crear un Object.freeze de los metodos de la entidad para asi asegurar que no se puedan modificar    
    - [ ] Probar el funcionamiento de los metodos de la entidad    
*/

export default function hacerUsuarioDb( { Usuario } ) {
    return Object.freeze({
        buscaUsuarioPorRud,
        actualizaUsuario,
        actualizaFoto,
        buscaUsuarioPorId
    });

    async function buscaUsuarioPorRud ( { rud = null } ) {
        
        const usuario = await Usuario.findOne({ rud });
        
        return usuario;
    }

    async function buscaUsuarioPorId ( { id:  _id = null } ) {
        
        const usuario = await Usuario.findOne({ _id });
        
        return usuario;
    }

    async function actualizaUsuario ( { _id, datos } ) {
        
        const updatedUser = await Usuario.findByIdAndUpdate( _id, datos, { new: true } );
        
        return updatedUser
    }

    async function actualizaFoto ( { id: _id, attributes } ) {
        const newPath = "";



        return newPath; 
    }
}