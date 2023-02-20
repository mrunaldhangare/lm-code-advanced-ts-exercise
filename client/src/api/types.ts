export type Posts = {
	postFound: Boolean;
	id: string;
	title: string;
	text: string;
	author: Users;
};

export type Users = {
	id: string;
	name: string;
	creationDate: string;
};
