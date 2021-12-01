import * as React from 'react'
import type { LinksFunction, LoaderFunction } from 'remix'
import {
  Meta,
  Links,
  Scripts,
  useLoaderData,
  LiveReload,
  useCatch,
  Outlet,
} from 'remix'
import CssBaseline from '@mui/material/CssBaseline'

import stylesUrl from './styles/global.css'
import { useTheme } from './theme-context'
import Navbar from './component/navbar'

export let links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }]
}

export let loader: LoaderFunction = async () => {
  return { date: new Date() }
}

function Document({
  children,
  title,
}: {
  children: React.ReactNode
  title?: string
}) {
  const styles = useTheme()

  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <link rel='icon' href='/favicon.png' type='image/png' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        {title ? <title>{title}</title> : null}
        {styles}
        <Meta />
        <Links />
      </head>
      <body>
        <CssBaseline />
        {children}
        {/* <Scripts /> */}
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}

export default function App() {
  let data = useLoaderData()

  return (
    <Document>
      <Navbar />
      <Outlet />
      <footer>
        <p>This page was rendered at {data.date.toLocaleString()}</p>
      </footer>
    </Document>
  )
}

export function CatchBoundary() {
  let caught = useCatch()

  switch (caught.status) {
    case 401:
    case 404:
      return (
        <Document title={`${caught.status} ${caught.statusText}`}>
          <Navbar />
          <h1>
            {caught.status} {caught.statusText}
          </h1>
        </Document>
      )

    default:
      throw new Error(
        `Unexpected caught response with status: ${caught.status}`
      )
  }
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error)

  return (
    <Document title='Uh-oh!'>
      <Navbar />
      <h1>App Error</h1>
      <pre>{error.message}</pre>
      <p>
        Replace this UI with what you want users to see when your app throws
        uncaught errors.
      </p>
    </Document>
  )
}
