import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import theme from '../utilities/theme';

let font = "https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700,900&display=swap";

export default class MyDocument extends Document {

    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="theme-color" content={theme.palette.primary.main} />
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="theme-color" content="#000000" />
                    <meta name="nanocosmos" content="Live stream your interacgtive use cases with ultra-low latency!" />
                    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color={theme.palette.primary.main} />
                    <meta name="msapplication-TileColor" content={theme.palette.primary.main} />
                    <link rel="stylesheet" href={font} />
                    <script src="https://webrtc.nanocosmos.de/webrtc-api/5/nano.webrtc.min.js"></script>
                    <script src="https://webrtc.nanocosmos.de/webrtc-api/5/nano.bintu.min.js"></script>
                    <script src="https://demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.4.min.js"></script>
                    <script src="https://webrtc.nanocosmos.de/release/js/app/nano.config.js"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
        });

    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    };
};