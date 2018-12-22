const ProjectList = props => (
	<>
		{props.items.projects.map(item => (
			<React.Fragment key={item.name}>
				<a href={item.url} className="card-wrapper" key={item.name}>
					<div className="card">
						<div className="card-content">
							<div className="project-name button">{item.name}</div>
							<p>{item.description}</p>
						</div>
					</div>
				</a>
				<style jsx>{`
					.card {
						${item.img ? `background-image: url(${item.img});` : ""}
						background-size: cover;
						background-position: center top;
						background-repeat: no-repeat;
						height: 14rem;
						width: 100%;
						max-height: 400px;
						border-radius: var(--border-radius);
						/*box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px 0px,
							rgba(0, 0, 0, 0.02) 0px 0px 0px 1px;*/
						overflow: hidden;
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

					.card-wrapper {
						padding: 0;
					}

					@media screen and (max-width: 1919px) {
						.card-wrapper:nth-child(n + 4) {
							display: none;
						}
					}
					@media screen and (min-width: 1920px) {
						.card-wrapper:nth-child(n + 5) {
							display: none;
						}
					}

					.card:before {
						content: "";
						width: 100%;
						height: 100%;
						position: relative;
						background: var(--hue-4);
						display: block;
						opacity: 1;
					}

					.card-wrapper:hover .button {
						background-color: #f5f5f5;
						box-shadow: 2px 2px 0 #222;
					}

					.card:hover {
						box-shadow: rgba(0,0,0,0.08) 0px 4px 12px 0px, rgba(0,0,0,0.02) 0px 0px 0px 1px;
					}

					.card-content h3,
					.card-content p {
						color: var(--primary-text);
					}

					.project-name.button {
						color: var(--primary-text);
					}
				`}</style>
			</React.Fragment>
		))}
	</>
);

const ClientList = props => (
	<>
		{props.items.clients.map(item => (
			<React.Fragment key={item.name}>
				<a href={item.url} className="card-wrapper" key={item.name}>
					<div className="card">
						<div className="card-content">
							<div className="project-name button">{item.name}</div>
							<p>{item.description}</p>
						</div>
					</div>
				</a>
				<style jsx>{`
					.card {
						${item.img ? `background-image: url(${item.img});` : ""}
						background-size: cover;
						background-position: center top;
						background-repeat: no-repeat;
						height: 14rem;
						width: 100%;
						max-height: 400px;
						border-radius: var(--border-radius);
						/*box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px 0px,
							rgba(0, 0, 0, 0.02) 0px 0px 0px 1px;*/
						overflow: hidden;
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

					.card-wrapper {
						padding: 0;
					}

					@media screen and (max-width: 1919px) {
						.card-wrapper:nth-child(n + 4) {
							display: none;
						}
					}
					@media screen and (min-width: 1920px) {
						.card-wrapper:nth-child(n + 5) {
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
						opacity: 1;
					}

					.card-wrapper:hover .button {
						background-color: #f5f5f5;
						box-shadow: 2px 2px 0 #222;
					}

					.card:hover {
						box-shadow: rgba(0,0,0,0.08) 0px 4px 12px 0px, rgba(0,0,0,0.02) 0px 0px 0px 1px;
					}

					.card-content h3,
					.card-content p {
						color: var(--light-text);
					}

					.project-name.button {
						color: var(--primary-text);
					}
				`}</style>
			</React.Fragment>
		))}
	</>
);

export default ProjectList

// style={{ backgroundImage: `url(${item.img})` }}
