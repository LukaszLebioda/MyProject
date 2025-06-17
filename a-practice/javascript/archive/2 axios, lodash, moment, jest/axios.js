// https://axios-http.com/docs/intro
// npm install axios

import axios from "axios";

axios
	.get("https://reqres.in/api/users?page=2")
	.then(function (response) {
		// handle success
		const status = response.status;
		console.log(status);
	})
	.catch(function (error) {
		// handle error
		console.log(error);
	})
	.finally(function () {
		// always executed
	});
