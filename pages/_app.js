import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';

// import favicon from '../public/favicon.ico';

class NextApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <meta name="theme-color" content="#317EFB"/>
          <link rel="manifest" href="manifest.json" />
          <link rel="icon" sizes="192x192" href="favicon.ico" />
          <link rel="apple-touch-icon" href="favicon.ico" />
          <title>NextJS, tailwind.css, Styled Components</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="Description" content="NextJS, tailwind.css, Styled Components | The best of all the worlds." />
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