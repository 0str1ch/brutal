import React, { Component } from "react";
import { Flipper, Flipped } from "react-flip-toolkit";

class AnimatedSquare extends Component {
	state = { fullScreen: false };

	toggleFullScreen = () => {
		this.setState(prevState => ({
			fullScreen: !prevState.fullScreen
		}));
	};

	render() {
		return (
			<>
				<Flipper flipKey={this.state.fullScreen}>
					<Flipped flipId="square">
						<div
							className={
								this.state.fullScreen ? "full-screen-square" : "square"
							}

						>
						<h1>Hello.</h1>
						<button onClick={this.toggleFullScreen}></button>
						</div>
					</Flipped>
				</Flipper>
				<style jsx global>{`
					.square {
						width: 5rem;
						height: 5rem;
						cursor: pointer;
						border-radius: 50%;
						background-color: #7971ea;
					}

					.square h1 {
						display: none;
					}

					.full-screen-square {
						position: fixed;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						max-height: 100vh;
						cursor: pointer;
						background-color: #000;
						z-index: 10000;
					}

					.full-screen-square h1 {
						display: flex;
						color: #fff;
					}
				`}</style>
			</>
		);
	}
}

export default AnimatedSquare;
