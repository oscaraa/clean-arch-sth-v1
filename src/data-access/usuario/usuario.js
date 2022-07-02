/*
TODO:
    - [ ✅ ] Crear un clousure para el modelo de usuario donde reciba y la conexion y contenga todos los metodos de la entidad
    - [ ] Crear metodo para buscaUsuarioPorRud, actualizaUsuario, actualizaFoto
    - [ ✅ ] Crear un Object.freeze de los metodos de la entidad para asi asegurar que no se puedan modificar    
    - [ ] Probar el funcionamiento de los metodos de la entidad    
*/

export default function hacerUsuarioDb( { Usuario } ) {
    return Object.freeze({
        buscaUsuarioPorRud
    });

    async function buscaUsuarioPorRud ( { rud = null } ) {

        if(!rud) return null;
        
        const usuario = await Usuario.findOne({ rud });
        
        return usuario;
    }
}