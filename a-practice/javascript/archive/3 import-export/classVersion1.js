// first create and export class
export class CustomerDetails {
	/**
	 * this method will print the first name
	 * @param {string} firstName
	 */
	printFirstName(firstName) {
		console.log(firstName);
	}

	/**
	 * this method will print the last name
	 * @param {string} lastName
	 */
	printLastName(lastName) {
		console.log(lastName);
	}
}

//-------------------------

//then import the whole class in a separate file
import { CustomerDetails } from "./JS Archive/import-export/classVersion1.js";
// we create an instance of the imported class
// and we instantiate it as well
const customerDetails = new CustomerDetails();
// variable customerDetails becomes an object
// on this object we can call methods and properties of the imported class
customerDetails.printFirstName("Wookie");
customerDetails.printLastName("McAllister");
