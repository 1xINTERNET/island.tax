import React, { FC } from 'react'
import Head from 'next/head'

import { Header } from '@island.is/tax/components'

const Layout: FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Ísland.is</title>
      </Head>
      <Header megaMenuData={undefined} />
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