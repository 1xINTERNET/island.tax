import { useForm } from 'react-hook-form'

import {
  AlertMessage,
  Box,
  DatePicker,
  GridColumn,
  GridContainer,
  GridRow,
  Text,
} from '@island.is/island-ui/core'
import { InputController } from '@island.is/shared/form-fields'
import { REQUIRED_ERROR_MESSAGE } from '@island.is/tax/constants'

import Buttons from '../Buttons'

type StepFiveProps = {
  onForward: () => void
  onBackward: () => void
}

interface InputState {
  residentialLocation: string
  loanNumber: string
  borrowingDate: Date
  loanTerm: number
  lenderId: string
  lenderName: string
  totalPaymentsYear: number
  nominalValue: number
  interest: number
  debt: number
}

const StepFive = ({ onForward, onBackward }: StepFiveProps) => {
  const { control, handleSubmit, formState } = useForm<InputState>()

  const onSubmit = (inputState: InputState) => {
    onForward()
  }
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
              <InputController
                id="residentialLocation"
                control={control}
                error={formState.errors['residentialLocation']?.message}
                rules={{
                  required: {
                    value: true,
                    message: REQUIRED_ERROR_MESSAGE,
                  },
                }}
                required={true}
                backgroundColor="white"
                label="Staðsetning íbúðarhúsnæðis"
                name="residentialLocation"
                placeholder="Bláfjallagata 12"
                size="sm"
                type="text"
              />
            </Box>
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box paddingBottom={[3]}>
              <InputController
                id="loanNumber"
                control={control}
                error={formState.errors['loanNumber']?.message}
                required={true}
                rules={{
                  required: {
                    value: true,
                    message: REQUIRED_ERROR_MESSAGE,
                  },
                }}
                backgroundColor="white"
                label="Lánsnúmer"
                name="loanNumber"
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
              <DatePicker
                id="borrowingDate"
                required={true}
                placeholderText="06/15/2021"
                backgroundColor="white"
                label="Lántökudagur"
                size="sm"
              />
            </Box>
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box paddingBottom={[3]}>
              <InputController
                id="loanTerm"
                control={control}
                error={formState.errors['loanTerm']?.message}
                required={true}
                rules={{
                  required: {
                    value: true,
                    message: REQUIRED_ERROR_MESSAGE,
                  },
                }}
                backgroundColor="white"
                label="Lánstími ár"
                name="loanTerm"
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
              <InputController
                id="lenderId"
                control={control}
                error={formState.errors['lenderId']?.message}
                required={true}
                rules={{
                  required: {
                    value: true,
                    message: REQUIRED_ERROR_MESSAGE,
                  },
                }}
                backgroundColor="white"
                label="Kennitala lánveitanda"
                name="lenderId"
                placeholder="000000-0000"
                size="sm"
                type="number"
              />
            </Box>
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box paddingBottom={[3]}>
              <InputController
                id="lenderName"
                control={control}
                error={formState.errors['lenderName']?.message}
                required={true}
                rules={{
                  required: {
                    value: true,
                    message: REQUIRED_ERROR_MESSAGE,
                  },
                }}
                backgroundColor="white"
                label="Lánveitandi"
                name="lenderName"
                placeholder="Íslandsbanki hf."
                size="sm"
                type="text"
              />
            </Box>
          </GridColumn>
          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box paddingBottom={[3]}>
              <InputController
                id="totalPaymentsYear"
                control={control}
                error={formState.errors['totalPaymentsYear']?.message}
                required={true}
                rules={{
                  required: {
                    value: true,
                    message: REQUIRED_ERROR_MESSAGE,
                  },
                }}
                backgroundColor="white"
                label="Heildargreiðslur ársins"
                name="totalPaymentsYear"
                placeholder="2.280.000 kr."
                size="sm"
                type="number"
              />
            </Box>
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box paddingBottom={[3]}>
              <InputController
                id="nominalValue"
                control={control}
                error={formState.errors['nominalValue']?.message}
                required={true}
                rules={{
                  required: {
                    value: true,
                    message: REQUIRED_ERROR_MESSAGE,
                  },
                }}
                backgroundColor="white"
                label="Afborgun á nafnverði"
                name="nominalValue"
                placeholder="1.360.000 kr."
                size="sm"
                type="number"
              />
            </Box>
          </GridColumn>
          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box paddingBottom={[3]}>
              <InputController
                id="interest"
                control={control}
                error={formState.errors['interest']?.message}
                required={true}
                rules={{
                  required: {
                    value: true,
                    message: REQUIRED_ERROR_MESSAGE,
                  },
                }}
                backgroundColor="white"
                label="Vaxtagjöld"
                name="interest"
                placeholder="920.000 kr."
                size="sm"
                type="number"
              />
            </Box>
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box paddingBottom={[3]}>
              <InputController
                id="debt"
                control={control}
                error={formState.errors['debt']?.message}
                required={true}
                rules={{
                  required: {
                    value: true,
                    message: REQUIRED_ERROR_MESSAGE,
                  },
                }}
                backgroundColor="white"
                label="Eftirstöðvar skulda"
                name="debt"
                placeholder="28.540.000 kr."
                size="sm"
                type="number"
              />
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

export default StepFive
