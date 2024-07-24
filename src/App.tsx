import { ThemeProvider } from 'styled-components'
import { AppRouter } from './router'
import GlobalStyles from './styles/global-styles'
import theme from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppRouter />
    </ThemeProvider>
  )
}

export default App
