import { Box, Button } from '@island.is/island-ui/core'

type ButtonProps = {
  onForward: () => void
  onBackward: () => void
}

const Buttons = ({ onForward, onBackward }: ButtonProps) => {
  return (
    <Box display="flex" justifyContent="spaceBetween" marginTop={6}>
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
        Halda áfram
      </Button>
    </Box>
  )
}

export default Buttons
