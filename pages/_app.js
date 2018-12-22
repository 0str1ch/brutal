import App, { Container } from "next/app";
import React from "react";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    window.addEventListener('beforeinstallprompt', function(event) {
      event.userChoice.then(function(choiceResult) {
        console.log(choiceResult.outcome);
  
        if (choiceResult.outcome == 'dismissed') {
          console.log('User cancelled home screen install');
        } else {
          console.log('User added to home screen');
        }
      });
    });
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Component {...pageProps} />

        <style jsx global>{`
        .page-transition-enter {
            opacity: 0;
            transform: translate3d(0, -10%, 0);
          }
          .page-transition-enter-active {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            transition: opacity 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 300ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
        `}</style>
      </Container>
    );
  }
}
