function hacerPatchUsuario( { editarUsuario } = {} ) {
	return async function patchUsuario( httpRequest, next ) {
		try {
			//TODO: Create a new Usuario object from the request body
			const id = httpRequest.params.id;
			const datos = httpRequest.body;

			const usuario = await editarUsuario({ id, datos });

			return {
				statusCode: 200,
				body: usuario
			};

		} catch (error) {
			throw error;

		}

	};
}

function hacerGetUsuario({ listarUsuario } = {}) {
	return async function getUsuario( httpRequest, next ) {

		try {
			
			const usuario = await listarUsuario({ id: httpRequest.params.id });
			
			return {
				statusCode: 200,
				body: usuario
			};
			
		} catch (error) {
			
			next(error);

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