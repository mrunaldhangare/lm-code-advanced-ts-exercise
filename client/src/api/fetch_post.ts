import { baseUrl } from "./base_url";
import { Posts } from "./types";

export const fetchPost = async (id: number): Promise<Posts[]> => {
	try {
		const result = await fetch(baseUrl + "/api/posts/" + id);
		const post = await result.json();
		return post;
	} catch {
		return [];
	}
};
