import React, {useState} from 'react'
import router from 'next/router'
import {
  useLazyQuery,
} from "@apollo/client";

import { AlertMessage, Box, Button, Checkbox, Input, Link, Logo, Text } from '@island.is/island-ui/core'
import { formWrapper } from '@island.is/tax/screens/Tax/login/Login.css'

import {GetUserByPhoneQuery} from '../../graphql/schema'
import { withApollo } from "../../graphql/withApollo";
import {
  GET_USER_BY_PHONE_QUERY,
} from "../../screens/queries";

const Login = () => {
  const [phone, setPhone] = useState('');
  const [isError, setIsError] = useState(false);

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
    } else {
      setIsError(true);
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
          width='full'
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
          <Text fontWeight="light" color="dark400" paddingTop={1} paddingBottom={4}>
            á mínar síður Ísland.is
          </Text>
          {
            isError && (
              <Box width='full' paddingX={7}>
                <AlertMessage
                  type="error"
                  message="Notandi finnst ekki"
                />
              </Box>
            )
          }
          <Box paddingTop={[2]} width='full' paddingX={7}>
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
          </Box>
          <Box paddingTop={[4]}>
            <Checkbox
              label="Muna símanúmer"
            />
          </Box>
          <Box paddingTop={[4]} paddingBottom={[7]} paddingX={7} width='full'>
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
          paddingX={[8]}
          width="full"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Text paddingBottom={[3]}>
            Eða skráðu þig inn með
          </Text>
          <Box paddingBottom={[3]} width="full">
            <Button colorScheme="default" fluid size="default" variant="ghost">
              Auðkenni-appið
            </Button>
          </Box>
          <Box paddingBottom={[3]} width="full">
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
          Skilmálar
        </Link>
        <Box display="flex">
          <Link href="/" color="blue400" underline="normal">
            English
          </Link>
          <Box paddingLeft={[3]}>
            <Link href="/" color="blue400" underline="normal">
              Aðstoð
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default withApollo(Login);
