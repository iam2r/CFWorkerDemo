const hostnames = [
	'www.fmprc.gov.cn',
	'www.xuexi.cn',
	'www.gov.cn',
	'mail.gov.cn',
	'www.mofcom.gov.cn',
	'www.gfbzb.gov.cn',
	'www.miit.gov.cn',
	'www.12377.cn',
];
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
				const newHeaders = new Headers(request.headers);
				newHeaders.set('cf-connecting-ip', newHeaders.get('x-forwarded-for') || newHeaders.get('cf-connecting-ip'));
				newHeaders.set('x-forwarded-for', newHeaders.get('cf-connecting-ip'));
				newHeaders.set('x-real-ip', newHeaders.get('cf-connecting-ip'));
				newHeaders.set('referer', 'https://www.google.com/q=edtunnel');
				request = new Request(url, {
					...request,
					headers: newHeaders,
				});
				return await fetch(request, { redirect: 'manual' });
			}
		}
	},
};
