import { useQuery} from '@apollo/client'

import {
  AlertMessage,
  Box,
  GridColumn,
  GridContainer,
  GridRow,
  Input,
  Text,
  Typography,
} from '@island.is/island-ui/core'
import { fieldWrapper } from '@island.is/tax/screens/Tax/steps/StepTwo.css'

import {GetUserQuery} from '../../../graphql/schema'
import { withApollo } from "../../../graphql/withApollo";
import { GET_USER_QUERY } from "../../queries";
import Buttons from '../Buttons'

type StepTwoProps = {
  onForward: () => void
  onBackward: () => void
}

const StepTwo = ({ onForward, onBackward }: StepTwoProps) => {
  const { data } = useQuery<GetUserQuery>(GET_USER_QUERY, {
    variables: {
      // Getting user id from local storage demo purpose
      id: Number(localStorage.getItem('session_token')),
    },
  });

  return (
    <Box
      background="white"
      borderRadius="large"
      padding={[3, 3, 10]}
      marginY={4}
    >
      <Typography variant="h1" paddingBottom={1}>
        Skil á framtali
      </Typography>

      <Text fontWeight="light">
        Vinsamlegast leiðréttið eftirfarandi upplýsingar ef þörf er á
      </Text>

      <GridContainer className={fieldWrapper}>
        <GridRow>
          <GridColumn span="12/12" className={fieldWrapper}>
            <Input
              backgroundColor="white"
              label="Fullt nafn"
              name=""
              value={data?.user.firstName + ' ' + data?.user.lastName}
              size="sm"
              type="text"
              disabled={true}
            />
          </GridColumn>
        </GridRow>

        <GridRow>
          <GridColumn span={['12/12', '12/12', '6/12']} className={fieldWrapper}>
            <Input
              backgroundColor="white"
              label="Kennitala"
              name=""
              value={data?.user.ssn}
              size="sm"
              type="text"
              disabled={true}
            />
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']} className={fieldWrapper}>
            <Input
              backgroundColor="white"
              label="Heimili"
              name=""
              value={data?.user.streetAndHouseNumber ?? ""}
              size="sm"
              type="text"
              disabled={true}
            />
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn span={['12/12', '12/12', '6/12']} className={fieldWrapper}>
            <Input
              backgroundColor="white"
              label="Póstnúmer"
              name=""
              value={data?.user.postalCode ?? 0}
              size="sm"
              type="number"
              disabled={true}
            />
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']} className={fieldWrapper}>
            <Input
              backgroundColor="white"
              label="Sveitarfélag"
              name=""
              value={data?.user.city ?? ""}
              size="sm"
              type="text"
              disabled={true}
            />
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn span={['12/12', '12/12', '6/12']} className={fieldWrapper}>
            <Input
              backgroundColor="white"
              label="Netfang "
              name=""
              value={data?.user.email ?? ""}
              size="sm"
              type="email"
              autoComplete="off"
              disabled={true}
            />
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']} className={fieldWrapper}>
            <Input
              backgroundColor="white"
              label="Símanúmer"
              name=""
              value={data?.user.phone ?? ""}
              size="sm"
              type="tel"
              disabled={true}
            />
          </GridColumn>
        </GridRow>
      </GridContainer>

      <Box paddingY={3}>
        <AlertMessage
          type="info"
          message="Ef netfang og símanúmer er ekki rétt hér að ofan þá verður að breyta þeim upplýsingum á mínum síðum Ísland.is"
        />
      </Box>
      <Buttons onBackward={onBackward} onForward={onForward}></Buttons>
    </Box>
  )
}

export default withApollo(StepTwo);
