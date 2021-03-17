import { createMuiTheme } from '@material-ui/core/styles'
import { ptBR } from '@material-ui/core/locale'

// Cria instancia de tema.
const theme = createMuiTheme(
  {
    typography: {
      h1: {
        fontWeight: 500,
        fontSize: '3rem'
      },
      h2: {
        fontWeight: 500,
        fontSize: '2.5rem'
      },
      h3: {
        fontWeight: 500,
        fontSize: '2.1rem'
      },
      h4: {
        fontWeight: 500,
        fontSize: '1.8rem'
      },
      h5: {
        fontWeight: 500,
        fontSize: '1.5rem',
      },
      h6: {
        fontWeight: 500,
        fontSize: '1.2rem'
      },
      body1: {
        fontWeight: 400,
        fontSize: '1rem'
      },
      body2: {
        fontWeight: 400,
        fontSize: '0.8rem'
      }
    },
  },
  ptBR
)

export default theme
