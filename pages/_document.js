import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "../lib/gtag";
import Meta from "../components/Meta";

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<html lang="en">
				<Head>
					<meta charSet="UTF-8" />
					<link
						href="../static/favicon.ico"
						rel="shortcut icon"
						type="image/x-icon"
					/>
					<Meta prefetch />
					<meta name="mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta name="application-name" content="jeremy smith" />
					<meta name="apple-mobile-web-app-title" content="jeremy smith" />
					<meta name="theme-color" content="#ffffff" />
					<meta name="msapplication-navbutton-color" content="#000000" />
					<meta
						name="apple-mobile-web-app-status-bar-style"
						content="black-translucent"
					/>
					<meta name="msapplication-starturl" content="/" />
					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
					/>
					<script
						async
						dangerouslySetInnerHTML={{
							__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `
						}}
					/>
					<link rel="manifest" href="../static/manifest.json" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
