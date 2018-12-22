import React from "react";

export default class ProjectTile extends React.Component {
  constructor() {
    super();

    this.state = {
      projectTileFullscreen: false
    };

    this.toggleProjectTile = this.toggleProjectTile.bind(this);
  }

  toggleProjectTile() {
    this.setState({
      projectTileFullscreen: !this.state.projectTileFullscreen
    });
  }

  render() {
    const { projectTileFullscreen } = this.state;
    return (
      <React.Fragment>
        <a href="#">
          <div className="projectTiles projectTile" onClick={this.toggleProjectTile}>
            <h3>Placeholder Project</h3>
          </div>
        </a>

        <style jsx global>{`
          body {
            overflow-y: ${projectTileFullscreen ? "hidden" : "scroll"};
          }
          .projectTiles {
            width: ${projectTileFullscreen ? "100%" : "100%"};
            height: ${projectTileFullscreen ? "100vh" : "100%"};
            position: ${projectTileFullscreen ? "absolute" : "relative"};
            border-radius: ${projectTileFullscreen ? "0m" : "0.5rem"};
            background-color: var(--primary);
            box-shadow: rgba(0, 0, 0, 0.12) 0px 3px 8px 0px;
            z-index: ${projectTileFullscreen ? "2000" : "10"};
          }

          .projectTiles:hover {
            box-shadow: rgba(0, 0, 0, 0.12) 0px 18px 30px 0px;
          }

          .projectTiles a > h1 {
            text-decoration: none;
          }
        `}</style>
      </React.Fragment>
    );
  }
}
