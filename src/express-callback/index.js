function makeExpressCallback (controller) {
	return (req, res) => {

		const httpRequest = {
			body: req.body,
			query: req.query,
			params: req.params,
			ip: req.ip,
			method: req.method,
			path: req.path,
			files: req?.files
		};

		//TODO: Implement an Error Handler

		controller(httpRequest)
			.then(httpResponse => res.status(httpResponse.statusCode).json(httpResponse.body) )
			.catch(e => res.status(500).send({ error: "An unkown error occurred." }));
	};
}
  

export {
	makeExpressCallback
};