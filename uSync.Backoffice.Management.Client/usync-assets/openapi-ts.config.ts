import { defaultPlugins, defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
	input: 'http://localhost:53015/umbraco/swagger/uSync/swagger.json',
	output: {
		format: 'prettier',
		path: 'src/api',
	},
	plugins: [
		...defaultPlugins,
		'@hey-api/client-fetch',
		{
			name: '@hey-api/typescript',
			enums: 'javascript',
		},
		{
			name: '@hey-api/sdk',
			asClass: true,
		},
	],
});
