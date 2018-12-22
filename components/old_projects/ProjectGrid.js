const ProjectGrid = props => (
	<div className="projectGrid">
		{props.children}
		<style jsx global>
			{`
				.projectGrid {
					display: grid;
					grid-gap: 1rem;
				}

				.tileWrapper {
				}

				.projectTile {
					min-height: calc(20vh - 2rem);
					display: flex;
					flex-direction: column;
					left: 0;
					top: 0;
					padding: 1rem;
					overflow: hidden;
					place-items: center;
					place-content: center;
					cursor: pointer;
					transition: border-radius 0.2s var(--ease-out-cubic),
						box-shadow 0.2s var(--ease-in-quad),
						transform 0.2s var(--ease-in-quad);
				}

				.projectTile h3::selection {
					background: transparent;
					color: initial;
				}

				.projectTile h3 {
					margin-top: 0;
				}

				@media screen and (min-width: 60em) {
					.projectGrid {
						display: grid;
						grid-template-columns: 1fr 1fr 1fr;
						grid-template-rows: auto;
						grid-gap: 1rem;
						word-wrap: break-word;
						height: inherit;
						margin: 0 1em;
					}

					.goathouseTileWrapper {
						grid-column: 1 / span 2;
					}

					.typebombTileWrapper {
						grid-row: 1 / span 2;
						grid-column: 3 / span 2;
					}
				}
			`}
		</style>
	</div>
);

export default ProjectGrid;
