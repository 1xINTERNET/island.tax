import {
  AlertMessage,
  Box,
  GridColumn,
  GridContainer,
  GridRow,
  Input,
  Text,
} from '@island.is/island-ui/core'

import Buttons from '../Buttons'

type StepFiveProps = {
  onForward: () => void
  onBackward: () => void
}

const StepFive = ({ onForward, onBackward }: StepFiveProps) => {
  return (
    <Box
      background="white"
      borderRadius="large"
      padding={[3, 3, 10]}
      marginY={4}
    >
      <Text variant="h2" paddingBottom={2}>
        Vaxtagjöld vegna íbúðarhúsnæðis til eigin nota
      </Text>

      <Box paddingY={[4]}>
        <AlertMessage
          type="info"
          title="Lán vegna kaupa eða byggingar íbúðarhúsnæðis til eigin nota."
          message="Ef hluti láns er nýttur til annars en öflunar íbúðarhúsnæðis skal tilgreina hve hátt hlutfall fjárhæðar er til öflunar íbúðarhúsnæðis (reitur 1). Í reiti 5 til 8 skal færa heildarfjárhæðir (án hlutföllunar) en í dálka 9 og 10 skal aðeins færa þann hluta af vaxtagjöldum og eftirstöðvum sem tilheyra öflun íbúðarhúsnæðis."
        />
      </Box>

      <Text variant="h4" paddingBottom={2}>
        Upplýsingar um eign
      </Text>

      <GridContainer>
        <GridRow>
          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box paddingBottom={[3]}>
              <Input
                backgroundColor="white"
                label="Staðsetning íbúðarhúsnæðis"
                name=""
                placeholder="Bláfjallagata 12"
                size="sm"
                type="text"
              />
            </Box>
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box paddingBottom={[3]}>
              <Input
                backgroundColor="white"
                label="Lánsnúmer"
                name=""
                placeholder="56783900123"
                size="sm"
                type="number"
              />
            </Box>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box paddingBottom={[3]}>
              <Input
                backgroundColor="white"
                label="Lántökudagur"
                name=""
                placeholder="15.06.2021"
                size="sm"
                type="number"
              />
            </Box>
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box paddingBottom={[3]}>
              <Input
                backgroundColor="white"
                label="Lánstími ár"
                name=""
                placeholder="30"
                size="sm"
                type="number"
              />
            </Box>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box paddingBottom={[3]}>
              <Input
                backgroundColor="white"
                label="Kennitala lánveitanda"
                name=""
                placeholder="000000-0000"
                size="sm"
                type="number"
              />
            </Box>
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box paddingBottom={[3]}>
              <Input
                backgroundColor="white"
                label="Lánveitandi"
                name=""
                placeholder="Íslandsbanki hf."
                size="sm"
                type="text"
              />
            </Box>
          </GridColumn>
          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box paddingBottom={[3]}>
              <Input
                backgroundColor="white"
                label="Heildargreiðslur ársins"
                name=""
                placeholder="2.280.000 kr."
                size="sm"
                type="number"
              />
            </Box>
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box paddingBottom={[3]}>
              <Input
                backgroundColor="white"
                label="Afborgun á nafnverði"
                name=""
                placeholder="1.360.000 kr."
                size="sm"
                type="number"
              />
            </Box>
          </GridColumn>
          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box paddingBottom={[3]}>
              <Input
                backgroundColor="white"
                label="Vaxtagjöld"
                name=""
                placeholder="920.000 kr."
                size="sm"
                type="number"
              />
            </Box>
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box paddingBottom={[3]}>
              <Input
                backgroundColor="white"
                label="Eftirstöðvar skulda"
                name=""
                placeholder="28.540.000 kr."
                size="sm"
                type="number"
              />
            </Box>
          </GridColumn>
        </GridRow>
      </GridContainer>
      <Buttons onBackward={onBackward} onForward={onForward}></Buttons>
    </Box>
  )
}

export default StepFive
