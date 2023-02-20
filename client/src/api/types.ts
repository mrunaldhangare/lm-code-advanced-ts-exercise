export type Posts = {
	postFound: Boolean;
	id: string;
	title: string;
	text: string;
	author: {
		id: string;
		name: string;
		creationDate: string;
	};
};
