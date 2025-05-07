import {
  Box,
  Button,
  Divider,
  GridColumn,
  GridContainer,
  GridRow,
  Input,
  Text,
} from '@island.is/island-ui/core'

import Buttons from '../Buttons'

type StepThreeProps = {
  onForward: () => void
  onBackward: () => void
}

const StepThree = ({ onForward, onBackward }: StepThreeProps) => {
  return (
    <Box
      background="white"
      borderRadius="large"
      padding={[3, 3, 10]}
      marginY={4}
    >
      <Text variant="h2" paddingBottom={4}>
        Launatekjur og starfstengdar greiðslur
      </Text>

      <GridContainer>
        <GridRow>
          <GridColumn span={['12/12', '12/12', '7/12']} paddingBottom={[3]}>
            <Text fontWeight="semiBold" paddingBottom={2}>Nafn launagreiðanda</Text>
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

          <GridColumn span={['12/12', '12/12', '5/12']}>
            <Text fontWeight="semiBold" paddingBottom={2}>Laun</Text>
            <Box display="flex" alignItems="center">
              <Input
                backgroundColor="blue"
                maxLength={4}
                name="Input"
                placeholder="9.360.000 kr."
                rows={0}
                size="xs"
                type="number"
              />
              <Box paddingLeft={2}>
                <Button circle icon="remove" variant="ghost" size="small" />
              </Box>
            </Box>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn span={['12/12', '12/12', '7/12']} paddingBottom={[3]}>
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

          <GridColumn span={['12/12', '12/12', '5/12']}>
            <Box display="flex" alignItems="center">
              <Input
                backgroundColor="blue"
                maxLength={4}
                name="Input"
                placeholder="9.360.000 kr."
                rows={0}
                size="xs"
                type="number"
              />
              <Box paddingLeft={2}>
                <Button circle icon="remove" variant="ghost" size="small" />
              </Box>
            </Box>
          </GridColumn>
        </GridRow>
      </GridContainer>

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

      <Box paddingY={2}>
        <Divider />
      </Box>
      <GridContainer>
        <GridRow>
          <GridColumn span="5/12" offset="7/12">
            <Input
              backgroundColor="white"
              maxLength={4}
              name="Input"
              placeholder="10.260.000 kr."
              rows={0}
              size="xs"
              type="number"
            />
          </GridColumn>
        </GridRow>
      </GridContainer>
      <Buttons onBackward={onBackward} onForward={onForward}></Buttons>
    </Box>
  )
}

export default StepThree
