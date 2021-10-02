import Document, { DocumentContext, Html, Head, Main, NextScript } from "next/document";


/* This custom document was created to override the default document
set by Next.js, which doesn't have the `lang` attribute on the `html` element.
With this custom document, we specify the attribute's value as "en" (English).

Why does specifying that even matter?
    Because if a page doesn't specify a `lang` attribute, a screen reader assumes
    that the page is in the default language that the user chose when setting up
    the screen reader.
    If the page isn't actually in the default language, then the screen reader
    might not announce the page's text correctly.
    For more info, see: https://web.dev/html-has-lang/

For more details about custom documents, see the Next.js documentation on the topic:
    https://nextjs.org/docs/advanced-features/custom-document
*/
class CustomDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default CustomDocument;
