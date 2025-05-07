import React from 'react'

import {
  Box,
  Button,
  Checkbox,
  FormStepperV2,
  Icon,
  Section,
  Text,
} from '@island.is/island-ui/core'
import FormStepsLayout from '@island.is/tax/screens/Layouts/FormStepsLayout'

export async function getServerSideProps() {
  const taxData = {
    country: 'test',
    vatRate: 10,
    description: 'test',
  }

  return {
    props: {
      taxInfo: taxData,
    },
  }
}

const Tax = ({ taxInfo }) => {
  return (
    <FormStepsLayout
      sidebarContent={
        <Box margin={3}>
          <FormStepperV2
            sections={[
              <Section
                isActive
                section={'Gagnaöflun'}
                sectionIndex={0}
                key={0}
              />,
              <Section section={'Umsækjandi'} sectionIndex={1} key={1} />,
              <Section section={'Tekjur'} sectionIndex={2} key={2} />,
              <Section section={'Eignir'} sectionIndex={3} key={3} />,
              <Section
                section={'Skuldir og vaxtagjöld'}
                sectionIndex={4}
                key={4}
              />,
              <Section section={'Yfirlit'} sectionIndex={5} key={5} />,
              <Section section={'Staðfesting'} sectionIndex={6} key={6} />,
            ]}
          />
        </Box>
      }
    >
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

        <Box display="flex" justifyContent="spaceBetween">
          <Button colorScheme="destructive" variant="ghost">
            Hætta við
          </Button>

          <Button
            colorScheme="default"
            iconType="filled"
            preTextIconType="filled"
            size="default"
            variant="primary"
            icon="arrowForward"
          >
            Halda áfram
          </Button>
        </Box>
      </Box>
    </FormStepsLayout>
  )
}

export default Tax
