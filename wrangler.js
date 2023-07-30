const fs = require('fs');
const TOML = require('@ltd/j-toml');
const { merge } = require('lodash');
const wranglerToml = `
name = 'cf-worker-demo'
main = 'src/worker.js'
send_metrics = false
compatibility_date = '2023-06-27'
[placement]
mode = "smart"
[vars]
`;
const tomlData = TOML.parse(wranglerToml);
const { DEMO_ENV } = process.env;
merge(tomlData, {
	vars: {
		...(DEMO_ENV ? { DEMO_ENV } : {}),
	},
});
fs.writeFile('./wrangler.toml', TOML.stringify(tomlData).join('\n'), () => {
	/**
	 *
	 */
});
