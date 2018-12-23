import React, { Component } from 'react'
import { Flipper, Flipped } from 'react-flip-toolkit'
import ActiveLink from './ActiveLink'
import { Spring, config } from 'react-spring'
import withPure from './hoc'

class Expander extends Component {
  state = { fullScreen: false }

  toggleFullScreen = () => {
    this.setState(prevState => ({
      fullScreen: !prevState.fullScreen
    }))
  }

  render() {
    return (
      <>
        <Flipper flipKey={this.state.fullScreen}>
          <Flipped flipId="square">
            <div className={this.state.fullScreen ? 'full-screen-square' : 'square'}>

                    <Flipped inverseFlipId="square" scale
                      className={this.state.fullScreen ? 'menu-icon menu-icon_open' : 'menu-icon menu-icon_closed'}
                      onClick={this.toggleFullScreen}>
                      Menu
											</Flipped>
                  </div>

              <nav className="header__mobile-nav container">
                <Spring reset="true" delay={800} from={{ opacity: 0 }} to={{ opacity: 1 }}>
                  {props => (
                    <div style={props}>
                      <ActiveLink href="/">Bigtext</ActiveLink>
                    </div>
                  )}
                </Spring>
                <Spring reset="true" delay={900} from={{ opacity: 0 }} to={{ opacity: 1 }}>
                  {props => (
                    <div style={props}>
                      <ActiveLink href="/bigtext">Bigtext</ActiveLink>
                    </div>
                  )}
                </Spring>
                <Spring reset="true" delay={1000} from={{ opacity: 0 }} to={{ opacity: 1 }}>
                  {props => (
                    <div style={props}>
                      <ActiveLink href="/bigtext">Bigtext</ActiveLink>
                    </div>
                  )}
                </Spring>
              </nav>
          </Flipped>
        </Flipper>
        <style jsx global>{`
          .square {
            position: absolute;
            cursor: pointer;
            font-size: var(--text-small);
          }

          .menu-icon {
            height: 4rem;
            width: 4rem;
          }

          .square nav {
            display: none;
            opacity: 0;
          }

          .menu-icon_open {
            color: #000;
            cursor: pointer;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            width: 100%;
            height: auto;
            place-items: center;
            place-content: flex-end;
            padding: 2rem;
            background: #fff;
            text-align: center;
          }

          .menu-icon_closed {
            color: #fff;
            background: #000;
            cursor: pointer;
            display: flex;
            place-content: center;
            place-items: center;
          }

          .full-screen-square {
            position: fixed;
            display: block;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            max-height: 100vh;
            background-color: #000;
            z-index: 10000;
          }

          .full-screen-square a {
            display: flex;
            color: #fff;
          }
        `}</style>
      </>
    )
  }
}

export default withPure(Expander)
