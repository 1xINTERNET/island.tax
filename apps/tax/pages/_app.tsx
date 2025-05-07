import React, { FC } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Header } from '@island.is/tax/components'

const Layout: FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  const router = useRouter()

  const hideHeader = router.pathname === '/login'
  return (
    <div>
      <Head>
        <title>Ísland.is</title>
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