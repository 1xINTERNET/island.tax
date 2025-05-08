import React, {useState} from 'react'
import router from 'next/router'
import {
  useLazyQuery,
} from "@apollo/client";

import { Box, Button, Input, Link, Logo, Text } from '@island.is/island-ui/core'
import { formWrapper } from '@island.is/tax/screens/Tax/login/Login.css'

import {GetUserByPhoneQuery} from '../../graphql/schema'
import { withApollo } from "../../graphql/withApollo";
import {
  GET_USER_BY_PHONE_QUERY,
} from "../../screens/queries";

const Login = () => {
  const [phone, setPhone] = useState('');

  const [fetchUser] = useLazyQuery<GetUserByPhoneQuery>(GET_USER_BY_PHONE_QUERY);

  const onLogin = async () => {
    const result = await fetchUser({
      variables: {
        phone,
      },
    });
    if (result.data) {
      localStorage.setItem('session_token', result.data.userByPhone.id);
      void router.push('tax');
    }
  }

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
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Box paddingTop={[4]} paddingBottom={[7]}>
            <Button
              colorScheme="default"
              fluid
              variant="primary"
              onClick={onLogin}
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

export default withApollo(Login);
