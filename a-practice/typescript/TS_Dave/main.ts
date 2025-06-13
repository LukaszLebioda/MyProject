// tsc filename.ts => compiles ts into js file of the same name
// tsc filename.ts othername.js => compiles ts into js file
// tsc -w => to watch changes in all ts files
// tsc filename.ts -w => to watch changes in a single ts file

// basic types
let myname: string = "Dave";
let myage: number = 42;
let isHappy: boolean = true;
let album: any;
let postId: string | number;
let isActive: number | boolean;
let re: RegExp = /\w+/g;
const sum = (a: number, b: string) => {
  return a + b;
};

// arrays
let stringArr = ["one", "two", "three"];
let numberArr = [1, 2, 3, 4, 5, 6, 7];
let mixedArr = ["hundred", 210, true];
let emptyArr = [];
let band: string[] = [];

// tuples (array of locked lenght and with elements of locked types)
let mytuple: [string, number, boolean] = ["one", 1, true];
/* as opposed to: */ let mixedArr2 = ["hej", 123, false];

// objects
// enums

// INTERFACES;
// interface User {
// 	username: string;
// 	password: string;
// }

// function returningUserInfo(user: User) {
// 	console.log(`User name is ${user.username}`);
// 	console.log(`Password name is ${user.password}`);
// }

// // TYPES

// // with objects
// type Customer = {
// 	firstName: string;
// 	lastName: string;
// 	age: number;
// 	isActive: boolean;
// };

// // object we want to create should match perfectly
// // the type we established above
// let firstCustomer: Customer = {
// 	firstName: "Wookie",
// 	lastName: "McAllister",
// 	age: 42,
// 	isActive: true,
// };

// //-------------------------------------------------

// // with functions
// type AddFunction = (a: number, b: number) => number;

// const addNumbers: AddFunction = (a, b) => {
// 	return a + b;
// };
// console.log(add(100, 200));
