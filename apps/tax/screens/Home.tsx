import React from 'react'

import { Box } from '@island.is/island-ui/core'
import { withMainLayout } from '@island.is/tax/layouts/main'
import type { Screen } from '@island.is/tax/types'

const Home = () => {
  return (
    <Box>
      Test
    </Box>
  )
}

Home.getInitialProps = async () => {
  return {}
}

export default withMainLayout(Home)
