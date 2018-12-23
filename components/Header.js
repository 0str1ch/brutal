import React from 'react'
import IconArrowDown from './icons/icon-arrow-down'
import IconGithub from './icons/icon-github'
import Link from 'next/link'
import ActiveLink from './ActiveLink'
import MyLogo from '../components/MyLogo'
import Popover from '../components/popover'
import Expander from './expander-menu'
import MenuFill from './menu-fill'

export default class Header extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <Link href="/">
            <a className="logo">
              <MyLogo />
            </a>
          </Link>

          <div className="header__right">
            <MenuFill />
          </div>


        </header>

        <style jsx>{`
          header {
            display: flex;
            justify-content: space-between;
            position: relative;
            align-items: center;
            height: 5rem;
            z-index: 2000;
            border-bottom: 4px solid #000;
          }
          nav {
            position: absolute;
            right: 45px;
            margin-right: 0.8em;
            line-height: 2.3rem;
          }
          a {
            font-size: var(--text-small);
            transition: color 0.2s ease;
            text-decoration: none;
          }
          a:active {
            text-decoration: none;
          }

          nav :global(a):not(:last-child) {
            margin-right: 0.8em;
          }
          .logo {
            display: block;
            position: relative;
            /*top: 3vw;
                left: 5vw;*/
            z-index: 1;
            font-smoothing: antialiased;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            transform: translateZ(0);
            margin-left: 1.5rem;
          }

          .logoSpan {
            display: block;
            position: relative;
            width: 100%;
            overflow: hidden;
            color: var(--primary-text);
          }
          .header__right {
            display: flex;
            place-content: flex-start;
            place-items: center;
            place-self: center;
            justify-content: space-evenly;
            width: 10rem;
          }
          .header__right:before {
            content: '';
            display: block;
            width: 4px;
            background: #000;
            align-items: center;
            height: 5rem;
          }

          .submit {
            margin-left: 24px;
          }
          .header__mobile-nav {
            display: none;
          }
          .header__mobile-toggle {
            display: none;
          }
          .github-nav-link {
            position: relative;
            color: var(--primary-text);
            display: flex;
            height: auto;
            width: 1.9em;
          }

          @media (max-width: 900px) {
            .container {
              padding: 2em;
            }
          }

          @media (max-width: 768px) {

            nav {
              left: 50%;
              transform: translateX(-50%);
              margin-right: 0;
            }
            .header__mobile-toggle {
              display: block;
            }

          }
        `}</style>
      </React.Fragment>
    )
  }
}
