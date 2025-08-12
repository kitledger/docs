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
			{ text: "Website", link: "https://kitledger.com" },
			{ text: "Console", link: "https://console.kitledger.com" },
			{ text: "Discussions", link: "https://github.com/orgs/kitledger/discussions" },
		],
		search: {
			provider: "local"
		},
		sidebar: [
			{
				text: "Getting Started",
				collapsed: false,
				items: [
					{ text: "Introduction", link: "/01-getting-started/introduction" },
					{ text: "Quickstart", link: "/01-getting-started/quickstart" },
				],
			},
			{
				text: "Guides",
				items: [
					{ text: "Ledger Basics", link: "/02-guides/ledger-basics" },
					{ text: "Data Model", link: "/02-guides/data-model" },
					{ text: "Managing Instances", link: "/02-guides/managing-instances" },
					{ text: "Using the API", link: "/02-guides/using-the-api" },
					{ text: "Using the CLI", link: "/02-guides/using-the-cli" },
					{ text: "Using the Console", link: "/02-guides/using-the-console" },
				],
			},
			{
				text: "Advanced",
				collapsed: true,
				items: [
					{ text: "Deployment", link: "/03-advanced/deployment" },
					{ text: "Scripting", link: "/03-advanced/scripting" },
					{ text: "Security", link: "/03-advanced/security" },
				],
			},
			{
				text: "Reference",
				collapsed: true,
				items: [
					{ text: "Configuration", link: "/04-reference/configuration" },
					{ text: "Python Reference", link: "/04-reference/python-reference" },
					{ text: "WASM Reference", link: "/04-reference/wasm-reference" },
					{ text: "API Reference", link: "https://documenter.getpostman.com/view/6191973/2sAXqv4fcj" },
					{ text: "CLI Reference", link: "/04-reference/cli-reference" },
				],
			},
		],

		socialLinks: [
			{ icon: "github", link: "https://github.com/kitledger/kitledger" },
		],
	},
});
