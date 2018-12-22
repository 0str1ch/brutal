import Link from "next/link";
import Layout from "../components/Layout";
import React from "react";
import TerminalWindow from "../components/TerminalWindow";
import Head from "next/head";
import Container from "../components/Container";
import dynamic from "next/dynamic";

const Marquee = dynamic(import("../components/marquee"), { ssr: false });

export default () => (
	<Layout title="Jeremy Smith">
		<Head>
			<link rel="canonical" href="https://jeremymade.com" />
		</Head>
		<Container grid col_2_1 row_1>
			<div className="grid-item-wrapper">
				<div className="grid-item-container">
					<h1>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
						magnam eum veniam ipsum culpa soluta dolorem optio mollitia illum,
						a, quos quidem? Minus eum itaque tenetur eius nisi exercitationem
						sapiente!
					</h1>
				</div>
			</div>
			<div className="grid-item-wrapper">
				<div className="grid-item-container border">
					<img src="/static/pick-me-elon.svg" alt="" />
				</div>
				<div className="grid-item-container">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
						numquam consectetur vero harum libero in nesciunt enim, totam,
						voluptatem dolorum illum? Praesentium debitis deleniti pariatur
						expedita nam aperiam ducimus sapiente. Dolorem consectetur incidunt
						aut illo modi consequuntur expedita suscipit ullam. Voluptatem quia
						itaque iusto maxime, doloremque aut libero, repudiandae vero,
						cupiditate voluptates dolores.
					</p>
				</div>
			</div>
		</Container>
		<Container grid col_1 row_1>
			<div className="grid-item-wrapper">
				<div className="marquee-item-container">
						<Marquee text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ea laboriosam molestiae corrupti eligendi sed error dolore consequuntur maxime saepe. Nam corrupti velit autem incidunt, aut atque mollitia ipsa obcaecati." />
				</div>
			</div>
		</Container>
		<Container grid col_2 row_1>
			<div className="grid-item-wrapper">
				<div className="grid-item-container">
					<h1>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
						magnam eum veniam ipsum culpa soluta dolorem optio mollitia illum,
						a, quos quidem? Minus eum itaque tenetur eius nisi exercitationem
						sapiente!
					</h1>
				</div>
			</div>
			<div className="grid-item-wrapper">
				<div className="grid-item-container">
					<h3>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
						numquam consectetur vero harum libero in nesciunt enim, totam,
						voluptatem dolorum illum? Praesentium debitis deleniti pariatur
						expedita nam aperiam ducimus sapiente. Dolorem consectetur incidunt
						aut illo modi consequuntur expedita suscipit ullam. Voluptatem quia
						itaque iusto maxime, doloremque aut libero, repudiandae vero,
						cupiditate voluptates dolores.
					</h3>
				</div>
			</div>
		</Container>
		<Container grid col_1 row_1>
			<div className="grid-item-wrapper">
				<div className="grid-item-container">
					<h1>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
						magnam eum veniam ipsum culpa soluta dolorem optio mollitia illum,
						a, quos quidem? Minus eum itaque tenetur eius nisi exercitationem
						sapiente!
					</h1>
				</div>
			</div>
		</Container>
		<style jsx global>{`
			.grid-item-container {
				padding: 1.5rem;
			}

			.marquee-item-container {
				padding: 1.5rem 0;
				font-size: var(--h2-large);
				color: var(--primary-text);
				font-weight: bold;
				font-weight: 500;
			}

			.border {
				border-bottom: 4px solid #000;
			}

			.scroll-x {
				width: 100%;
				overflow: hidden;
				height: 4rem;
				padding-left: 100%;
				box-sizing: content-box;
			}

			.scroll-x-wrapper {
				display: inline-block;
				height: 4rem;
				line-height: 4rem;
				white-space: nowrap;
				padding-right: 100%;
				box-sizing: content-box;
				-webkit-animation-iteration-count: infinite;
				animation-iteration-count: infinite;
				-webkit-animation-timing-function: linear;
				animation-timing-function: linear;
				-webkit-animation-name: ticker;
				animation-name: ticker;
				-webkit-animation-duration: 30s;
				animation-duration: 30s;
			}

			.scroll-x-item {
				display: inline-block;
				font-size: var(--h2-large);
			}
		`}</style>
	</Layout>
);
