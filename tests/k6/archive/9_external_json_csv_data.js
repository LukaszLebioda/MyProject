// EXTERNAL JSON FILE
// SHARED ARRAY
// using set of data from external json file
// using set of data from external csv file

// JSON FILE
import http from "k6/http";
import { check } from "k6";
import { SharedArray } from "k6/data";
import { randomItem } from "https://jslib.k6.io/k6-utils/1.2.0/index.js";

// this is how we get users and store them into variable
const userCredentials = new SharedArray("users with credentials", function () {
	return JSON.parse(open("./fixtures/users.json")).users;
});
console.log(userCredentials);

export default function () {
	// REGISTER EACH USER
	// THIS FUNCTION WE RUN ONLY ONCE
	// userCredentials.forEach((user) => {
	// 	const urlRegister = "https://test-api.k6.io/user/register/";
	// 	const credentials = JSON.stringify({
	// 		username: user.username,
	// 		password: user.password,
	// 	});
	// 	const params = {
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 	};
	// 	let response = http.post(urlRegister, credentials, params);
	// 	check(response, {
	// 		"status is 201": (res) => res.status === 201,
	// 	});
	// });

	// LOGIN ONE USER
	// OUT OF ALL THOSE USERS REGISTERED ABOVE
	const randomCredentials = randomItem(userCredentials);
	let response = http.post(
		"https://test-api.k6.io/auth/token/login/",
		JSON.stringify({
			username: randomCredentials.username,
			password: randomCredentials.password,
		}),
		{
			headers: {
				"Content-Type": "application/json",
			},
		}
	);
}

// // CSV FILE
// import http from "k6/http";
// import { SharedArray } from "k6/data";
// import papaparse from "https://jslib.k6.io/papaparse/5.1.1/index.js";

// const userCredentials = new SharedArray("another data name", function () {
// 	return papaparse.parse(open("./fixtures/users.csv"), { header: true }).data;
// });

// console.log(userCredentials);

// export default function () {
// 	userCredentials.forEach((user) => console.log(user.username));
// }
