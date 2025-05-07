import React, { useState } from 'react'

import { Box, Button, Divider, FormStepperV2, Section } from '@island.is/island-ui/core'
import FormStepsLayout from '@island.is/tax/screens/Layouts/FormStepsLayout'

import StepOne from './steps/StepOne'
import StepTwo from './steps/StepTwo'

const steps = [
  { title: 'Gagnaöflun', index: 0 },
  { title: 'Umsækjandi', index: 1 },
  { title: 'Tekjur', index: 2 },
  { title: 'Eignir', index: 3 },
  { title: 'Skuldir og vaxtagjöld', index: 4 },
  { title: 'Yfirlit', index: 5 },
  { title: 'Staðfesting', index: 6 },
]

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

const renderStep = (step: number) => {
  switch (step) {
    case 0:
      return <StepOne></StepOne>
    case 1:
      return <StepTwo></StepTwo>
    case 2:
      return <div>Step3</div>
    case 3:
      return <div>Step4</div>
    case 4:
      return <div>Step5</div>
    case 5:
      return <div>Step6</div>
    case 6:
      return <div>Step7</div>
    default:
      break
  }
}

const Tax = ({ taxInfo }) => {
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <FormStepsLayout
      sidebarContent={
        <Box margin={3}>
          <FormStepperV2
            sections={steps.map((step) => (
              <Section
                key={`step-${step.index}`}
                isActive={step.index === currentStep}
                section={step.title}
                sectionIndex={step.index}
              />
            ))}
          />
        </Box>
      }
    >
      <Box>
        {renderStep(currentStep)}
        <Box display="flex" justifyContent="spaceBetween">
          <Button
            colorScheme="destructive"
            variant="ghost"
            onClick={() => {
              if (currentStep > 0) {
                const newStep = currentStep - 1
                setCurrentStep(newStep)
              }
            }}
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
            onClick={() => {
              if (currentStep < 6) {
                const newStep = currentStep + 1
                setCurrentStep(newStep)
              }
            }}
          >
            Halda áfram
          </Button>
        </Box>
      </Box>
    </FormStepsLayout>
  )
}

export default Tax
