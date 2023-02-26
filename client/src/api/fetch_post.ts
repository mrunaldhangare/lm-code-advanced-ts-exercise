import { config } from "./base_url";
import { PostResponse } from "./types";

export const fetchPost = async (id: number): Promise<PostResponse[]> => {
	try {
		const result = await fetch(config.baseUrl + "/api/posts/" + id);
		const post = await result.json();
		return post;
	} catch {
		return [];
	}
};
