import * as readline from "node:readline/promises";
import { EOL } from "os";

export const printNewLine = (): void => {
	console.log(EOL); // this imports the correct End-Of-Line for either Windows or Unix
};

export const print = (str: string, newLine = true): void => {
	console.log(str);
	newLine && printNewLine();
};

export const clear = (addTopBorder?: boolean): void => {
	console.clear();
	addTopBorder && print("------------------------------------");
};

const reader = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

export const prompt = async (prompt: string): Promise<string> => {
	const answer = await reader.question(`${prompt}  > `);
	return answer;
};
