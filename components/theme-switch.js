import React from "react";



export default class ThemeSwitch extends React.Component {
	constructor() {
		super();

		this.state = {
			ThemeSwitchActive: false
		};

		this.toggleThemeSwitch = this.toggleThemeSwitch.bind(this);
	}

	toggleThemeSwitch() {
		this.setState({
			ThemeSwitchActive: !this.state.ThemeSwitchActive
		});

	}

	componentDidUpdate() {
    if (this.state.store) {
      this.state.store.setItem(this.props.storeKey, this.state.active);
    }
  }

	render() {
		const { ThemeSwitchActive } = this.state;
		return (
			<React.Fragment>
				<label className="switch">
					<input type="checkbox" onClick={this.toggleThemeSwitch} />
					<span className="slider round" />
				</label>

				<style jsx global>{`

					:root {
						--site-bg: ${ThemeSwitchActive ? "var(--site-bg-dark)" : "var(--site-bg-light)"};
					}

					.switch {
						position: relative;
						display: inline-block;
						width: 60px;
						height: 34px;
					}

					.switch input {
						opacity: 0;
						width: 0;
						height: 0;
					}

					.slider {
						position: absolute;
						cursor: pointer;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						background-color: var(--hint);
						transition: 0.15s var(--ease-in-quad);
					}

					.slider:before {
						position: absolute;
						content: "";
						height: 26px;
						width: 26px;
						left: 4px;
						bottom: 4px;
						background-color: white;
						transition: 0.15s var(--ease-in-quad);
					}

					input:checked + .slider {
						background-color: var(--primary);
					}

					input:focus + .slider {
						box-shadow: 0 0 1px #2196f3;
					}

					input:checked + .slider:before {
						-webkit-transform: translateX(26px);
						-ms-transform: translateX(26px);
						transform: translateX(26px);
					}

					.slider.round {
						border-radius: 34px;
					}

					.slider.round:before {
						border-radius: 50%;
					}
				`}</style>
			</React.Fragment>
		);
	}
}

