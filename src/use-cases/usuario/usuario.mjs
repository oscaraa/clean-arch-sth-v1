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


function hacerEditarUsuario({ commentsDb } = {}) {
	return async function editarUsuario({ rud, datos }) {

		//TODO: Use commentsDb to update the user in the DB
		usuarios = usuarios.map(usuario => {

			if (usuario.rud.toString() === rud)
				return { ...usuario, ...datos };
			

			return usuario;
		});

		return usuarios.find(usuario => usuario.codigo = rud);
	};
}


function hacerListarUsuario({ commentsDb } = {}) {
	return async function listaUsuario({ rud } = {}) {

		//TODO: Use commentsDb to get from the DB the User
		return usuarios.find(usuario => usuario.codigo = rud);
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