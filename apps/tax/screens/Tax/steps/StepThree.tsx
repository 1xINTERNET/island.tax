import { useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation,useQuery } from '@apollo/client'

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

import {GetUserQuery} from '../../../graphql/schema'
import { withApollo } from "../../../graphql/withApollo";
import { CREATE_INCOME_MUTATION, GET_USER_QUERY, UPDATE_INCOME_MUTATION } from '../../queries'
import Buttons from '../Buttons'

type StepThreeProps = {
  onForward: () => void
  onBackward: () => void
}

interface InputState {
  employerName: string
  salary: number
}

const formatter = new Intl.NumberFormat('is-IS', {
  style: 'decimal',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});

const StepThree = ({ onForward, onBackward }: StepThreeProps) => {
  const { control, handleSubmit, formState, setValue, watch } = useForm<InputState>();
  const [createIncome] = useMutation(CREATE_INCOME_MUTATION);
  const [updateIncome] = useMutation(UPDATE_INCOME_MUTATION);
  const { data } = useQuery<GetUserQuery>(GET_USER_QUERY, {
    variables: {
      // Getting user id from local storage demo purpose
      id: Number(localStorage.getItem('session_token')),
    },
  });

  const incomeData = useMemo(() => data?.user.taxReturns?.[0]?.incomes?.[0], [data?.user.taxReturns]);

  useEffect(() => {
    if (incomeData) {
      setValue('employerName', incomeData.source)
      setValue('salary', incomeData.amount)
    }
  }, [incomeData, data?.user.taxReturns, setValue]);

  const salary = watch('salary');

  const onSubmit = async (inputState: InputState) => {
    if (incomeData) {
      await updateIncome({ variables: { income: {id: Number(incomeData.id), source: inputState.employerName, amount: Number(inputState.salary), type: 'salary' }}});
      onForward();
    } else {
      await createIncome({ variables: { income: {taxReturnId: data?.user.taxReturns?.[0].id, source: inputState.employerName, amount: Number(inputState.salary), type: 'salary' }}});
      onForward();
    }
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
              maxLength={200}
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

      <Box paddingY={4}>
        <Divider />
      </Box>
      <GridContainer>
        <GridRow>
          <GridColumn span="5/12" offset="7/12">
            <Input
              backgroundColor="white"
              maxLength={4}
              name="Input"
              value={formatter.format(salary ?? 0) + ' kr.'}
              rows={0}
              size="xs"
              type="text"
            />
          </GridColumn>
        </GridRow>
      </GridContainer>
      <Buttons onBackward={onBackward} onForward={handleSubmit(onSubmit)}></Buttons>
    </Box>
  )
}

export default withApollo(StepThree)
