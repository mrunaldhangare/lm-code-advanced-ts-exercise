import { config } from "./base_url";

export const addNewUser = async (newUser: string): Promise<Boolean> => {
	try {
		const result = await fetch(config.baseUrl + "/api/users/add", {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({ user: newUser }),
		});

		const json = await result.json();

		const { success } = json;

		return success;
	} catch (e) {
		console.error(e);
		return false;
	}
};
