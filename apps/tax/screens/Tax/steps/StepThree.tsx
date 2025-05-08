import { useForm } from 'react-hook-form'

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
import { InputController } from '@island.is/shared/form-fields'
import { REQUIRED_ERROR_MESSAGE } from '@island.is/tax/constants'

import Buttons from '../Buttons'

type StepThreeProps = {
  onForward: () => void
  onBackward: () => void
}

interface InputState {
  employerName: string
  salary: number
}

const StepThree = ({ onForward, onBackward }: StepThreeProps) => {
  const { control, handleSubmit, formState } = useForm<InputState>()

  const onSubmit = (inputState: InputState) => {
    onForward()
    console.log(inputState)
  }

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
            <Text fontWeight="semiBold" paddingBottom={2}>
              Nafn launagreiðanda
            </Text>
            <InputController
              id="employerName"
              control={control}
              backgroundColor="blue"
              maxLength={20}
              required={true}
              name="employerName"
              placeholder="Norðurljós Software ehf"
              rows={0}
              size="xs"
              type="text"
              error={formState.errors['employerName']?.message}
              rules={{
                required: {
                  value: true,
                  message: REQUIRED_ERROR_MESSAGE,
                },
              }}
            />
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '5/12']}>
            <Text fontWeight="semiBold" paddingBottom={2}>
              Laun
            </Text>
            <Box display="flex" alignItems="center">
              <InputController
                id="salary"
                control={control}
                backgroundColor="blue"
                maxLength={20}
                required={true}
                name="salary"
                placeholder="9.360.000 kr."
                rows={0}
                size="xs"
                type="number"
                error={formState.errors['salary']?.message}
                rules={{
                  required: {
                    value: true,
                    message: REQUIRED_ERROR_MESSAGE,
                  },
                }}
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
      <Buttons onBackward={onBackward} onForward={handleSubmit(onSubmit)}></Buttons>
    </Box>
  )
}

export default StepThree
