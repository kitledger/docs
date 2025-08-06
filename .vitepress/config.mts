import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	head: [
		["link", { rel: "icon", href: "/brand/icon.svg" }],
	],
	title: "Kitledger Docs",
	description: "Programmable Accounting Ledger",
	locales: {
		root: {
			label: "English",
			lang: "en",
		},
	},
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		logo: "/brand/icon.png",
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Examples", link: "/markdown-examples" },
		],

		sidebar: [
			{
				text: "Examples",
				items: [
					{ text: "Markdown Examples", link: "/markdown-examples" },
					{ text: "Runtime API Examples", link: "/api-examples" },
				],
			},
		],

		socialLinks: [
			{ icon: "github", link: "https://github.com/kitledger/kitledger" },
		],
	},
});
