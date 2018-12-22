import React from "react";

export default class GoathouseTile extends React.Component {
  constructor() {
    super();

    this.state = {
      goathouseTileFullscreen: false
    };

    this.toggleGoathouseTile = this.toggleGoathouseTile.bind(this);
  }

  toggleGoathouseTile() {
    this.setState({
      goathouseTileFullscreen: !this.state.goathouseTileFullscreen
    });
  }

  render() {
    const { goathouseTileFullscreen } = this.state;
    return (
      <React.Fragment>
        <a className="goathouseTileWrapper tileWrapper">
          <div className="goathouseTile projectTile" onClick={this.toggleGoathouseTile}>
            <h3>Goat House Records</h3>
          </div>
        </a>

        <style jsx global>{`
          body {
            overflow-y: ${goathouseTileFullscreen ? "hidden" : "scroll"};
          }
          .goathouseTile {
            width: ${goathouseTileFullscreen ? "100%" : "100%"};
            height: ${goathouseTileFullscreen ? "100vh" : "100%"};
            position: ${goathouseTileFullscreen ? "absolute" : "relative"};
            border-radius: ${goathouseTileFullscreen ? "0m" : "0.5rem"};
            background-color: var(--primary);
            background-image: url(/static/da-band.jpg);
            box-shadow: rgba(0, 0, 0, 0.12) 0px 3px 8px 0px;
            z-index: ${goathouseTileFullscreen ? "2000" : "10"};
          }

          .goathouseTile:hover {
            box-shadow: rgba(0, 0, 0, 0.12) 0px 18px 30px 0px;
          }

          .goathouseTile a > h1 {
            text-decoration: none;
          }

        `}</style>
      </React.Fragment>
    );
  }
}
