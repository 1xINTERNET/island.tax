import React, { FC, ReactNode } from 'react'

import {
  Box,
  GridColumn,
  GridContainer,
  GridRow,
} from '@island.is/island-ui/core'

interface FormStepsLayoutProps {
  sidebarContent: ReactNode
}

export const FormStepsLayout: FC<
  React.PropsWithChildren<FormStepsLayoutProps>
> = ({ sidebarContent, children }) => {
  return (
    <Box background="purple100">
      <GridContainer>
        <GridRow>
          <GridColumn span={['12/12', '12/12', '9/12']}>
            {children}
          </GridColumn>
          <GridColumn span={['12/12', '12/12', '3/12']}>
            {sidebarContent}
          </GridColumn>
        </GridRow>
      </GridContainer>
    </Box>
  )
}

export default FormStepsLayout
