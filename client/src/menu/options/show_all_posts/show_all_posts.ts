import { fetchAllPosts } from "../../../api/fetch_all_posts";
import { PostResponse } from "../../../api/types";
import { clear, print, prompt, printNewLine } from "../../../ui/console";

export const showAllPosts = async (): Promise<PostResponse[]> => {
	clear(true);

	printNewLine();

	print("📨 Fetching posts...");

	const result = await fetchAllPosts();

	print(`🥳 Received ${result.length} posts. Here they are:`);

	console.log(result);

	printNewLine();
	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return result;
};
