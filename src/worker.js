const hostnames = ['github.com'];
export default {
	async fetch(request) {
		const url = new URL(request.url);
		switch (url.pathname) {
			case '/health':
				return new Response(JSON.stringify(request.cf, null, 2), { status: 200 });
			default: {
				if (url.protocol === 'http:') {
					Object.assign(url, {
						protocol: 'https:',
						port: 443,
					});
				}
				url.hostname = hostnames[Math.floor(Math.random() * hostnames.length)];
				return await fetch(new Request(url, request));
			}
		}
	},
};
