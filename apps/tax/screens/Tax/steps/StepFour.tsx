import {
  Box,
  Button,
  GridColumn,
  GridContainer,
  GridRow,
  Input,
  Text,
} from '@island.is/island-ui/core'

import Buttons from '../Buttons'

type StepFourProps = {
  onForward: () => void
  onBackward: () => void
}

const StepFour = ({ onForward, onBackward }: StepFourProps) => {
  return (
    <Box
      background="white"
      borderRadius="large"
      padding={[3, 3, 10]}
      marginY={4}
    >
      <Text variant="h2" paddingBottom={4}>
        Innlendar fasteignir
      </Text>

      <GridContainer>
        <GridRow>
          <GridColumn span={['12/12', '12/12', '4/12']} paddingBottom={[3]}>
            <Text fontWeight="semiBold">Fastanúmer eignar</Text>
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '4/12']} paddingBottom={[3]}>
            <Text fontWeight="semiBold">Staðsetning eignar</Text>
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '4/12']}>
            <Text fontWeight="semiBold">Fasteignamat 2024</Text>
          </GridColumn>
        </GridRow>

        <GridRow>
          <GridColumn span={['12/12', '12/12', '12/12', '4/12']} paddingBottom={[3]}>
            <Input
              backgroundColor="blue"
              maxLength={4}
              name="Input"
              placeholder="Norðurljós Software ehf"
              rows={0}
              size="xs"
              type="text"
            />
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '12/12', '4/12']} paddingBottom={[3]}>
            <Input
              backgroundColor="blue"
              maxLength={4}
              name="Input"
              placeholder="Norðurljós Software ehf"
              rows={0}
              size="xs"
              type="text"
            />
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '12/12', '4/12']}>
            <Box display={['block', 'block', 'block', 'flex']} alignItems="center">
              <Box width='full'>
                <Input
                  backgroundColor="blue"
                  maxLength={4}
                  name="Input"
                  placeholder="9.360.000 kr."
                  rows={0}
                  size="xs"
                  type="number"
                />
              </Box>
              <Box paddingLeft={[0, 0, 0, 2]} paddingTop={[2, 2, 2, 0]} display={['flex']} justifyContent={"flexEnd"}>
                <Button circle icon="remove" variant="ghost" size="small" />
              </Box>
            </Box>
          </GridColumn>
        </GridRow>
      </GridContainer>
      <Box paddingY={1}>
        <Button
          colorScheme="default"
          iconType="filled"
          icon="add"
          preTextIconType="filled"
          size="default"
          variant="text"
        >
          Bæta við línu
        </Button>
      </Box>
      <Buttons onBackward={onBackward} onForward={onForward}></Buttons>
    </Box>
  )
}

export default StepFour
