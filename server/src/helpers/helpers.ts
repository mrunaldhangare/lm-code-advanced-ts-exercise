import { EOL } from "os";

export function printNewLine() {
	console.log(EOL); // this imports the correct End-Of-Line for either Windows or Unix
}

export function getRandomItem<T>(arr: T[]): T {
	// get random index value
	const randomIndex = Math.floor(Math.random() * arr.length);

	// get random item
	const item = arr[randomIndex];

	return item;
}
