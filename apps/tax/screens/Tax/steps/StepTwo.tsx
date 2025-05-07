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

import Buttons from '../Buttons'

type StepTwoProps = {
  onForward: () => void
  onBackward: () => void
}

const StepTwo = ({ onForward, onBackward }: StepTwoProps) => {
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
              placeholder="Jökull Þórðarson"
              size="sm"
              type="text"
            />
          </GridColumn>
        </GridRow>

        <GridRow>
          <GridColumn span={['12/12', '12/12', '6/12']} className={fieldWrapper}>
            <Input
              backgroundColor="white"
              label="Kennitala"
              name=""
              placeholder="120389-4569"
              size="sm"
              type="number"
            />
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']} className={fieldWrapper}>
            <Input
              backgroundColor="white"
              label="Heimili"
              name=""
              placeholder="Bláfjallagata 12"
              size="sm"
              type="text"
            />
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn span={['12/12', '12/12', '6/12']} className={fieldWrapper}>
            <Input
              backgroundColor="white"
              label="Póstnúmer"
              name=""
              placeholder="105"
              size="sm"
              type="number"
            />
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']} className={fieldWrapper}>
            <Input
              backgroundColor="white"
              label="Sveitarfélag"
              name=""
              placeholder="Reykjavík"
              size="sm"
              type="text"
            />
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn span={['12/12', '12/12', '6/12']} className={fieldWrapper}>
            <Input
              backgroundColor="white"
              label="Netfang "
              name=""
              placeholder="jokull.thordarson@email.is"
              size="sm"
              type="email"
            />
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']} className={fieldWrapper}>
            <Input
              backgroundColor="white"
              label="Símanúmer"
              name=""
              placeholder="+354 772-8391"
              size="sm"
              type="tel"
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

export default StepTwo
