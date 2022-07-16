function makeExpressCallback (controller) {
	return (req, res, next) => {
		
		const httpRequest = {
			body: req.body,
			query: req.query,
			params: req.params,
			ip: req.ip,
			method: req.method,
			path: req.path,
			files: req?.files
		};

		controller(httpRequest, res, next)
			.then(httpResponse => { 
				console.log(httpResponse);
				return res.status(httpResponse.statusCode).json(httpResponse.body)
			})
			.catch(e => {
				console.log(e);
				return res.status(500).send({ error: "An unkown error occurred." }) 
			});
	};
}
  

export {
	makeExpressCallback
};