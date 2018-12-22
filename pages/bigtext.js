import Layout from "../components/Layout";

export default () => (
      <Layout>
        <div className="interface">
          <div className="navLineV" />

          <div className="infoPane">
            <div className="bio navLineH">
              <p>
                Front-end web developer, artist, and product designer in Tampa.
                He works well with office dogs, office people, and lots of
                coffee.
              </p>
            </div>
          </div>
        </div>
        <div className="platformPerspective platformAnimation">
          <div className="platformContainer">
            <div className="platform">
              <ul className="projects">
                <li className="projectsLi">
                  <div className="projectContainer">
                    <a href="#" data-info="2018">
                      Type
                    </a>
                  </div>
                </li>
                <li className="projectsLi">
                  <div className="projectContainer">
                    <a href="#" data-info="2018">
                      Graphics
                    </a>
                  </div>
                </li>
                <li className="projectsLi">
                  <div className="projectContainer">
                    <a href="#" data-info="2018">
                      Apparel
                    </a>
                  </div>
                </li>
                <li className="projectsLi">
                  <div className="projectContainer">
                    <a href="#" data-info="2018">
                      UI/UX
                    </a>
                  </div>
                </li>
                <li className="projectsLi">
                  <div className="projectContainer">
                    <a href="#" data-info="2018">
                      Code
                    </a>
                  </div>
                </li>
                <li className="projectsLi">
                  <div className="projectContainer">
                    <a href="#" data-info="2018">
                      About
                    </a>
                  </div>
                </li>
                <li className="projectsLi">
                  <div className="projectContainer">
                    <a href="#" data-info="2018">
                      Contact
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <style jsx global>
            {`
              .interface {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                top: 0;
                left: 0;
                z-index: 2;
                width: 22vw;
                height: 100%;
                padding: 5vh 5vw 5vh;
              }

              /*.navLineV {
                width: 2px;
                position: absolute;
                height: 100%;
                background: currentColor;
                z-index: 10;
                left: 2vw;
                top: 0;
              }

              .logo:before {
                content: "";
                height: 2px;
                background: currentColor;
                z-index: 10;
                position: absolute;
                width: 1rem;
                left: -3vw;
                top: 50%;
              }

              .navLineH {
                position: relative;
              }

              .navLineH p:before {
                content: "";
                height: 2px;
                background: currentColor;
                z-index: 10;
                position: absolute;
                width: 1rem;
                left: -3vw;
                top: 50%;
              }*/

              .interface .logo {
                display: block;
                position: relative;
                /*top: 3vw;
                left: 5vw;*/
                z-index: 1;
                font-family: inherit;
                font-weight: 900;
                font-style: normal;
                font-stretch: normal;
                font-size: var(--h4-small);
                text-transform: uppercase;
                text-decoration: none;
                line-height: 0.85em;
                font-smoothing: antialiased;
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
                transform: translateZ(0);
                transition: all 0.2s ease-in-out 0.05s,
                  transform 0.5s cubic-bezier(0.86, 0, 0.07, 1) 0.25s;
              }

              .logoSpan {
                display: block;
                position: relative;
                width: 100%;
                overflow: hidden;
                color: var(--primary-text);
              }

              .infoPane {
                font-size: var(--text-small);
                line-height: 1.45;
                /*padding: 2.5vh 5vw 5vh;*/
                height: 100%;
                position: relative;
                margin: 2vw 0;
                /*top: 5vh;*/
              }

              .platformPerspective {
                position: relative;
                width: 100%;
                perspective: 100vw;
                perspective-origin: center 20vw;
                height: 100vh;
                overflow-x: hidden;
                overflow-y: auto;
                transform-style: preserve-3d;
                will-change: perspective-origin;
              }

              .platformContainer {
                position: relative;
                width: 100%;
                height: 100%;
                transform: translateZ(0);

                transform-style: preserve-3d;
              }

              @media screen and (min-width: 768px) {
                .platformContainer {
                  transition: transform 1s cubic-bezier(0.165, 0.84, 0.44, 1);
                }
              }

              .platform {
                transform: translate3d(0px, 0px, 0px);
                position: relative;
                top: 0;
                left: 0;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                width: 100%;
                padding: 5vw 5vw calc(7.5vw + 67px) 0;
                transform-style: preserve-3d;
                transition: opacity 1s;
              }

              .projectContainer {
                transform: rotateY(-35deg) translateZ(0) scale(1);
                transform-origin: right center;
                transform-style: preserve-3d;
                will-change: transform;
              }

              .projectsLi:hover .projectContainer {
                transform: rotateY(-25deg) translateZ(0) scale(1);
                transition-duration: 0.5s;
              }

              .projectsLi {
                cursor: pointer;
                transform-style: preserve-3d;
              }

              .projects {
                position: relative;
                margin: 0;
                padding-left: 0;
                list-style: none;
                text-align: right;
                width: 95%;
                transform-style: preserve-3d;
              }

              .projects a {
                position: relative;
                color: #000;
                text-decoration: none;
                text-transform: uppercase;
                font-family: inherit;
                font-weight: 900;
                font-style: normal;
                font-stretch: normal;
                font-size: 10vw;
                letter-spacing: 0.02em;
                line-height: 1;
                transition: color 0.5s cubic-bezier(0.23, 1, 0.32, 1),
                  opacity 0.5s cubic-bezier(0.23, 1, 0.32, 1);
              }

              .projects a:before {
                content: attr(data-info);
                white-space: pre;
                position: absolute;
                top: 3.7em;
                left: -250px;
                width: 200px;
                text-align: right;
                font-size: 0.7vw;
                font-weight: 500;
                letter-spacing: 0;
                line-height: 1em;
                color: #000 !important;
                pointer-events: none;
                transition: none;
              }

              /*.projects a:before {
                content: attr(data-info);
                white-space: pre;
                position: absolute;
                top: 7.7em;
                left: -180px;
                width: 200px;
                text-align: right;
                font-size: 0.9vw;
                font-weight: 500;
                letter-spacing: 0;
                line-height: 1em;
                color: #000 !important;
                transform: rotate(-65deg);
                pointer-events: none;
                transition: none;
              }*/

              .projects a {
                color: #000;
                -webkit-text-stroke: 3px #000;
                text-stroke: 3px #000;
              }

              .projectsLi:hover .projectContainer a {
                color: transparent;
                -webkit-text-stroke: 3px #000;
                text-stroke: 3px #000;
              }

              .projects a:before {
                -webkit-text-stroke: transparent;
                text-stroke: transparent;
              }

              .projects a:after {
                content: "";
                position: absolute;
                top: 0.23em;
                left: -0.3em;
                width: 2px;
                height: 0.85em;
                background-color: #000;
                transform: rotate(25deg);
                pointer-events: none;
              }
            `}
          </style>
        </div>
      </Layout>
    );