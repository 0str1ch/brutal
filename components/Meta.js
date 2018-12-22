import Head from "next/head";
import Animations from "../components/Animations";
import Colors from "./Colors";

export default () => (
	<Head>
		<title>Jeremy Smith</title>
		<meta
			name="description"
			content="Find font pairings, color sschemes, and the CSS you need to design beautiful type."
		/>
		<meta property="og:title" content="Jeremy Smith" />
		<meta
			property="og:description"
			content="Find font pairings, color sschemes, and the CSS you need to design beautiful type."
		/>
		<meta
			property="og:image:secure_url"
			content="https://richpreview.com/richpreview.png"
		/>

		<Colors />
		<Animations />

		<style jsx global>{`
			body {
				position: relative;
				min-height: 100%;
				margin: 0;
				line-height: 1.6;
				font-family: "Untitled Sans", system-ui, -apple-system,
					BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Helvetica, Arial,
					sans-serif;
				font-weight: 400;
				min-width: 320px;
				direction: ltr;
				font-feature-settings: "kern";
				text-rendering: optimizeLegibility;
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
				scroll-behavior: smooth;
			}

			html {
				-webkit-text-size-adjust: 100%;
				-ms-text-size-adjust: 100%;
				-moz-text-size-adjust: 100%;
				text-size-adjust: 100%;
				background: #fff;
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
				text-rendering: optimizeLegibility;
				-webkit-box-sizing: border-box;
				box-sizing: border-box;
				height: 100%;
				width: 100%;
			}

			/*
* === Resets & Fixes ===
*/
			html {
				-ms-overflow-style: -ms-autohiding-scrollbar !important;
				/* MS Edge and IE scrollbar hide */
			}

			*,
			*::before,
			*::after {
				-webkit-box-sizing: border-box;
				box-sizing: border-box;
				-webkit-font-kerning: auto;
				font-kerning: auto;
				word-wrap: break-word;
			}

			table {
				border-collapse: collapse;
				border-spacing: 0;
			}

			body {
				height: 100%;
				width: 100%;
				position: relative;
				overflow-x: hidden;
			}

			* {
				-webkit-box-sizing: border-box;
				box-sizing: border-box;
				-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
			}

			:after,
			:before {
				-webkit-box-sizing: border-box;
				box-sizing: border-box;
			}

			::-moz-selection {
				background: var(--primary);
				color: var(--primary-light);
			}

			::selection {
				background: var(--primary);
				color: var(--primary-light);
			}

			button:focus,
			select:focus {
				outline: thin dotted var(--hint);
			}

			a {
				outline: 0;
				text-decoration: none;
			}

			a,
			abbr,
			acronym,
			address,
			applet,
			article,
			aside,
			audio,
			b,
			big,
			blockquote,
			body,
			canvas,
			caption,
			center,
			cite,
			dd,
			del,
			details,
			dfn,
			div,
			dl,
			dt,
			em,
			embed,
			fieldset,
			figcaption,
			figure,
			footer,
			form,
			header,
			hgroup,
			html,
			i,
			iframe,
			img,
			ins,
			kbd,
			label,
			legend,
			li,
			mark,
			menu,
			nav,
			object,
			ol,
			output,
			pre,
			q,
			ruby,
			s,
			samp,
			section,
			small,
			span,
			strike,
			strong,
			sub,
			summary,
			sup,
			table,
			tbody,
			td,
			tfoot,
			th,
			thead,
			time,
			tr,
			tt,
			u,
			ul,
			var,
			video {
				margin: 0;
				padding: 0;
				border: 0;
				vertical-align: baseline;
			}

			pre code {
				margin: 0;
			}

			p {
				margin-left: 0;
				margin-right: 0;
				margin-top: 0;
				padding: 0;
				border: 0;
				vertical-align: baseline;
			}

			ol,
			ul {
				list-style: none;
			}

			* + address,
			* + dl,
			* + fieldset,
			* + figure,
			* + pre {
				margin-top: 0;
			}

			img {
				max-width: 100%;
				height: auto;
			}

			svg:not(:root) {
				/*overflow: hidden;*/
			}

			svg {
				vertical-align: middle;
			}

			svg {
				shape-rendering: crispEdges;
			}

			svg path,
			svg circle {
				shape-rendering: geometricprecision;
			}

			video {
				height: auto;
				width: 100%;
			}

			article,
			aside,
			details,
			figcaption,
			figure,
			footer,
			header,
			main,
			nav,
			section,
			summary {
				display: block;
			}

			.button,
			button {
				text-align: left;
				font-size: var(--text-small);
				line-height: normal;
				font-weight: 600;
				background-color: #fff;
				border: solid #222 2px;
				display: inline-block;
				border-radius: var(--border-radius);
				padding: 0.25em 0.75em;
				cursor: pointer;
				position: relative;
				place-content: center;
				place-self: flex-start;
			}

			.button:hover,
			button:hover {
				background-color: #f5f5f5;
				box-shadow: 2px 2px 0 #222;
			}
		`}</style>
	</Head>
);

console.log("🔥 Hey, the website loaded! Whew, that's always a good sign.");
console.log("🐞 Thanks for stopping by. If you've spotted any bugs, want to suggest a new feature, or refactor some code, create an Issue or Pull Request in this site's GitHub repository: https://github.com/0str1ch/js-app");
console.log("📖 This website is open source and MIT licensed.");