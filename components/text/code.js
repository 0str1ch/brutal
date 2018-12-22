import PropTypes from 'prop-types';

export const Code = ({ children, syntax }, { darkBg } = {}) => (
  <pre className={(darkBg ? 'dark' : '') + (syntax ? ` ${syntax}` : '')}>
    <code>{children}</code>
    <style jsx>
      {`
        pre {
          border: 1px solid #eaeaea;
          padding: 20px;
          margin: 4px 0;
          white-space: pre;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
        }
        code {
          color: default;
          font-family: inherit;
          font-size: 13px;
          line-height: 20px;
        }
        pre.dark {
          border-color: #333;
        }
        .dark code {
          color: #fff;
        }
        .dark.shell code {
          color: #50e3c2;
        }
      `}
    </style>
  </pre>
);

Code.contextTypes = {
  darkBg: PropTypes.bool
};

export const InlineCode = ({ children, noWrap }, { disabled, darkBg } = {}) => (
  <code
    className={
      (noWrap ? 'no-wrap' : '') +
      (darkBg ? ' dark' : '') +
      (disabled ? ' disabled' : '')
    }
  >
    {children}
    <style jsx>
      {`
        code {
          color: default;
          font-family: inherit;
          font-size: 0.9em;
          white-space: pre-wrap;
        }

        code.no-wrap {
          white-space: nowrap;
        }

        code::before {
          content: '\`';
        }

        code::after {
          content: '\`';
        }

        code.dark {
          color: #50e3c2;
        }

        code.disabled {
          color: #777;
        }
      `}
    </style>
  </code>
);

InlineCode.contextTypes = {
  darkBg: PropTypes.bool,
  disabled: PropTypes.bool
};
