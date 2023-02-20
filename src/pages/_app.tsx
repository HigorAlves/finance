import { NextPage } from 'next'

import { MantineProvider } from '@mantine/core'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { Layout, LayoutTypes } from '~/layout'
import { rtlCache } from '~/rtl-cache'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: LayoutTypes
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App(props: AppPropsWithLayout) {
  const { Component, pageProps } = props
  const { getLayout = 'base' } = Component

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme: 'dark' }}
        emotionCache={rtlCache}
      >
        <Layout layout={getLayout}>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </>
  )
}
