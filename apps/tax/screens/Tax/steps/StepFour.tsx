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
import { CREATE_ASSET_MUTATION, GET_USER_QUERY, UPDATE_ASSET_MUTATION } from '../../queries'
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

const formatter = new Intl.NumberFormat('is-IS', {
  style: 'decimal',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});

const StepFour = ({ onForward, onBackward }: StepFourProps) => {
  const { control, handleSubmit, formState, setValue, watch } = useForm<InputState>();
  const [createAsset] = useMutation(CREATE_ASSET_MUTATION);
  const [updateAsset] = useMutation(UPDATE_ASSET_MUTATION);
  const { data } = useQuery<GetUserQuery>(GET_USER_QUERY, {
    variables: {
      // Getting user id from local storage demo purpose
      id: Number(localStorage.getItem('session_token')),
    },
  });

  const assetData = useMemo(() => data?.user.taxReturns?.[0]?.assets?.[0], [data?.user.taxReturns]);

  useEffect(() => {
    if (assetData) {
      setValue('assetNumber', assetData.assetId ?? '')
      setValue('propertyLocation', assetData.address ?? '')
      setValue('propertyValue', assetData.value? assetData.value.toString() : '')
    }
  }, [assetData, setValue]);

  const propertyValue = watch('propertyValue');

  const onSubmit = async (inputState: InputState) => {
    if (assetData) {
      await updateAsset({ variables: { asset: {id: Number(assetData.id), assetId: inputState.assetNumber, address: inputState.propertyLocation, value: Number(inputState.propertyValue) }}});
      onForward();
    } else {
      await createAsset({ variables: { asset: {taxReturnId: data?.user.taxReturns?.[0].id, assetId: inputState.assetNumber, address: inputState.propertyLocation, value: Number(inputState.propertyValue) }}});
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
              error={formState.errors['propertyLocation']?.message}
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
                error={formState.errors['propertyValue']?.message}
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
              value={formatter.format(propertyValue? Number(propertyValue):0) + ' kr.'}
              rows={0}
              size="xs"
              type="text"
            />
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

export default withApollo(StepFour)
