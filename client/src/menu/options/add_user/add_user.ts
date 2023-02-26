import { addNewUser } from "../../../api/add_new_user";
import { STATES } from "../../../states/states";
import { States } from "../../../states/types";
import { clear, print, printNewLine, prompt } from "../../../ui/console";

export const addUser = async (): Promise<States> => {
	clear();

	const userName = await prompt("Provide name of the new user:");

	const success = await addNewUser(userName);
	if (success) print("🥳 User added successfully!");
	else print("😵 User NOT added.");

	printNewLine();

	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return STATES.MENU;
};
