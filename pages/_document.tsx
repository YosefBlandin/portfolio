import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name='description' content="Develop your with page with a professional Frontend Developer with 1.8 years of experience building websites using React JS" />
          <meta name='keywords' content="HTML, CSS, JavaScript, React, Angular, Frontend, Developer, Engineer, Web, Website, Yosef, Blandin, Rios, YosefBlandin, YosefBlandinRios, Software" />
          <meta name="author" content="Yosef Blandin" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
          <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;500;700;900&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument