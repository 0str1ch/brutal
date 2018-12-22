import { withRouter } from "next/router";
import Link from "next/link";

const ActiveLink = ({ children, router, href }) => (
	<Link href={href} prefetch>
		<a className="nav-button">
			{children}

			<style jsx>{`
				a {
					font-size: var(--text-small);
					text-decoration: none;
					color: var(--primary-text);
				}

				.nav-button {
					text-align: left;
					font-size: var(--text-small);
					line-height: normal;
					font-weight: 600;
					background-color: #fff;
					border: solid #222 2px;
					border-radius: var(--border-radius);
					padding: 0.2em 0.8em;
					cursor: pointer;
					position: relative;
					place-content: center;
					place-self: flex-start;
					background-color: ${router.pathname === href
						? "var(--hue-1)"
						: "#fff"};
					box-shadow: ${router.pathname === href ? "4px 4px 0 #222" : "0"};
				}

				.nav-button:hover {
					background-color: ${router.pathname === href
						? "var(--hue-1)"
						: "#f5f5f5"};
					box-shadow: 2px 2px 0 #222;
				}
			`}</style>
		</a>
	</Link>
);

export default withRouter(ActiveLink);
