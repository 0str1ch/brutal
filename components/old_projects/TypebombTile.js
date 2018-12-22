import React from "react";

export default class TypebombTile extends React.Component {
  constructor() {
    super();

    this.state = {
      typebombTileFullscreen: false
    };

    this.toggleTypebombTile = this.toggleTypebombTile.bind(this);
  }

  toggleTypebombTile() {
    this.setState({
      typebombTileFullscreen: !this.state.typebombTileFullscreen
    });
  }

  render() {
    const { typebombTileFullscreen } = this.state;
    return (
      <React.Fragment>
        <a className="typebombTileWrapper tileWrapper">
          <div className="typebombTile projectTile" onClick={this.toggleTypebombTile}>
            <h3>Typebomb</h3>
          </div>
        </a>

        <style jsx global>{`
          body {
            overflow-y: ${typebombTileFullscreen ? "hidden" : "scroll"};
          }
          .typebombTile {
            width: ${typebombTileFullscreen ? "100%" : "100%"};
            height: ${typebombTileFullscreen ? "100vh" : "100%"};
            position: ${typebombTileFullscreen ? "absolute" : "relative"};
            border-radius: ${typebombTileFullscreen ? "0m" : "0.5rem"};
            background-color: var(--primary);
            box-shadow: rgba(0, 0, 0, 0.12) 0px 3px 8px 0px;
            z-index: ${typebombTileFullscreen ? "2000" : "10"};
          }

          .typebombTile:hover {
            box-shadow: rgba(0, 0, 0, 0.12) 0px 18px 30px 0px;
          }

          .typebombTile a > h1 {
            text-decoration: none;
          }

        `}</style>
      </React.Fragment>
    );
  }
}
