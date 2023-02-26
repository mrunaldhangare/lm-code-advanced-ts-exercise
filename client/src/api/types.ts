export type Users = {
	id: string;
	name: string;
	creationDate: string;
};

export interface PostRequest {
	title: string;
	text: string;
}

export interface PostResponse extends PostRequest {
	postFound: Boolean;
	id: string;
	author: Users;
}
