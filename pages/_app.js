import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';

// import favicon from '../public/favicon.ico';

class NextApp extends App {
  static async getInitialProps({ ctx, Component }) {
    let pageProps = {};

    // Execute component's getInitialProps first
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <link rel="manifest" href="manifest.json" />
          <link rel="icon" sizes="192x192" href="favicon.ico" />
          {/* <link rel="icon" sizes="192x192" href={favicon} /> */}
        </Head>

        <Container>
          <Component {...pageProps} />
        </Container>
      </>
    );
  }
}
export default NextApp;