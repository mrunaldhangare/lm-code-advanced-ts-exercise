// ❗ this won't always be true!
//    we should add some ability to configure the client with the
//    correct baseUrl...

export const config = {
	baseUrl: process.env.BASE_URL || "http://localhost:8080",
};
