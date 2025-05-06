import React from 'react'
import { Header, Box, Divider, Page } from '@island.is/island-ui/core'

const Home = () => {

  return (
    <div>
      <Page>
        <Box padding="containerGutter">
          <Header />
        </Box>
        <Box padding="containerGutter">
          <h1>Heading 1</h1>
        </Box>
        <Divider />
        <Box padding="containerGutter">
          <h2>Heading 2</h2>
        </Box>
        <Box padding="containerGutter">
          <p>Paragraph</p>
        </Box>
      </Page>
    </div>
  )
}

Home.getInitialProps = async () => {
  return {}
}

export default Home
