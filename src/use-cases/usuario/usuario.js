let usuarios = [
	{
		rud: 2019146,
		nombre: "Oscar Octavio",
		apepat: "Aldaz",
		apemat: " Aldaz"
	},
	{
		rud: 2019147,
		nombre: "Manuel",
		apepat: "Miramon",
		apemat: "Ramirez"
	},
	{
		rud: 2019148,
		nombre: "Pepe",
		apepat: "Perez",
		apemat: "Gonazalez"
	},
];


function hacerEditarUsuario({ usuarioDb } = {}) {
	return async function editarUsuario({ id: _id = null, datos }) {
		
		//TODO: Validate the data

		if(!_id) throw new Error('You must supply id.');

		const user = await usuarioDb.buscaUsuarioPorId({ id: _id})
		
        if(!user) throw new Error('User not found.');

        const updatedUser = await usuarioDb.actualizaUsuario( { _id, datos } );

        return updatedUser
	};
}


function hacerListarUsuario({ usuarioDb } = {}) {
	return async function listaUsuario({ rud } = {}) {
		
		if(!rud) throw new Error('You must supply rud.');

		const usuario = await usuarioDb.buscaUsuarioPorRud({ rud });

		console.log(usuario);
		//TODO: Use commentsDb to get from the DB the User
		return usuario
	};
}


function hacerSubirFotoPerfil() {
	return async function subirFotoPerfil(files) {
		const file = files.upload;

		//TODO: Create a public and upload the pic 

		return {
			file: file.name
		};
	};
}


export {
	hacerListarUsuario,
	hacerEditarUsuario,
	hacerSubirFotoPerfil
};