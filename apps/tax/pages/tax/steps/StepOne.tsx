import { Box, Checkbox, Icon, Text } from '@island.is/island-ui/core'

const StepOne = () => {
  return (
    <Box
      background="white"
      borderRadius="large"
      padding={[3, 3, 10]}
      marginY={4}
    >
      <Text variant="h2" as="h2">
        Gagnaöflun
      </Text>
      <Box paddingY={4} display="flex" alignItems={['center']}>
        <Icon icon="fileTrayFull" type="outline" color="blue400" />
        <Box paddingLeft={2}>
          <Text variant="h4" as="h4">
            Eftirfarandi gögn verða sótt rafrænt
          </Text>
        </Box>
      </Box>
      <Text variant="h5" as="h5" color="blue400">
        Persónupplýsingar
      </Text>
      <Text fontWeight="light" color="dark400" paddingBottom={4}>
        Upplýsingar frá Þjóðskrá um nafn, kennitölu og lögheimili.
      </Text>
      <Text variant="h5" as="h5" color="blue400">
        Netfang og símanúmer
      </Text>
      <Text fontWeight="light" color="dark400" paddingBottom={4}>
        Upplýsingar frá Mínum síðum á Ísland.is um netfang og símanúmer.
      </Text>
      <Text variant="h5" as="h5" color="blue400">
        Upplýsingar frá Skattinum
      </Text>
      <Text fontWeight="light" color="dark400" paddingBottom={4}>
        Upplýsingar um ráðstöfun persónuafsláttar og greiðslur í lífeyrissjóð
        verður sótt til Skattsins.
      </Text>

      <Box paddingBottom={10}>
        <Checkbox
          large
          subLabel="Ég skil að ofangreind gögn verði sótt rafrænt."
        />
      </Box>
    </Box>
  )
}

export default StepOne
