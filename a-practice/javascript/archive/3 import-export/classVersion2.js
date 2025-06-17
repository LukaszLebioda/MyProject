// first create class, but not export it yet
class CustomerDetails {
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
// export class here
// here we instantialize the new instance of the class
export const customerDetails = new CustomerDetails();

//-------------------------

// then in a separate file
// we import not the entire class, but the instance of the class
// we created in a separate file
import { customerDetails } from "./JS Archive/import-export/classVersion2.js";
// variable customerDetails becomes an object
// on this object we can call methods and properties of the imported class
customerDetails.printFirstName("Wookie");
customerDetails.printLastName("McAllister");
