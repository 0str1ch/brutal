import React, { Component } from 'react'
import { Flipper, Flipped } from 'react-flip-toolkit'
import ActiveLink from './ActiveLink'
import { Spring } from 'react-spring'
import withPure from '../components/hoc'


class AnimatedSquare extends Component {
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
              <button onClick={this.toggleFullScreen} />
              <nav className="header__mobile-nav container">
                <Spring reset='true' delay={800} from={{ opacity: 0 }} to={{ opacity: 1 }}>
                  {props => (
                    <div style={props}>
                      <ActiveLink href="/bigtext">Bigtext</ActiveLink>
                    </div>
                  )}
                </Spring>
								<Spring reset='true' delay={900} from={{ opacity: 0 }} to={{ opacity: 1 }}>
                  {props => (
                    <div style={props}>
                      <ActiveLink href="/bigtext">Bigtext</ActiveLink>
                    </div>
                  )}
                </Spring>
								<Spring reset='true' delay={1000} from={{ opacity: 0 }} to={{ opacity: 1 }}>
                  {props => (
                    <div style={props}>
                      <ActiveLink href="/bigtext">Bigtext</ActiveLink>
                    </div>
                  )}
                </Spring>
              </nav>
            </div>
          </Flipped>
        </Flipper>
        <style jsx global>{`
          .square {
            position: absolute;
            width: 5rem;
            height: 5rem;
            cursor: pointer;
            background-color: #000;
          }

          .square nav div a {
            display: none;
          }

          .square h1 {
            display: none;
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

export default withPure(AnimatedSquare)

