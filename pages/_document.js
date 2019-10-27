import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;
		const { html, head, errorHtml, chunks } = ctx.renderPage()
		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
				});
			const initialProps = await Document.getInitialProps(ctx);

			return {
				html, head, errorHtml, chunks,
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				)
			};
		} finally {
			sheet.seal();
		}
	}
	render() {
    return (
      <html lang="en">
        <Head></Head>
        <body> 
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
