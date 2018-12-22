const ArticleBlock = props => (
  <div className="articleBlock">
    {props.children}
    <style jsx global>
      {`
        .articleBlock h2,
        .articleBlock h3 {
          color: var(--light-text);
          font-weight: 900;
          line-height: 90%;
          font-size: 7vw;
          margin: 0;
        }

        .articleBlock h2 {
          -webkit-text-stroke: 2px var(--light-text);
          -webkit-text-fill-color: transparent;
        }

        @media screen and (max-width: 30rem) {
          .articleBlock h2 {
            -webkit-text-stroke-width: 1px;
          }
        }

        .articleBlock h3 {
          margin: 0;
        }

        .articleBlock h3 a {
          color: var(--light-text);
          font-weight: 900;
          line-height: 90%;
          font-size: 7vw;
          text-decoration: none;
        }

        .articleBlock h3 a:hover {
          text-decoration: underline var(--primary);
        }

        .glitchTitle {
          position: relative;
          display: block;
        }

        .glitchLayer--1 {
          position: relative;
          -webkit-text-stroke: 2px var(--light-text);
          -webkit-text-fill-color: transparent;
          z-index: 10;
        }
        .glitchLayer--2 {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          animation: skew_left 0.8s infinite alternate
            cubic-bezier(0.77, 0, 0.175, 1) 0s;
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke: 2px var(--light-text);
          z-index: 1;
        }
        .glitchLayer--3 {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          animation: skew_right 0.8s infinite alternate
            cubic-bezier(0.77, 0, 0.175, 1) 0s;
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke: 2px var(--light-text);
          z-index: 1;
        }

        .glitchLayer--2 span,
        .glitchLayer--3 span {
          color: var(--primary);
        }

        @keyframes skew_left {
          from {
            -webkit-text-stroke: 0px;
            transform: skew(-5deg, 5deg);
          }
          to {
            -webkit-text-stroke: 2px;
            transform: skew(5deg, -5deg);
          }
        }
        @keyframes skew_right {
          from {
            -webkit-text-stroke: 0px;
            transform: skew(5deg, -5deg);
          }
          to {
            -webkit-text-stroke: 2px;
            transform: skew(-5deg, 5deg);
          }
        }
      `}
    </style>
  </div>
);

export default ArticleBlock;
