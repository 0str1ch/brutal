import Header from './Header'
import Meta from './Meta'
import Head from 'next/head'
import withPure from '../components/hoc'

export default withPure(({ title, description, children }) => (
  <main className="layoutWrapper">
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
      />
      <title>{title || 'Jeremy Smith'}</title>
      <meta name="description" content={description || 'Jeremy Smith is a product designer and web developer.'} />
    </Head>
    <Header />
    <div className="layoutInner">{children}</div>
    <footer>
      <h1>later, dude.</h1>
    </footer>
    <style jsx global>
      {`
        body {
          position: relative;
        }

        body:after {
          top: 0;
          left: 0;
        }

        body:after,
        body:before {
          content: '';
          position: fixed;
          width: 4px;
          height: 100%;
          background: #000;
          display: inline-block;
          z-index: 9999;
        }

        body:before {
          bottom: 0;
          right: 0;
        }
        .layoutWrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          height: 100%;
          width: 100%;
          margin: 0;
          position: relative;
          overflow-scrolling: touch;
        }

        .layoutWrapper:after {
          top: 0;
        }

        .layoutWrapper:after,
        .layoutWrapper:before {
          content: '';
          position: fixed;
          left: 0;
          width: 100%;
          height: 4px;
          background: #000;
          display: inline-block;
          z-index: 9999;
        }

        .layoutWrapper:before {
          bottom: 0;
        }

        .layoutInner {
          align-items: stretch;
          flex-direction: column;
          display: flex;
          flex-direction: column;
          width: 100%;
          padding: 0;
        }

        @media screen and (min-width: 60em) {
          .layoutInner {
            display: flex;
            flex-wrap: wrap;
          }
        }

        @keyframes fadeup {
          0% {
            transform: translateY(50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0px);
            opacity: 1;
          }
        }

        /** Web Fonts START **/
        @font-face {
          font-family: 'Untitled Sans';
          font-display: swap;
          src: url('/static/fonts/Untitled_Sans_Regular.woff2') format('woff2');
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: 'Untitled Sans';
          font-display: swap;
          src: url('/static/fonts/Untitled_Sans_Regular_Italic.woff2') format('woff2');
          font-weight: normal;
          font-style: italic;
        }

        @font-face {
          font-family: 'Untitled Sans';
          font-display: swap;
          src: url('/static/fonts/Untitled_Sans_Medium_Italic.woff2') format('woff2');
          font-weight: normal;
          font-style: italic;
        }

        @font-face {
          font-family: 'Untitled Sans';
          font-display: swap;
          src: url('/static/fonts/Untitled_Sans_Bold.woff2') format('woff2');
          font-weight: 700;
          font-style: normal;
        }

        @font-face {
          font-family: 'Untitled Sans';
          font-display: swap;
          src: url('/static/fonts/Untitled_Sans_Bold_Italic.woff2') format('woff2');
          font-weight: 700;
          font-style: italic;
        }

        @font-face {
          font-family: 'Untitled Sans';
          font-display: swap;
          src: url('/static/fonts/Untitled_Sans_Medium.woff2') format('woff2');
          font-weight: 500;
          font-style: normal;
        }

        @font-face {
          font-family: 'Untitled Sans';
          font-display: swap;
          src: url('/static/fonts/Untitled_Sans_Black.woff2') format('woff2');
          font-weight: 900;
          font-style: normal;
        }

        @font-face {
          font-family: 'MaisonNeue-Mono';
          font-display: swap;
          src: url('/static/fonts/MaisonNeue-Mono.woff2') format('woff2');
          font-weight: normal;
          font-style: normal;
        }
        /** END Web Fonts **/

        * {
          -ms-font-feature-settings: 'kern' 1, 'liga' 1, 'clig' 1, 'alt' 1;
          -webkit-font-feature-settings: 'kern' 1, 'liga' 1, 'clig' 1, 'calt' 1;
          font-feature-settings: 'kern' 1, 'liga' 1, 'clig' 1, 'calt' 1;
          -webkit-font-kerning: normal;
          -moz-font-kerning: normal;
          font-kerning: normal;
          -webkit-font-variant-ligatures: common-ligatures contextual;
          font-variant-ligatures: common-ligatures contextual;
        }

        @media (min-width: 30em) {
          :root {
            font-size: calc(1rem + ((1vw - 0.6em) * 0.5556));
          }
        }
        @media (min-width: 120em) {
          :root {
            font-size: 1.2em;
          }
        }

        :root {
          /*font-size: calc(1vw + 1vh + .5vmin);*/
          /** Typography Sizes**/
          --h1-xl: 3.157em;
          --h2-large: 2.369em;
          --h3-medium: 1.777em;
          --h4-small: 1.333em;
          --text-large: ;
          --text-normal: 1em;
          --text-small: 0.85em;
          /** Font Family Variables**/
          --monospace: MaisonNeue-Mono, monospace;
        }

        body {
          font-weight: 400;
          color: var(--secondary-text);
        }

        p {
          margin-bottom: 1.3em;
          color: var(--secondary-text);
          font-size: 1em;
        }

        h1,
        h2,
        h3,
        h4 {
          margin: 1.414rem 0 0.5rem;
          line-height: 1.2;
        }

        h1 {
          margin-top: 0;
          font-size: var(--h1-xl);
          font-weight: 900;
          color: var(--primary-text);
        }

        h2 {
          font-size: var(--h2-large);
          font-weight: 900;
          color: var(--primary-text);
        }

        h3 {
          font-size: var(--h3-medium);
          font-weight: 700;
          color: var(--primary-text);
        }

        h4 {
          font-size: var(--h4-small);
          color: var(--primary-text);
        }

        small,
        .font_small {
          font-size: var(--text-small);
        }

        strong {
          font-family: 'Untitled Sans';
          font-weight: 500;
        }

        em {
          font-family: 'Untitled Sans';
          font-style: italic;
        }

        a {
          text-decoration: none;
          color: currentColor;
        }

        h1:last-child,
        h1:only-child,
        h2:last-child,
        h2:only-child,
        h4:last-child,
        h4:only-child,
        h6:last-child,
        h6:only-child,
        p:last-child,
        p:only-child {
          margin-bottom: 0;
        }

        code,
        pre {
          font-family: MaisonNeue-Mono, monospace;
        }

        code:before,
        code:after {
          content: '\`';
        }
        pre code:before,
        pre code:after {
          content: none;
        }

        p > code,
        li > code,
        dd > code,
        td > code {
          background-color: rgba(27, 31, 35, 0.05);
          border-radius: 3px;
          font-size: 85%;
          margin: 0 0.3em;
          padding: 0.2em 0;
          overflow-wrap: break-word;
          word-wrap: break-word;
          font-family: MaisonNeue-Mono, monospace;
        }

        code[class*='language-'],
        pre[class*='language-'] {
          color: #393a34;
          direction: ltr;
          text-align: left;
          white-space: pre;
          word-spacing: normal;
          word-break: normal;
          font-size: 0.95em;
          line-height: 1.4em;
          tab-size: 4;
          hyphens: none;
        }
        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: #2db52d;
          font-style: italic;
        }
        .token.namespace {
          opacity: 0.7;
        }
        .token.attr-value,
        .token.string {
          // color: #A31515;
          color: #ca0e0e;
        }
        .token.punctuation,
        .token.operator {
          color: #393a34; /* no highlight */
        }
        .token.url,
        .token.symbol,
        .token.number,
        .token.boolean,
        .token.variable,
        .token.constant,
        .token.inserted {
          color: #36acaa;
        }
        .token.atrule,
        .token.keyword,
        .language-autohotkey .token.selector,
        .language-json .token.boolean,
        .language-json .token.number,
        code[class*='language-css'] {
          color: #2525f9;
          font-weight: 600;
        }
        .token.function {
          color: #393a34;
        }
        .token.deleted,
        .language-autohotkey .token.tag {
          color: #9a050f;
          color: #2b91af;
        }
        .token.selector,
        .language-autohotkey .token.keyword {
          color: #00009f;
        }
        .token.important,
        .token.bold {
          font-weight: bold;
        }
        .token.italic {
          font-style: italic;
        }
        .token.class-name,
        .language-json .token.property {
          color: #2b91af;
        }
        .token.tag,
        .token.selector {
          color: #800000;
          color: #9a050f;
          color: #2b91af;
        }
        .token.attr-name,
        .token.property,
        .token.regex,
        .token.entity {
          color: #ff0000;
        }
        .token.directive.tag .tag {
          background: #ffff00;
          color: #393a34;
        }

        blockquote {
          display: block;
          padding: 1.25em 0;
          margin-bottom: 1.5em;
          width: 100%;
        }

        blockquote,
        q {
          quotes: none;
        }

        blockquote:after,
        blockquote:before,
        q:after,
        q:before {
          content: '';
          content: none;
        }

        blockquote.left-pull {
          margin-left: -40%;
        }

        @media only screen and (max-width: 36em) {
          blockquote.left-pull {
            margin-left: 0;
          }
        }

        blockquote.right-pull {
          width: 130%;
          margin-left: 15%;
        }

        @media only screen and (max-width: 36em) {
          blockquote.right-pull {
            width: 100%;
            margin-left: 0;
          }
        }

        blockquote .video {
          margin-bottom: 1.5em;
        }

        blockquote p {
          font-size: var(--h3-medium);
          color: var(--primary);
          line-height: 1.2;
        }

        blockquote p:first-of-type:before {
          content: '';
        }

        blockquote p:last-of-type:after {
          content: '';
        }

        blockquote span {
          display: block;
          text-align: right;
        }

        .quote-position,
        .quote-source {
          color: #000;
          opacity: 0.5;
        }

        .quote-source {
          font-family: NeueHaasBold, Helvetica, sans-serif;
          font-size: 1.5em;
          padding-bottom: 0.25em;
          margin-top: -1em;
        }

        .quote-source:before {
          content: '';
        }

        .quote-position {
          font-family: AndaleMono, monospace;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-right: -0.15em;
          font-size: 0.75em;
          font-weight: 700;
        }

        .quote-position + .quote-position {
          margin-top: 0.5em;
        }

        .col-2 {
          display: grid;
          grid-gap: 2rem;
          grid-template-columns: 1fr 1fr;
        }
      `}
    </style>
  </main>
)
)
