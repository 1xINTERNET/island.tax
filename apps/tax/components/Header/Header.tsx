/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useContext } from 'react'

import {
  Box,
  ButtonTypes,
  ColorSchemeContext,
  Column,
  Columns,
  FocusableBox,
  GridColumn,
  GridContainer,
  GridRow,
  Hidden,
  Logo,
  ResponsiveSpace,
} from '@island.is/island-ui/core'
import { LayoutProps } from '@island.is/tax/layouts/main'

interface HeaderProps {
  showSearchInHeader?: boolean
  buttonColorScheme?: ButtonTypes['colorScheme']
  languageToggleQueryParams?: LayoutProps['languageToggleQueryParams']
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore make web strict
  megaMenuData
  organizationSearchFilter?: string
  searchPlaceholder?: string
  customTopLoginButtonItem?: LayoutProps['customTopLoginButtonItem']
  loginButtonType?: 'dropdown' | 'link'
}

const marginLeft = [1, 1, 1, 2] as ResponsiveSpace

export const Header: FC<React.PropsWithChildren<HeaderProps>> = ({
  showSearchInHeader = true,
  buttonColorScheme = 'default',
  customTopLoginButtonItem,
  loginButtonType = 'dropdown',
  children,
}) => {
  const { colorScheme } = useContext(ColorSchemeContext)
  const isWhite = colorScheme === 'white'

  return (
    <header>
      <Hidden print={true}>
        <GridContainer>
          <GridRow>
            <GridColumn span="12/12" paddingTop={4} paddingBottom={4}>
              <Columns alignY="center" space={2}>
                <Column width="content">
                  <FocusableBox
                    href={'/'}
                    data-testid="link-back-home"
                  >
                    <Hidden above="md">
                      <Logo
                        id="header-logo-icon"
                        width={40}
                        iconOnly
                        solid={isWhite}
                      />
                    </Hidden>
                    <Hidden below="lg">
                      <Logo id="header-logo" width={160} solid={isWhite} />
                    </Hidden>
                  </FocusableBox>
                </Column>
                <Column>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="flexEnd"
                    width="full"
                  >
                    {showSearchInHeader && (
                      <Box
                        role="search"
                        display={['none', 'none', 'none', 'block']}
                      >
                        SearchInput
                      </Box>
                    )}

                    <Box marginLeft={marginLeft}>
                      Login Button
                    </Box>

                    <Box
                      marginLeft={marginLeft}
                      display={['none', 'none', 'none', 'block']}
                    >
                      LanguageToggler
                    </Box>
                    <Box marginLeft={marginLeft}>
                      Menu
                    </Box>
                  </Box>
                </Column>
              </Columns>
            </GridColumn>
          </GridRow>
        </GridContainer>
      </Hidden>
      {children}
    </header>
  )
}

export default Header
