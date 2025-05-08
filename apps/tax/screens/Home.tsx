import router from 'next/router'

import {
  Accordion,
  AccordionItem,
  ActionCard,
  Box,
  Breadcrumbs,
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
                activeItemTitle="Framtal og álagning"
                items={[
                  {
                    href: '#',
                    title: 'Almennt',
                  },
                  {
                    active: true,
                    href: '#',
                    title: 'Framtal og álagning',
                  },
                  {
                    href: '#',
                    title: 'Skattar og gjöld',
                  },
                  {
                    href: '#',
                    title: 'Tekjur og gjöld',
                  },
                  {
                    href: '#',
                    title: 'Fjármagnstekjjur',
                  },
                  {
                    href: '#',
                    title: 'Staðgreiðsla',
                  },
                  {
                    href: '#',
                    title: 'Reiknivélar',
                  },
                  {
                    href: '#',
                    title: 'Innheimta',
                  },
                ]}
                title="Efnisyfirlit"
                baseId={''}
              />
              <Navigation
                colorScheme="purple"
                items={[
                  {
                    href: '#',
                    title: 'Lagasafn Skattsins',
                  },
                  {
                    href: '#',
                    title: 'Barnabætur',
                  },
                  {
                    href: '#',
                    title: 'Leigutekjur',
                  },
                  {
                    href: '#',
                    title: 'Rafræn skilríki',
                  },
                ]}
                title="Tengt efni"
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
                title: 'Skatturinn',
                typename: '',
                href: '/',
              },
              {
                title: 'Framtal og álagning',
                typename: '',
                href: '/',
              },
            ]}
          ></Breadcrumbs>
          <Text as="h1" variant="h1" paddingTop={4}>
            Framtal og álagning
          </Text>

          <Box marginY={6}>
            <ActionCard
              backgroundColor="blue"
              cta={{
                label: 'Sækja um',
                variant: 'primary',
                onClick: () => router.push('login')
              }}
              heading="Skila skattframtali rafrænt"
              headingVariant="h3"
            />
          </Box>

          <Text as="h2" variant="h2" paddingBottom={2}>
            Almennar upplýsingar
          </Text>
          <Text paddingBottom={2}>
          Hægt er að skila skattframtali, ásamt öllum fylgiskjölum, á vefnum. Gildir það bæði um
          launamenn og einstaklinga með eigin atvinnurekstur.
          Afrit af skattframtali er að jafnaði tilbúið á þjónustusíðu tveimur dögum eftir skil.
          </Text>

          <Box marginY={4}>
            <Text as="h3" variant="h3" paddingBottom={6}>
              Spurt og svarað um Framtal og álagningu
            </Text>
            <Accordion singleExpand>
              <AccordionItem id="id_1" label="Skilafrestur">
                <Text>
                  Skilafrestur skattframtals 2025 vegna tekjuársins 2024 er til <strong>föstudagsins 14. mars 2025</strong>
                </Text>
              </AccordionItem>
              <AccordionItem
                id="id_2"
                label="Álagningarseðill og forsendur"
              >
                <Text>
                  Hægt er að senda umsóknir og önnur gögn með pósti, tölvupósti
                  eða faxi. Læknisvottorð verða að berast með pósti þar sem við
                  þurfum frumritið.
                </Text>
              </AccordionItem>
              <AccordionItem
                id="id_3"
                label="Framtalsleiðbeiningar"
              >
                <Text>
                  Hægt er að senda umsóknir og önnur gögn með pósti, tölvupósti
                  eða faxi. Læknisvottorð verða að berast með pósti þar sem við
                  þurfum frumritið.
                </Text>
              </AccordionItem>
              <AccordionItem
                id="id_4"
                label="Að lesa út úr álagningunni"
              >
                <Text>
                  Hægt er að senda umsóknir og önnur gögn með pósti, tölvupósti
                  eða faxi. Læknisvottorð verða að berast með pósti þar sem við
                  þurfum frumritið.
                </Text>
              </AccordionItem>
              <AccordionItem
                id="id_5"
                label="Rafræn skilríki og veflyklar"
              >
                <Text>
                  Hægt er að senda umsóknir og önnur gögn með pósti, tölvupósti
                  eða faxi. Læknisvottorð verða að berast með pósti þar sem við
                  þurfum frumritið.
                </Text>
              </AccordionItem>
            </Accordion>
          </Box>

          <Box marginTop={6} display="flex" justifyContent="flexEnd">
            <Button
              colorScheme="default"
              icon="add"
              iconType="filled"
              preTextIconType="filled"
              size="small"
              variant="utility"
            >
              Opna allt
            </Button>
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
