import router from 'next/router'

import {
  Accordion,
  AccordionItem,
  ActionCard,
  Box,
  Breadcrumbs,
  Bullet,
  BulletList,
  Button,
  Footer,
  Link,
  Navigation,
  Page,
  Stack,
  Text,
} from '@island.is/island-ui/core'
import SidebarLayout from '@island.is/tax/screens/Layouts/SidebarLayout'

const Home = () => {
  return (
    <div>
      <Page>
        <SidebarLayout
          sidebarContent={
            <Stack space={3}>
              <Link href="#" skipTab>
                <Button
                  as="span"
                  preTextIcon="arrowBack"
                  preTextIconType="filled"
                  size="small"
                  type="button"
                  variant="text"
                  truncate
                >
                  Til baka
                </Button>
              </Link>
              <Navigation
                activeItemTitle="Hér er virk undirsíða"
                items={[
                  {
                    accordion: true,
                    href: '#',
                    items: [
                      {
                        href: '#',
                        title: 'Fjölskylda og velferð',
                      },
                      {
                        active: true,
                        href: '#',
                        title: 'Eldri borgarar',
                      },
                      {
                        href: '#',
                        title: 'Bætur',
                      },
                      {
                        href: '#',
                        title: 'Málefni fatlaðra',
                      },
                      {
                        href: '#',
                        title: 'Menntun',
                      },
                      {
                        href: '#',
                        title: 'Vegabréf, ferðalög og búseta erlendis',
                      },
                      {
                        href: '#',
                        title: 'Innflytjendur',
                      },
                      {
                        href: '#',
                        title: 'Umhverfismál',
                      },
                      {
                        href: '#',
                        title: 'Húsnæðismál',
                      },
                      {
                        href: '#',
                        title: 'Samfélag og réttindi',
                      },
                      {
                        href: '#',
                        title: 'Dómstólar og réttarfar',
                      },
                      {
                        href: '#',
                        title: 'Fjármál og skattar',
                      },
                    ],
                    title: 'Tengill sem opnast með takka',
                  },
                ]}
                title="Titill á yfirsíðu"
                baseId={''}
              />
              <Navigation
                activeItemTitle="Eldri borgarar"
                colorScheme="purple"
                items={[
                  {
                    href: '#',
                    title: 'Fjölskylda og velferð',
                  },
                  {
                    active: true,
                    href: '#',
                    title: 'Eldri borgarar',
                  },
                  {
                    href: '#',
                    title: 'Bætur',
                  },
                  {
                    href: '#',
                    title: 'Málefni fatlaðra',
                  },
                  {
                    href: '#',
                    title: 'Menntun',
                  },
                  {
                    href: '#',
                    title: 'Vegabréf, ferðalög og búseta erlendis',
                  },
                  {
                    href: '#',
                    title: 'Innflytjendur',
                  },
                  {
                    href: '#',
                    title: 'Umhverfismál',
                  },
                  {
                    href: '#',
                    title: 'Húsnæðismál',
                  },
                  {
                    href: '#',
                    title: 'Samfélag og réttindi',
                  },
                  {
                    href: '#',
                    title: 'Dómstólar og réttarfar',
                  },
                  {
                    href: '#',
                    title: 'Fjármál og skattar',
                  },
                ]}
                title="Titill á yfirflokk"
                baseId={''}
              />
            </Stack>
          }
        >
          <Breadcrumbs
            items={[
              {
                title: 'Ísland.is',
                typename: '',
                href: '/',
              },
              {
                title: 'Fjölskyldumál',
                typename: '',
                href: '/',
              },
            ]}
          ></Breadcrumbs>
          <Text as="h1" variant="h1" paddingY={2}>
            Skil á framtali
          </Text>

          <Box marginY={6}>
            <ActionCard
              backgroundColor="blue"
              cta={{
                label: 'Sækja um',
                variant: 'primary',
                onClick: () => router.push('login')
              }}
              heading="Umsókn um atvinnuleysisbætur"
              headingVariant="h3"
            />
          </Box>

          <Text as="h2" variant="h2" paddingBottom={2}>
            Almennar upplýsingar
          </Text>
          <Text paddingBottom={2}>
            Foreldrar geta átt rétt á fæðingarorlofi þegar barn þeirra fæðist,
            er frumættleitt eða tekið í varanlegt fóstur. Hvort foreldri á rétt
            á 6 mánuðum í fæðingarorlof og heildarréttur tveggja foreldra er því
            12 mánuðir. Skilyrði er að hafa unnið á Íslandi samfellt síðustu 6
            mánuðina fyrir fæðingardag barns, í að minnsta kosti 25%
            starfshlutfalli í hverjum mánuði.
          </Text>

          <Box marginY={6}>
            <Text as="h2" variant="h2" paddingBottom={2}>
            Að sækja um
            </Text>
            <Accordion singleExpand>
              <AccordionItem id="id_1" label="Hvenær þarf að skila umsókn?">
                <Text>
                  Er hægt að leggja inn greiðslur á bankareikning maka?
                </Text>
              </AccordionItem>
              <AccordionItem
                id="id_2"
                label="Er hægt að leggja inn greiðslur á bankareikning maka?"
              >
                <Text>
                  Hægt er að senda umsóknir og önnur gögn með pósti, tölvupósti
                  eða faxi. Læknisvottorð verða að berast með pósti þar sem við
                  þurfum frumritið.
                </Text>
              </AccordionItem>
              <AccordionItem
                id="id_3"
                label="Hvernig kem ég umsókninni til ykkar?"
              >
                <Text>
                  Hægt er að senda umsóknir og önnur gögn með pósti, tölvupósti
                  eða faxi. Læknisvottorð verða að berast með pósti þar sem við
                  þurfum frumritið.
                </Text>
              </AccordionItem>
            </Accordion>
          </Box>

          <Box marginTop={6}>
            <Text as="h3" variant="h3" paddingBottom={2}>
              Fyrirsögn H3
            </Text>
            <BulletList type="ul">
              <Bullet>
                First bullet Réttur til fæðingarorlofs vegna fæðingar fellur
                niður er barnið 24 mánaða aldri.
              </Bullet>
              <Bullet>
                Réttur til fæðingarorlofs vegna ættleiðingar eða varanlegs
                fóstur fellur niður 24 mánuðum eftir að barnið kom inn á
                heimilið.
              </Bullet>
              <Bullet>
                {' '}
                Réttur foreldris til fæðingarorlofs er bundinn því að það fari
                sjálft með forsjá barnsins eða hafi sameiginlega forsjá ásamt
                hinu foreldri þess þegar taka fæðingarorlofs hefst.
              </Bullet>
            </BulletList>
          </Box>

          <Box marginTop={6}>
            <Text as="h3" variant="h3" paddingBottom={2}>
              Fyrirsögn H4
            </Text>
            <BulletList type="ol">
              <Bullet>
                First bullet Réttur til fæðingarorlofs vegna fæðingar fellur
                niður er barnið 24 mánaða aldri.
              </Bullet>
              <Bullet>
                Réttur til fæðingarorlofs vegna ættleiðingar eða varanlegs
                fóstur fellur niður 24 mánuðum eftir að barnið kom inn á
                heimilið.
              </Bullet>
              <Bullet>
                {' '}
                Réttur foreldris til fæðingarorlofs er bundinn því að það fari
                sjálft með forsjá barnsins eða hafi sameiginlega forsjá ásamt
                hinu foreldri þess þegar taka fæðingarorlofs hefst.
              </Bullet>
            </BulletList>
          </Box>
        </SidebarLayout>
        <Footer />
      </Page>
    </div>
  )
}

Home.getInitialProps = async () => {
  return {}
}

export default Home
