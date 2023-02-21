import { print, prompt } from "../ui/console";
import { config } from "./base_url";

export const sendMessageToServer = async (
	message: string
): Promise<Boolean> => {
	try {
		const result = await fetch(config.baseUrl + "/api/send/", {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({ message: message }),
		});

		const json = await result.json();

		const { success } = json;

		return success;
	} catch (e) {
		console.error(e);
		return false;
	}
};
