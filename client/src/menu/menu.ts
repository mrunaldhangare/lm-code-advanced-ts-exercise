import { STATES } from "../states/states";
import { States } from "../states/types";
import { clear, print, printNewLine, prompt } from "../ui/console";

export const showMenu = async (): Promise<States> => {
	clear();
	print("0. Send Server Message", false);
	print("1. Show all posts", false);
	print("2. Show all users", false);
	print("3. Browse posts", false);
	print("4. Add user", false);
	printNewLine();

	const result = await prompt("What shall we do? ");

	if (result === "0") return STATES.SEND_MESSAGE;
	if (result === "1") return STATES.SHOW_POSTS;
	if (result === "2") return STATES.SHOW_USERS;
	if (result === "3") return STATES.BROWSE_POSTS;
	if (result === "4") return STATES.ADD_USER;

	return STATES.UNKNOWN;
};
