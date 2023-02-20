import { fetchPost } from "../../../api/fetch_post";
import { Posts } from "../../../api/types";
import { clear, print, prompt, printNewLine } from "../../../ui/console";

export const browsePosts = async (): Promise<Posts[]> => {
	clear(false);

	const desiredPostId = await prompt("Enter Post ID");

	if (desiredPostId !== "" && !isNaN(+desiredPostId)) {
		print(`📨 Fetching post "${desiredPostId}...`);

		const result = await fetchPost(parseInt(desiredPostId));

		print(`🥳 Received post:`);

		console.log(result);

		printNewLine();
		await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

		return result;
	} else {
		print(`🙁 Invalid post id:`);
		printNewLine();
		await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
		return [];
	}
};
