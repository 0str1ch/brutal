import Link from "next/link";
import Layout from "../components/Layout";
import React from "react";
import TerminalWindow from "../components/TerminalWindow";
import Head from "next/head";
import Container from "../components/Container";

export default () => (
	<Layout title="Jeremy Smith">
		<Head>
			<link rel="canonical" href="https://jeremymade.com" />
		</Head>
		<Container padding>
			<section className="col-2">
			<article className="introduce">
				<h1>Hi.</h1>
				<p>
					Jeremy Smith is a front-end web developer and product designer in
					Tampa.
				</p>
				<p>
					His recent work includes creating the font pairing web app{" "}
					<a
						href="http://typebomb.com"
						target="_blank"
						rel="noopener noreferrer"
						className="connectHover1"
					>
						Typebomb
					</a>
					, implementing an ecommerce solution for{" "}
					<a
						href="https://goathouserecords.bandcamp.com/"
						target="_blank"
						title="View the Goat House Records web store"
						rel="noopener noreferrer"
						className="connectHover2"
					>
						Goat House Records
					</a>
					, and developing a{" "}
					<a
						href="http://stantonherald.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="connectHover3"
					>
						Star Citizen fan site
					</a>{" "}
					in WordPress.
				</p>
				<p>
					You can <code>git clone</code> some of his open source
					projects on{" "}
					<a
						href="https://github.com/0str1ch"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub
					</a>
					, or say hi on{" "}
					<a
						href="https://instagram.com/jeremy_made_it"
						target="_blank"
						rel="noopener noreferrer"
					>
						Instagram
					</a>{" "}
					or{" "}
					<a
						href="https://www.reddit.com/user/NaughtyOstrich"
						target="_blank"
						rel="noopener noreferrer"
					>
						Reddit
					</a>
					.
				</p>
			</article>
			<aside className="introduceMedia">
				<TerminalWindow>
					<p className="command">
						git clone https://github.com/0str1ch/js-app.git
					</p>
					<p className="command">npm install</p>
					<p className="command">npm run dev</p>
				</TerminalWindow>
			</aside>
			</section>
		</Container>
	</Layout>
);
