const clientList = props => (
	<>
		{props.items.clients.map(item => (
			<React.Fragment key={item.name}>
				<a href={item.url} className="card-wrapper" key={item.name}>
					<div className="card">
						<img className="card-logo mask mask-2" src={item.img} alt="" />
						<div className="card-content">
							<div className="project-name button">{item.name}</div>
							<p>{item.description}</p>
							<p className="tags">{item.tech}</p>
						</div>
					</div>
				</a>
				<style jsx>{`
					.card {
						background-size: cover;
						background-position: center top;
						background-repeat: no-repeat;
						height: 12rem;
						width: 17rem;
						max-height: 400px;
						border-radius: var(--border-radius);
						/*box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px 0px,
							rgba(0, 0, 0, 0.02) 0px 0px 0px 1px;*/
						transition: box-shadow 0.2s ease 0s;
						position: relative;
						margin: auto;
					}

					.card-content {
						position: absolute;
						top: 0;
						padding: 1em;
						height: 100%;
						display: flex;
						flex-direction: column;
						place-content: flex-start;
					}

					.card-content p {
						margin: 1rem 0;
						width: 95%;
					}

					.card-logo {
						width: 4em;
						height: 4em;
						position: absolute;
						display: block;
						z-index: 1000;
						top: -1.5em;
						right: 1em;
						border-radius: 5px;
						background: #fff;
					}

					.mask {
						mask-type: luminance;
						-webkit-mask-repeat: no-repeat;
						mask-repeat: no-repeat;
						-webkit-mask-position: center;
						mask-position: center;
						-webkit-mask-size: contain;
						mask-size: contain;
					}

					.mask-2 {
						-webkit-mask-image: url(/static/squircle.svg);
						mask-image: url(/static/squircle.svg);
					}

					.card-wrapper {
						padding: 0;
					}

					@media screen and (max-width: 30em) {
						.card-wrapper {
							margin: 1.5em 0;
						}
						.card {
							height: 12rem;
							width: 100%;
						}
						.card-wrapper:first-of-type {
							margin-top: 0.5em;
						}
						.card-wrapper:nth-of-type(3) {
							margin-bottom: 0.5em;
						}
					}

					@media screen and (max-width: 1919px) {
						.card-wrapper:nth-child(n + 4) {
							display: none;
						}
					}
					@media screen and (min-width: 1920px) {
						.card-wrapper:nth-child(n + 4) {
							display: none;
						}
					}

					.card:before {
						content: "";
						width: 100%;
						height: 100%;
						position: relative;
						background: var(--hue-3);
						display: block;
						border-radius: var(--border-radius);
						opacity: 1;
					}

					.card-wrapper:hover .button {
						background-color: #f5f5f5;
						box-shadow: 2px 2px 0 #222;
					}

					.card:hover {
						box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px 0px,
							rgba(0, 0, 0, 0.02) 0px 0px 0px 1px;
					}

					.card-content h3,
					.card-content p {
						color: var(--primary-text);
					}

					.project-name.button {
						color: var(--primary-text);
					}

					.card-content .tags {
						font-family: var(--monospace);
						font-size: var(--text-small);
						color: var(--secondary-text);
					}
				`}</style>
			</React.Fragment>
		))}
	</>
);

export default clientList;

// style={{ backgroundImage: `url(${item.img})` }}
// ${item.img ? `background-image: url(${item.img});` : ""}
