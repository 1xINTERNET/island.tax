import { Text } from '@island.is/island-ui/core'
import localization from './Error500.json'
import {CustomError} from "@island.is/tax/components/Error";

export const Error500 = () => {
  const loc = localization.Error500
  return (
      <CustomError statusCode={500} title={loc.title}>
        <Text>{loc.text}</Text>
      </CustomError>
  )
}
export default Error500
