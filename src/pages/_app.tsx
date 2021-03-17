import { useState, useEffect } from 'react'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../store'

// Temas
import { CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import theme from '../styles/theme'

// Componentes próprios
import AppBar from '../components/AppBar'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  
  // Setup Dark-Light Mode
  const [darkMode, setDarkMode] = useState(false)
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  useEffect(() => {
    setDarkMode(prefersDarkMode)
  }, [prefersDarkMode])

  // Nesting de temas para incluir configuração de dark mode
  const nestedTheme = createMuiTheme({
    ...theme,
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  })

  return (
    <Provider store={store}>
      <ThemeProvider theme={nestedTheme}>
        <CssBaseline />
        <AppBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Component {...pageProps} />
        {/* <Footer /> */}
      </ThemeProvider>
    </Provider>
  )
}
export default App
