import { sendMessageToServer } from "../../../api/send_message_to_server";
import { states } from "../../../states/states";
import { States } from "../../../states/types";
import { clear, print, printNewLine, prompt } from "../../../ui/console";

export const sendMessage = async (): Promise<States> => {
	clear();

	const message = await prompt("What message shall we send? ");

	printNewLine();
	print(`📨 Sending message "${message}"...`);

	const success = await sendMessageToServer(message);

	if (success) print("🥳 Message received successfully!");
	else print("😵 Message NOT received.");

	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return states.MENU;
};
