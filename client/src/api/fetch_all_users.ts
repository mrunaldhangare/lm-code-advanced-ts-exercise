import { config } from "./base_url";
import { Users } from "./types";

export const fetchAllUsers = async (): Promise<Users[]> => {
	try {
		const result = await fetch(config.baseUrl + "/api/users/all");
		const users = await result.json();
		return users;
	} catch {
		return [];
	}
};
