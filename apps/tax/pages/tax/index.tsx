import React, { useState } from 'react'

import { Box, FormStepperV2, Section } from '@island.is/island-ui/core'
import FormStepsLayout from '@island.is/tax/screens/Layouts/FormStepsLayout'
import StepFive from '@island.is/tax/screens/Tax/steps/StepFive'
import StepFour from '@island.is/tax/screens/Tax/steps/StepFour'
import StepOne from '@island.is/tax/screens/Tax/steps/StepOne'
import StepThree from '@island.is/tax/screens/Tax/steps/StepThree'
import StepTwo from '@island.is/tax/screens/Tax/steps/StepTwo'

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

const Tax = ({ taxInfo }) => {
  const [currentStep, setCurrentStep] = useState(0)

  const renderStep = (step: number) => {
    switch (step) {
      case 0:
        return <StepOne onForward={onForward} onBackward={onBackward}></StepOne>
      case 1:
        return <StepTwo onForward={onForward} onBackward={onBackward}></StepTwo>
      case 2:
        return <StepThree onForward={onForward} onBackward={onBackward}></StepThree>
      case 3:
        return <StepFour onForward={onForward} onBackward={onBackward}></StepFour>
      case 4:
        return <StepFive onForward={onForward} onBackward={onBackward}></StepFive>
      case 5:
        return <div>Step6</div>
      case 6:
        return <div>Step7</div>
      default:
        break
    }
  }

  const onForward = () => {
    if (currentStep < 6) {
      const newStep = currentStep + 1
      setCurrentStep(newStep)
    }
  }

  const onBackward = () => {
    if (currentStep > 0) {
      const newStep = currentStep - 1
      setCurrentStep(newStep)
    }
  }

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
      {renderStep(currentStep)}
    </FormStepsLayout>
  )
}

export default Tax
