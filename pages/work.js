import Layout from "../components/Layout";
import React from "react";
import Head from "next/head";
import Container from "../components/Container";
import Clients from "../components/work/clients";
import Projects from "../components/work/projects";
import TerminalWindow from "../components/TerminalWindow";
import Hero from "../components/Hero";

export default () => (
	<Layout>
		<Head>
			<link rel="canonical" href="https://jeremymade.com/work" />
			<title>Work - Jeremy Smith</title>
		</Head>
		<Hero grid padding>
			<div className="space-hero">
				<figure className="space-message">
					<img src="/static/pick-me-elon.svg" alt="" />
				</figure>
			</div>
			<TerminalWindow>
				<pre>
					<code>npm install js-app</code>
				</pre>
				<pre>
					<code>npm install js-app</code>
				</pre>
			</TerminalWindow>
		</Hero>
		<Container padding wide>
			<Clients />
			<Projects />
		</Container>
		<style jsx global>
			{`
				.space-message {
					height: auto;
					width: 100%;
				}

				.space-message h1 {
					width: 60%;
					color: white;
					font-size: var(--h3-medium);
					text-align: center;
				}

				.space-hero {
					position: relative;
				}

				.rocket {
					position: absolute;
					bottom: 9px;
					right: 19px;
					height: auto;
					width: 169px;
					z-index: 1000;
					transform: rotate(10deg);
				}
			`}
		</style>
	</Layout>
);
