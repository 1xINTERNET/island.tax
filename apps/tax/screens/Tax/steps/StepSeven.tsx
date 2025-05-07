import {
  AlertMessage,
  Box,
  Button,
  Text,
} from '@island.is/island-ui/core'

import Buttons from '../Buttons'

type StepSevenProps = {
  onForward: () => void
  onBackward: () => void
}

const StepSeven = ({ onForward, onBackward }: StepSevenProps) => {
  return (
    <Box
      background="white"
      borderRadius="large"
      padding={[3, 3, 10]}
      marginY={4}
    >
      <Text variant="h2" paddingBottom={4}>
        Staðfesting
      </Text>
      <Box paddingBottom={4}>
        <AlertMessage title="Þú hefur skilað inn framtali" type="success" />
      </Box>
      <Text variant="h3" paddingBottom={2}>
        Þú getur nálgast álagningarseðil á mínum síðum
      </Text>
      <Text fontWeight="light" paddingBottom={2}>
        Þú getur einnig sótt stafrænt afrit af framtali, fylgiskjölum og
        álagningarseðli á mínum síðum. Þar má finna rafrænt afrit af
        skattaframtölum fyrir gjaldárin 2006 og síðar. Ef þú skilaðir ekki
        framtali er einungis álagningarseðill birtur.
      </Text>
      <Buttons onBackward={onBackward} onForward={onForward}></Buttons>
    </Box>
  )
}

export default StepSeven
