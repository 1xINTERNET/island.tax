import React from 'react'
import router from 'next/router'

import { Box, Button, Input, Link, Logo, Text } from '@island.is/island-ui/core'
import { formWrapper } from '@island.is/tax/screens/Tax/login/Login.css'

export async function getServerSideProps() {
  const taxData = {
    country: 'test',
    vatRate: 10,
    description: 'test',
  }

  return {
    props: {
      taxInfo: taxData,
    },
  }
}

const Login = ({ loginInfo }) => {
  return (
    <Box className={formWrapper}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        borderWidth="standard"
        borderColor="blue200"
        borderRadius="large"
      >
        <Box
          paddingTop={[6]}
          flexDirection="column"
          display="flex"
          alignItems="center"
        >
          <Logo iconOnly width={40} />

          <Text
            variant="eyebrow"
            color="blue400"
            paddingTop={5}
            paddingBottom={2}
          >
            Rafræn skilríki í síma
          </Text>
          <Text variant="h1" as="h1">
            Skráðu þig inn
          </Text>
          <Text fontWeight="light" color="dark400" paddingBottom={4}>
            á mínar síður Ísland.is
          </Text>

          <Input
            backgroundColor="blue"
            label="Símanúmer"
            name=""
            size="sm"
            placeholder="000-0000"
            type="number"
          />
          <Box paddingTop={[4]} paddingBottom={[7]}>
            <Button
              colorScheme="default"
              fluid
              variant="primary"
              onClick={() => router.push('tax')}
            >
              Auðkenna
            </Button>
          </Box>
        </Box>

        <Box
          paddingTop={[3]}
          paddingBottom={[6]}
          background="blue100"
          width="full"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Text variant="h3" color="blue600" paddingBottom={[3]}>
            Fleiri leiðir
          </Text>
          <Box paddingBottom={[3]} width="half">
            <Button colorScheme="default" fluid size="default" variant="ghost">
              Auðkenni-appið
            </Button>
          </Box>
          <Box paddingBottom={[3]} width="half">
            <Button colorScheme="default" fluid size="default" variant="ghost">
              Skilríki á korti
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="spaceBetween"
        width="full"
        paddingY={1}
      >
        <Link href="/" color="blue400" underline="normal">
          English
        </Link>
        <Link href="/" color="blue400" underline="normal">
          Þarftu aðstoð?
        </Link>
      </Box>
    </Box>
  )
}

export default Login
