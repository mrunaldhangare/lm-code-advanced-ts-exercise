import { config } from "./base_url";
import { PostRequest, PostResponse } from "./types";

export const addNewPost = async (newPost: PostRequest): Promise<Boolean> => {
	try {
		const result = await fetch(config.baseUrl + "/api/posts/add", {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(newPost),
		});

		const json = await result.json();

		const { success } = json;

		return success;
	} catch (e) {
		console.error(e);
		return false;
	}
};
