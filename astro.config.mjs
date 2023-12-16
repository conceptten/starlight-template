import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import concept10 from '@concept10/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			plugins: [
				concept10({
					// trackingId: 'xxx-yyy-zzz',
				}),
			],
		}),
	],
});
