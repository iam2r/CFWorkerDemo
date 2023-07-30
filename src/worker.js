const hostnames = ['github.com'];
export default {
	async fetch(request) {
		const url = new URL(request.url);
		if (url.protocol === 'http:') {
			Object.assign(url, {
				protocol: 'https:',
				port: 443,
			});
		}
		url.hostname = hostnames[Math.floor(Math.random() * hostnames.length)];
		return await fetch(new Request(url, request));
	},
};
