import React from "react";
import IconArrowDown from "./icons/icon-arrow-down";
import IconGithub from "./icons/icon-github";
import Link from "next/link";
import ActiveLink from "./ActiveLink";
import MyLogo from "../components/MyLogo";
import Popover from "../components/popover";

export default class Header extends React.Component {
	constructor() {
		super();

		this.state = {
			mobileNavShown: false
		};

		this.toggleMobileNav = this.toggleMobileNav.bind(this);
	}

	toggleMobileNav() {
		this.setState({
			mobileNavShown: !this.state.mobileNavShown
		});
	}

	render() {
		const { mobileNavShown } = this.state;
		return (
			<React.Fragment>
				<header>
					<Link href="/">
						<a className="logo">
							<MyLogo />
						</a>
					</Link>

					<nav className="desktop-nav">
						<ActiveLink href="/bigtext">Bigtext</ActiveLink>
						<ActiveLink href="/typography">Typography</ActiveLink>
						<ActiveLink href="/work">Work</ActiveLink>
						<ActiveLink href="/blog">Blog</ActiveLink>
					</nav>

					<div className="header__right">
						<Popover
							content={
								<div style={{ whiteSpace: "nowrap" }}>
									Explore my open source projects on <strong>GitHub!</strong>
								</div>
							}
						>
							<Link href="/blog">
								<a
									className="github-nav-link"
									aria-label="Jeremy Smith's GitHub"
									rel="noreferrer"
									target="_blank"
								>
									<IconGithub />
								</a>
							</Link>
						</Popover>
					</div>

					<a className="header__mobile-toggle" onClick={this.toggleMobileNav}>
						<IconArrowDown />
					</a>
				</header>

				<nav className="header__mobile-nav container">
					<ActiveLink href="/bigtext">Bigtext</ActiveLink>
					<ActiveLink href="/typography">Typography</ActiveLink>
					<ActiveLink href="/work">Work</ActiveLink>
					<ActiveLink href="/blog">Blog</ActiveLink>
				</nav>

				<style jsx>{`
					header {
						padding: 0 1.5rem;
						display: flex;
						justify-content: space-between;
						position: relative;
						align-items: center;
						height: 5rem;
						z-index: 2000;
						border-bottom: 4px solid #000;
					}
					nav {
						position: absolute;
						right: 45px;
						margin-right: 0.8em;
						line-height: 2.3rem;
					}
					a {
						font-size: var(--text-small);
						transition: color 0.2s ease;
						text-decoration: none;
					}
					a:active {
						text-decoration: none;
					}

					nav :global(a):not(:last-child) {
						margin-right: 0.8em;
					}
					.logo {
						display: block;
						position: relative;
						/*top: 3vw;
                left: 5vw;*/
						z-index: 1;
						font-family: inherit;
						font-weight: 900;
						font-style: normal;
						font-stretch: normal;
						font-size: var(--h4-small);
						text-transform: uppercase;
						text-decoration: none;
						line-height: 0.85em;
						font-smoothing: antialiased;
						-webkit-backface-visibility: hidden;
						backface-visibility: hidden;
						transform: translateZ(0);
						transition: all 0.2s ease-in-out 0.05s,
							transform 0.5s cubic-bezier(0.86, 0, 0.07, 1) 0.25s;
					}

					.logoSpan {
						display: block;
						position: relative;
						width: 100%;
						overflow: hidden;
						color: var(--primary-text);
					}
					.header__right {
						display: flex;
						align-items: center;
					}
					.header__right a:last-child {
						margin-left: 24px;
					}
					.submit {
						margin-left: 24px;
					}
					.header__mobile-nav {
						display: none;
					}
					.header__mobile-toggle {
						display: none;
					}
					.github-nav-link {
						position: relative;
						color: var(--primary-text);
						display: flex;
						height: auto;
						width: 1.9em;
					}

					@media (max-width: 900px) {
						.container {
							padding: 2em;
						}
					}

					@media (max-width: 768px) {
						nav,
						.header__right {
							display: none;
						}

						nav {
							left: 50%;
							transform: translateX(-50%);
							margin-right: 0;
						}
						.header__mobile-toggle {
							display: block;
						}

						.header__mobile-toggle svg {
							width: 2em;
						}
						.header__mobile-nav {
							display: ${mobileNavShown ? "flex" : "none"};
							width: 100%;
							flex-direction: column;
							align-items: center;
							position: relative;
							margin-bottom: 3em;
							background: var(--grey-bg);
						}
						.header__mobile-nav :global(a) {
							height: 3em;
							width: 100%;
							margin-bottom: 1em;
							display: flex;
							align-items: center;
							justify-content: center;
							text-decoration: none;
							color: var(--primary-text);
						}
						.header__mobile-nav :global(a):not(:last-child) {
							margin-right: 0;
						}
						.header__mobile-nav :global(a):last-of-type {
							margin-bottom: 0;
						}

					}
				`}</style>
			</React.Fragment>
		);
	}
}
