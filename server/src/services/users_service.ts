import { USERS_DATA } from "../helpers/constants";
import { User } from "../types/posts.types";

export function getAllUsers(): User[] {
	// in the absence of a true Model layer, our service can simply return a hard-coded array of users
	return USERS_DATA;
}
