export type User = {
	id: string;
	name: string;
	creationDate: Date;
};
export interface PostRequest {
	title: string;
	text: string;
}
export interface Post extends PostRequest {
	id: string;
	author: User;
}
