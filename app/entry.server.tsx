import ReactDOMServer from 'react-dom/server'
import type { EntryContext } from 'remix'
import { RemixServer } from 'remix'
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import createEmotionServer from '@emotion/server/create-instance'
import emotionCache from './emotion-cache'
import { ThemeProvider } from './theme-context'
import { CacheProvider } from '@emotion/react'
import theme from './theme'

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const cache = emotionCache()
  const { extractCriticalToChunks } = createEmotionServer(cache)

  let markup = ReactDOMServer.renderToString(
    <ThemeProvider value={null}>
      <CacheProvider value={cache}>
        <MUIThemeProvider theme={theme}>
          <RemixServer context={remixContext} url={request.url} />
        </MUIThemeProvider>
      </CacheProvider>
    </ThemeProvider>
  )

  const emotionChunks = extractCriticalToChunks(markup)
  const styles = emotionChunks.styles.map(({ css, ids, key }) => (
    <style
      key={key}
      data-emotion={`${key} ${ids.join(' ')}`}
      dangerouslySetInnerHTML={{ __html: css }}
    />
  ))

  markup = ReactDOMServer.renderToString(
    <ThemeProvider value={styles}>
      <CacheProvider value={cache}>
        <MUIThemeProvider theme={theme}>
          <RemixServer context={remixContext} url={request.url} />
        </MUIThemeProvider>
      </CacheProvider>
    </ThemeProvider>
  )

  responseHeaders.set('Content-Type', 'text/html')

  return new Response('<!DOCTYPE html>' + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  })
}
