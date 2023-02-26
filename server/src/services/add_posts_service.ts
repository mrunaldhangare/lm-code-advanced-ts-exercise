import { POSTS_DATA } from "../helpers/constants";
import { getRandomItem } from "../helpers/helpers";
import { Post, PostRequest, User } from "../types/posts.types";
import { getAllUsers } from "./users_service";

export function addNewPost(postDetails: PostRequest): Post {
	// in the absence of a true Model layer, our service can simply return a hard-coded array of users
	const newPost: Post = {
		id: `${POSTS_DATA.length + 1}`,
		title: postDetails.title,
		text: postDetails.text,
		author: getRandomItem<User>(getAllUsers()),
	};
	POSTS_DATA.push(newPost);
	return newPost;
}
