import { Component } from 'react'
import { Flipper, Flipped } from 'react-flip-toolkit'
import { Spring } from 'react-spring'
import ActiveLink from './ActiveLink'

const colors = ['#000']

class MenuFill extends Component {
  state = { focused: undefined }
  render() {
    return (
      <Flipper flipKey={this.state.focused} duration={750}>
        {typeof this.state.focused === 'string' ? (
          <Flipped flipId={this.state.focused}>
            <div className="focusedItem" style={{ backgroundColor: this.state.focused }}>
              <Flipped inverseFlipId={this.state.focused} transformOrigin="0 0">
                <div className="header__mobile-nav">
                  <Flipped flipId={`${this.state.focused}-button`} translate>
                    <Spring reset="true" delay={900} from={{ opacity: 0 }} to={{ opacity: 1 }}>
                      {props => (
                        <div style={props}>
                          <span className="nav-icon" onClick={() => this.setState({ focused: null })}>
                            Menu
                          </span>
                        </div>
                      )}
                    </Spring>
                  </Flipped>
                  <Flipped flipId={`${this.state.focused}-nav`} translate>
                    <nav className="header__mobile-nav container">
                      <Spring reset="true" delay={800} from={{ opacity: 0 }} to={{ opacity: 1 }}>
                        {props => (
                          <div style={props}>
                            <ActiveLink href="/" onClick={() => this.setState({ focused: null })}>
                              Home
                            </ActiveLink>
                          </div>
                        )}
                      </Spring>
                      <Spring reset="true" delay={900} from={{ opacity: 0 }} to={{ opacity: 1 }}>
                        {props => (
                          <div style={props}>
                            <ActiveLink href="/blog" onClick={() => this.setState({ focused: null })}>
                              Blog
                            </ActiveLink>
                          </div>
                        )}
                      </Spring>
                      <Spring reset="true" delay={1000} from={{ opacity: 0 }} to={{ opacity: 1 }}>
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
                        <Spring reset="true" delay={900} from={{ opacity: 0 }} to={{ opacity: 1 }}>
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
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
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

export default MenuFill
