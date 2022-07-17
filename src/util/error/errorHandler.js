
export const errorHandler = ( { logError, isTrustedError } ) =>  {
  return (err, req, res) => {
      if (isTrustedError(err)) {
        console.log('aaaa');
    		// return { statusCode: err.statusCode, body: { error: err.message } };
        return res.status(500).send({ error:  err.message }) 
    	}
      
      logError(err, { url: req.url, method: req.method, params: req.params, body: req.body, query: req.query });
      
     return res.status(500).send({ error: "An unkown error occurred." }) 

  }
};