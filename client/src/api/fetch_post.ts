import { baseUrl } from "./base_url";

export const fetchPost = async (id: number): Promise<[]> => {
	try {
		const result = await fetch(baseUrl + "/api/posts/" + id);
		const post = await result.json();
		return post;
	} catch {
		return [];
	}
};
