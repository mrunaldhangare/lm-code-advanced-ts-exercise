import { baseUrl } from "./base_url";
import { Posts } from "./types";

export const fetchAllPosts = async (): Promise<Posts[]> => {
	try {
		const result = await fetch(baseUrl + "/api/posts/all");
		const posts = await result.json();
		return posts;
	} catch {
		return [];
	}
};
