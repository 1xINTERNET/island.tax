import Head from 'next/head'
import React, { FC } from 'react'

const Layout: FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Ísland.is</title>
      </Head>
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

SupportApplication.getInitialProps = async (appContext) => {
  const { Component, ctx } = appContext
  const customContext = {
    ...ctx,
  }
  const pageProps = (await Component.getInitialProps(customContext)) as any

  return {
    pageProps,
  }
}

export default SupportApplication
