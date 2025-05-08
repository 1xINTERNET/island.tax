import React, { FC } from 'react'

import { fontStyles } from '../styles/font.css';

import Head from 'next/head'
import { useRouter } from 'next/router'

import { Header } from '@island.is/tax/components'
import {PRELOADED_FONTS} from "@island.is/tax/constants";

const Layout: FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  const router = useRouter()

  const hideHeader = router.pathname === '/login'
  return (
    <div>
      <Head>
        <title>Ísland.is</title>
        {PRELOADED_FONTS.map((href, index) => {
          return (
            <link
              key={index}
              rel="preload"
              href={href}
              as="font"
              type="font/woff2"
              crossOrigin="anonymous"
            />
          )

        })}
        <style>{fontStyles}</style>
      </Head>
      {!hideHeader && <Header megaMenuData={undefined} />}
      {children}
    </div>
  )
}

const SupportApplication: any = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default SupportApplication
