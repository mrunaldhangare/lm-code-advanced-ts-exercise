import { POSTS_DATA } from "../helpers/constants";
import { Post } from "../types/posts.types";
import { getAllUsers } from "./users_service";

export function getAllPosts(): Post[] {
	// Normally it's not advised to hard-code all your data!
	// in the absence of a true Model layer, our service can simply return a hard-coded array of posts

	return POSTS_DATA;
}
