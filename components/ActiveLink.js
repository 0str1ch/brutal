import { withRouter } from 'next/router'
import Link from 'next/link'

const ActiveLink = ({ children, router, href }) => (
  <Link href={href} prefetch>
    <a className="nav-button">
      {children}

      <style jsx>{`
        a {
          font-size: var(--h2-large);
          text-decoration: none;
          color: ${router.pathname === href ? 'var(--hue-1)' : '#fff'};
        }

        .nav-button {
          line-height: normal;
          font-weight: 600;
          margin: 2em 0;
          cursor: pointer;
          position: relative;
          place-content: center;
          place-self: center;
          font-size: var(--h1-xl);
        }

        .nav-button:hover {
          color: ${router.pathname === href ? 'var(--hue-1)' : '#fff'};
        }
      `}</style>
    </a>
  </Link>
)

export default withRouter(ActiveLink)
