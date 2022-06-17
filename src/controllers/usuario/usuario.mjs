function hacerActualizarUsurio({ editaUsuario } = {}) {
	return async function actualizarUsuario( httpRequest ) {
		try {
			console.log(editaUsuario);
			console.log(httpRequest);
		} catch (error) {
			console.log(error);

		}

	};
}

function hacerObtenerUsurio() {
	return async function obtenerUsuario( httpRequest ) {
		console.log(httpRequest);
	};
}


export {
	hacerActualizarUsurio,
	hacerObtenerUsurio
};