import { Component } from 'react'
import { Flipper, Flipped } from 'react-flip-toolkit'
import { Spring } from 'react-spring'
import ActiveLink from './ActiveLink'
import withPure from '../components/hoc'

const colors = ['#000']

class MenuFill extends Component {
  state = { focused: undefined }
  render() {
    return (
      <Flipper flipKey={this.state.focused} >
        {typeof this.state.focused === 'string' ? (
          <Flipped flipId={this.state.focused} spring='wobbly'>
            <div className="focusedItem" style={{ backgroundColor: this.state.focused }}>
              <Flipped inverseFlipId={this.state.focused} transformOrigin="0 0">
                <div className="header__mobile-nav">
                  <Flipped flipId={`${this.state.focused}-button`} translate>
                    <Spring  delay={200} from={{ opacity: 0 }} to={{ opacity: 1 }}>
                      {props => (
                        <div style={props}>
                          <span className="nav-icon" onClick={() => this.setState({ focused: null })}>
                            Close Menu
                          </span>
                        </div>
                      )}
                    </Spring>
                  </Flipped>
                  <Flipped flipId={`${this.state.focused}-nav`} translate>
                    <nav className="header__mobile-nav container">
                      <Spring  delay={400} from={{ opacity: 0 }} to={{ opacity: 1 }}>
                        {props => (
                          <div style={props}>
                            <ActiveLink href="/" onClick={() => this.setState({ focused: null })}>
                              Home
                            </ActiveLink>
                          </div>
                        )}
                      </Spring>
                      <Spring  delay={550} from={{ opacity: 0 }} to={{ opacity: 1 }}>
                        {props => (
                          <div style={props}>
                            <ActiveLink href="/blog" onClick={() => this.setState({ focused: null })}>
                              Blog
                            </ActiveLink>
                          </div>
                        )}
                      </Spring>
                      <Spring  delay={700} from={{ opacity: 0 }} to={{ opacity: 1 }}>
                        {props => (
                          <div style={props}>
                            <ActiveLink href="/work" onClick={() => this.setState({ focused: null })}>
                              Work
                            </ActiveLink>
                          </div>
                        )}
                      </Spring>
                    </nav>
                  </Flipped>
                </div>
              </Flipped>
            </div>
          </Flipped>
        ) : (
          <div className="list">
            {colors.map(color => (
              <Flipped flipId={color} key={color}>
                <div key={color} className="listItem" onClick={() => this.setState({ focused: color })}>
                  <Flipped inverseFlipId={color} key={color}>
                    <div key={color}>
                      <Flipped flipId={`${color}-text`} translate key={color}>
                        <Spring  delay={200} from={{ opacity: 0 }} to={{ opacity: 1 }}>
                          {props => (
                            <div style={props}>
                              <span className="nav-icon" onClick={() => this.setState({ focused: null })}>
                                Menu
                              </span>
                            </div>
                          )}
                        </Spring>
                      </Flipped>
                    </div>
                  </Flipped>
                </div>
              </Flipped>
            ))}
          </div>
        )}
        <style jsx>{`
          .focusedItem {
            position: fixed;
            top: -50%;
            left: -50%;
            bottom: 0;
            right: 0%;
            height: 200%;
            width: 200%;
            /* transform: scale(5); */
            /*background-image: url(/static/da-band.jpg); */
            /* clip-path: circle(50% at 50% 50%); */
            /* margin: 1rem; */
            border-radius: 100%;
          }
          .focusedItem > div {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
          }

          .focusedItem .nav-icon {
            color: #fff;
          }

          .nav-icon {
            color: #000;
            cursor: pointer;
            font-size: var(--h3-medium);
          }

          .header__mobile-nav {
            display: flex;
            flex-direction: column;
            text-align: center;
          }
        `}</style>
      </Flipper>
    )
  }
}

export default withPure(MenuFill)
