import React from 'react'
import Document, {
	DocumentContext,
	DocumentInitialProps,
	Head,
	Html,
	Main,
	NextScript,
} from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'

// Pré-renderização de todos estilos, charset, meta, fontes, server-side
// Carrega o javascript no navegador do usuário mesmo se estiver desabilitado
export default class MyDocument extends Document {

  // Esta função carrega as propriedades e os estilos da página
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheets()
		const originalRenderPage = ctx.renderPage

		ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props => sheet.collect(<App {...props} />),
				})

			const initialProps = await Document.getInitialProps(ctx)
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			}
	}

  // Renderização do JSX com Head, o Main e o corpo da página, e o NextScript executa
  // os scripts da página, além dos já pré carregados.
	render(): JSX.Element {
		return (
			<Html lang="pt">
				<Head>
					<meta charSet="utf-8" />
          <link rel="icon" href="/favicon.png" type="image/png" />
					<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
