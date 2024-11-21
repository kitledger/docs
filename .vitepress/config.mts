import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	srcDir: './src',
	head: [['link', { rel: 'icon', href: '/brand/icon.svg' }]],
	title: "KitLedger",
	description: "A framework to simplify the creation of transactional systems",
	
	themeConfig: {
		logo: '/brand/icon-simple.svg',
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Guide', link: '/guide/getting-started' },
			{ text: 'API Reference', link: 'https://documenter.getpostman.com/view/6191973/2sAXqv4fcj' },
			{
				text: 'Resources',
				items: [
					{ text: 'Discussions', link: 'https://github.com/kitledger/kitledger/discussions' },
					{ text: 'GitHub', link: 'https://github.com/kitledger/kitledger' },
				]
			},
			{
				text: 'Versions',
				items: [
					{ text: 'Latest', link: '/' }
				]
			}
		],

		sidebar: [
			{
				text: 'Getting Started',
				link: '/guide/getting-started',
			},
			{
				text: 'Overview',
				collapsed: false,
				items: [
					{ text: 'Introduction', link: '/guide/overview/introduction' },
					{ text: 'Accounts', link: '/guide/overview/accounts' },
					{ text: 'Batches', link: '/guide/overview/batches' },
					{ text: 'Entities', link: '/guide/overview/entities' },
					{ text: 'Entries', link: '/guide/overview/entries' },
					{ text: 'Ledgers', link: '/guide/overview/ledgers' },
					{ text: 'Transactions', link: '/guide/overview/transactions' },
					{ text: 'Units', link: '/guide/overview/units' },
				]
			},
			{
				text: 'API Reference',
				link: 'https://documenter.getpostman.com/view/6191973/2sAXqv4fcj',
			}
		],

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/kitledger/kitledger' }
		],

		search: {
			provider: 'local'
		}
	}
})
