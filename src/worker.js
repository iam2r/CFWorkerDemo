export default {
	async fetch(request) {
		const url = new URL(request.url);
		if (url.protocol === 'http:') {
			Object.assign(url, {
				protocol: 'https:',
				port: 443,
			});
		}
		url.hostname = 'www.piyao.org.cn';
		return await fetch(new Request(url, request));
	},
};
