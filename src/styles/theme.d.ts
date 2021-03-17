import '@material-ui/core'
import theme from './theme'

// Exportando definição de tipos do arquivo theme.ts, como extensão do material-ui
export type Theme = typeof theme

declare module '@material-ui/core' {
  export interface DefaultTheme extends Theme {}
}
