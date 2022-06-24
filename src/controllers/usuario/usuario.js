function hacerPatchUsuario( { editarUsuario } = {} ) {
	return async function patchUsuario( httpRequest ) {
		try {
			//TODO: Create a new Usuario object from the request body
			const rud = httpRequest.params.rud;
			const datos = httpRequest.body;

			const usuario = await editarUsuario({ rud, datos });

			return {
				statusCode: 200,
				body: usuario
			};

		} catch (error) {
			console.log(error);

		}

	};
}

function hacerGetUsuario({ listarUsuario } = {}) {
	return async function getUsuario( httpRequest ) {

		try {
			const usuario = await listarUsuario({ rud: httpRequest.params.rud });
			
			return {
				statusCode: 200,
				body: usuario
			};
			
		} catch (error) {
			console.log(error);

		}
		
	};
}

function hacerPostUsarioFotoPerfil( { subirFotoPerfil } ) {
	return async function postUsuarioFotoPerfil( httpRequest ) {
		try {
			await subirFotoPerfil(httpRequest.files);
		} catch (error) {
			console.log(error);
		}
	};
}


export {
	hacerPatchUsuario,
	hacerGetUsuario,
	hacerPostUsarioFotoPerfil
};