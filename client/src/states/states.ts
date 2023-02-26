import { showMenu } from "../menu/menu";
import { addPost } from "../menu/options/add_post/add_post";
import { addUser } from "../menu/options/add_user/add_user";
import { browsePosts } from "../menu/options/browse_posts/browse_posts";
import { sendMessage } from "../menu/options/send_message/send_message";
import { showAllPosts } from "../menu/options/show_all_posts/show_all_posts";
import { showAllUsers } from "../menu/options/show_all_users/show_all_users";

export const STATES = {
	MENU: "MENU",

	SEND_MESSAGE: "SEND_MESSAGE",

	SHOW_POSTS: "SHOW_POSTS",
	SHOW_USERS: "SHOW_USERS",
	BROWSE_POSTS: "BROWSE_POSTS",

	ADD_USER: "ADD_USER",

	ADD_POST: "ADD_POST",

	UNKNOWN: "UNKNOWN",
} as const;

export const STATE_METHODS = {
	MENU: showMenu,

	SEND_MESSAGE: sendMessage,

	SHOW_POSTS: showAllPosts,
	SHOW_USERS: showAllUsers,
	BROWSE_POSTS: browsePosts,

	ADD_USER: addUser,
	ADD_POST: addPost,

	UNKNOWN: showMenu,
} as const;
