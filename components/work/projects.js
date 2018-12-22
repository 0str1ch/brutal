import projectManifest from "../../project-manifest";
import Link from "next/link";
import ProjectList from "./project-list"
import ClientList from "./client-list"

const Projects = () => (
	<article className="projects">
		<header className="category">
			<Link href="/projects">
				<a className="category-name">
					<h2>Projects</h2>
				</a>
			</Link>
			<p>
				I've worked with a lot of wonderful clients over the last ten years.
			</p>
		</header>
		<div className="clientListWrapper">
			<ProjectList items={projectManifest} />
		</div>
		<div className="clients-link">
			<Link href="/projects">
				<a>View more projects →</a>
			</Link>
		</div>
		<style jsx>
			{`
				header a {
					text-decoration: none;
				}

				header a:hover {
					text-decoration: underline;
				}

				.category p {
					width: 95%;
				}

				.category-name {
					display: inline-block;
				}

				.category-name h2 {
					margin-top: 0;
				}

				.projects {
					display: grid;
					grid-gap: 1rem;
					padding: 1rem;
					border-radius: var(--border-radius);
					position: relative;
					z-index: 1;
				}
				article.projects:before {
					content: "";
					display: block;
					background: var(--hue-4);
					opacity: 0.3;
					width: 100%;
					height: 100%;
					position: absolute;
					border-radius: var(--border-radius);
					z-index: -1;
				}

				article.projects {
					margin-bottom: 2rem;
				}

				article.projects:last-of-type {
					margin-bottom: 0;
				}

				.clients-link {
					font-size: var(--text-small);
					color: var(--primary-text);
				}

				.clients-link a:hover {
					text-decoration: underline;
				}

				@media screen and (min-width: 60em) {
					.projects {
						display: grid;
						grid-template-columns: 1fr 3fr;
						grid-template-rows: auto;
						grid-gap: 1rem;
						word-wrap: break-word;
					}
					.clients-link {
						grid-area: 2 / 2;
					}
				}

				.clientListWrapper {
					display: grid;
					grid-gap: 1rem;
				}

				@media screen and (min-width: 60em) {
					.clientListWrapper {
						grid-template-columns: 1fr 1fr 1fr;
						grid-template-rows: auto;
					}
				}

				@media screen and (min-width: 1920px) {
					.clientListWrapper {
						grid-template-columns: 1fr 1fr 1fr 1fr;
					}
				}
			`}
		</style>
	</article>
);

export default Projects;
