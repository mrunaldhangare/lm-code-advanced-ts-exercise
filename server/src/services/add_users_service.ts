import { USERS_DATA } from "../helpers/constants";
import { User } from "../types/posts.types";

export function addNewUser(userName: string): User {
	// in the absence of a true Model layer, our service can simply return a hard-coded array of users
	const newUser: User = {
		id: `${USERS_DATA.length + 1}`,
		name: userName,
		creationDate: new Date(),
	};
	USERS_DATA.push(newUser);
	return newUser;
}
