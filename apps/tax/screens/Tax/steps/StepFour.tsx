import { useForm } from 'react-hook-form'

import {
  Box,
  Button,
  GridColumn,
  GridContainer,
  GridRow,
  Text,
} from '@island.is/island-ui/core'
import { InputController } from '@island.is/shared/form-fields'
import { REQUIRED_ERROR_MESSAGE } from '@island.is/tax/constants'

import Buttons from '../Buttons'

type StepFourProps = {
  onForward: () => void
  onBackward: () => void
}

interface InputState {
  assetNumber: string
  propertyLocation: string
  propertyValue: string
}

const StepFour = ({ onForward, onBackward }: StepFourProps) => {
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
          <GridColumn span={['12/12', '12/12', '4/12']} paddingBottom={[3]}>
            <InputController
              id="assetNumber"
              backgroundColor="blue"
              maxLength={20}
              control={control}
              required={true}
              name="assetNumber"
              placeholder="Norðurljós Software ehf"
              rows={0}
              size="xs"
              type="text"
              error={formState.errors['assetNumber']?.message}
              rules={{
                required: {
                  value: true,
                  message: REQUIRED_ERROR_MESSAGE,
                },
              }}
            />
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '4/12']} paddingBottom={[3]}>
            <InputController
              id="propertyLocation"
              backgroundColor="blue"
              maxLength={20}
              control={control}
              required={true}
              name="propertyLocation"
              placeholder="Norðurljós Software ehf"
              rows={0}
              size="xs"
              type="text"
              error={formState.errors['assetNumber']?.message}
              rules={{
                required: {
                  value: true,
                  message: REQUIRED_ERROR_MESSAGE,
                },
              }}
            />
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '4/12']}>
            <Box display="flex" alignItems="center">
              <InputController
                id="propertyValue"
                control={control}
                required={true}
                backgroundColor="blue"
                maxLength={20}
                name="propertyValue"
                placeholder="9.360.000 kr."
                rows={0}
                size="xs"
                type="number"
                error={formState.errors['assetNumber']?.message}
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
      <Buttons
        onBackward={onBackward}
        onForward={handleSubmit(onSubmit)}
      ></Buttons>
    </Box>
  )
}

export default StepFour
