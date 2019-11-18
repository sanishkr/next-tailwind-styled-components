/* eslint-disable react/react-in-jsx-scope */
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { parseCookies } from 'nookies';
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    const { html, head, errorHtml, chunks } = ctx.renderPage();
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      const cookies = parseCookies(ctx);
      // console.log("ctx: ", ctx);
      // console.log("cookies: ", cookies);

      initialProps.language = cookies['next-i18next'] || 'en';
      initialProps.direction = initialProps.language === 'ar' ? 'rtl' : 'ltr';
      return {
        html,
        head,
        errorHtml,
        chunks,
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    const { language, direction } = this.props;
    return (
      <html dir={direction} lang={language}>
        <Head></Head>
        <body>
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
