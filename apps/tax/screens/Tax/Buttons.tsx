import { Box, Button } from '@island.is/island-ui/core'

type ButtonProps = {
  onForward: () => void
  onBackward: () => void,
  isLastStep?: boolean,
}

const Buttons = ({ onForward, onBackward, isLastStep }: ButtonProps) => {
  return (
    <Box display="flex" justifyContent="spaceBetween" marginTop={10}>
      <Button
        colorScheme="destructive"
        variant="ghost"
        onClick={() => onBackward()}
      >
        Hætta við
      </Button>
      <Button
        colorScheme="default"
        iconType="filled"
        preTextIconType="filled"
        size="default"
        variant="primary"
        icon="arrowForward"
        onClick={() => onForward()}
      >
        {isLastStep ? 'Senda inn' : 'Halda áfram'}
      </Button>
    </Box>
  )
}

export default Buttons
