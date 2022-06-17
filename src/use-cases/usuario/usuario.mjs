function hacerListarUsuario ({ commentsDb } = {}) {
	return async function listaUsuario ({ postId } = {}) {
		return {
			codigo: 2019146,
			nombre: "Oscar Octavio",
			apepat: "Aldaz",
			apemat: " Aldaz"
		};
	};
}
  

export {
	hacerListarUsuario
};