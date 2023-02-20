import { baseUrl } from "./base_url";

export const fetchAllUsers = async (): Promise<[]> => {
	try {
		const result = await fetch(baseUrl + "/api/users/all");
		const users = await result.json();
		return users;
	} catch {
		return [];
	}
};
