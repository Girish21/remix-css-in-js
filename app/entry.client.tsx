import { CacheProvider } from '@emotion/react'
import ReactDOM from 'react-dom'
import { RemixBrowser } from 'remix'
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import emotionCache from './emotion-cache'
import theme from './theme'
import { ThemeProvider } from './theme-context'

const cache = emotionCache()

ReactDOM.hydrate(
  <ThemeProvider value={null}>
    <CacheProvider value={cache}>
      <MUIThemeProvider theme={theme}>
        <RemixBrowser />
      </MUIThemeProvider>
    </CacheProvider>
  </ThemeProvider>,
  document
)
