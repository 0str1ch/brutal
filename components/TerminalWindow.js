import React from "react";

const TerminalWindow = props => (
  <div className="terminalWrapper">
    <div className="terminalBar">
      <div className="terminalControls">
        <div className="terminalIcon close" />
        <div className="terminalIcon minimize" />
        <div className="terminalIcon fullscreen" />
      </div>
      <div className="terminalTitle">Shell</div>
    </div>
    <div className="terminalBody">{props.children}</div>
    <style jsx global>{`
      .terminalWrapper {
        font-family: MaisonNeue-Mono, Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace,
          serif;
        display: block;
        border-radius: var(--border-radius);
        /* box-shadow: 0 20px 50px 0 rgba(0, 0, 0, 0.3); */
        clear: both;
        overflow: hidden;
        transform: translate3d(0);
        -webkit-transition: all 0.5s ease-out;
        -moz-transition: all 0.5s ease-out;
        -ms-transition: all 0.5s ease-out;
        -o-transition: all 0.5s ease-out;
        transition: all 0.5s ease-out;
        width: 500px;
        max-width: 100%;
        height: 300px;
        border: 2px solid var(--primary-hue);
      }

      .terminalBar {
        height: 2em;
        font-size: var(--text-small);
        color: var(--light-text);
        text-align: center;
        background-color: var(--primary-hue);
        position: relative;
        display: grid;
        grid-template-columns: auto auto;
        place-content: center center;
        place-items: center center;
        z-index: 1;
      }

      .terminalControls {
        display: flex;
        height: 1em;
        font-size: initial;
      }

      .terminalIcon {
        border-radius: 50%;
        display: flex;
        width: 0.8em;
        height: 0.8em;
        position: absolute;
      }

      .terminalTitle {
        position: absolute;
        font-size: 0.8em;
        font-size: 80%;
      }

      .close {
        background-color: #ff5f56;
        left: 1em;
      }

      .minimize {
        background-color: #ffbd2e;
        left: 2.5em;
      }

      .fullscreen {
        background-color: #27c93f;
        left: 4em;
      }

      .terminalBody {
        padding: 2.5em 0.8em;
        min-height: 100%;
        overflow-y: auto;
        word-break: break-all;
        background-color: var(--primary-hue);
        color: #fff;
        width: 100%;
				top: -1.7em;
        position: relative;
      }

      .terminalBody pre code::selection {
        background: var(--error);
        color: #fff;
      }

      .terminalBody p,
      .terminalBody span,
			.terminalBody pre code {
        color: #fff;
        margin: 1px;
        font-size: 14px;
      }

      .terminalBody pre code::before {
        content: "~$";
        display: inline-block;
        margin-right: 0.875em;
        color: limegreen;
        font-weight: 700;
				font-size: 14px;
      }

      .terminalBody .commandcd::before {
        content: "~$/js-next";
        display: inline-block;
        margin-right: 0.875em;
        color: limegreen;
      }
    `}</style>
  </div>
);

export default TerminalWindow;
