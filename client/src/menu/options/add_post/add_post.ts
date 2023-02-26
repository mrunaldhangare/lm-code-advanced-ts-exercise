import { addNewPost } from "../../../api/add_new_post";
import { PostRequest } from "../../../api/types";
import { STATES } from "../../../states/states";
import { States } from "../../../states/types";
import { clear, print, printNewLine, prompt } from "../../../ui/console";

export const addPost = async (): Promise<States> => {
	clear();

	const postTitle = await prompt("Provide title for the new post:");
	const postText = await prompt("Provide text for the new post:");

	const postDetails: PostRequest = { title: postTitle, text: postText };
	const success = await addNewPost(postDetails);
	if (success) print("🥳 Post added successfully!");
	else print("😵 Post NOT added.");

	printNewLine();

	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return STATES.MENU;
};
