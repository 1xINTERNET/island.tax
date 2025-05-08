import {
  Box,
  Checkbox,
  Divider,
  GridColumn,
  GridContainer,
  GridRow,
  Text,
} from '@island.is/island-ui/core'

import Buttons from '../Buttons'

type StepSixProps = {
  onForward: () => void
  onBackward: () => void
}

const StepSix = ({ onForward, onBackward }: StepSixProps) => {
  return (
    <Box
      background="white"
      borderRadius="large"
      padding={[3, 3, 10]}
      marginY={4}
    >
      <Text variant="h2" paddingBottom={2}>
        Yfirlit skattframtal
      </Text>
      <Text fontWeight="light" paddingTop={2}>
        Vinsamlegast farðu yfir gögnin hér að neðan til að staðfesta að réttar
        upplýsingar hafi verið gefnar upp.{' '}
      </Text>
      <Box paddingY={[4]}>
        <Divider />
      </Box>
      <Text variant="h3" paddingBottom={[2]}>
        Umsækjandi
      </Text>

      <Text>Jökull Þórðarson</Text>
      <Text>120389-4569</Text>
      <Text>Bláfjallagata 12, 105 Reykjavík</Text>
      <Text>+354 772-8391</Text>
      <Text>jokull.thordarson@email.is</Text>

      <Box paddingY={[4]}>
        <Divider />
      </Box>

      <Text variant="h3" paddingBottom={2}>
        Tekjur ársins 2024
      </Text>

      <Text variant="h4" paddingBottom={1}>
        Launatekjur og starfstengdar greiðslur
      </Text>
      <GridContainer>
        <GridRow>
          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'left'}>
              <Text fontWeight="light" paddingBottom={1}>
                {' '}
                Norðurljós Software ehf. :
              </Text>
            </Box>
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'right'}>
              <Text fontWeight="light" paddingBottom={1}>
                9.360.000 kr.
              </Text>
            </Box>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'left'}>
              <Text fontWeight="light" paddingBottom={1}>
                {' '}
                Mús & Merki ehf. :
              </Text>
            </Box>
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'right'}>
              <Text fontWeight="light" paddingBottom={1}>
                900.000 kr.
              </Text>
            </Box>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'left'}>
              <Text fontWeight="light" paddingBottom={1}>
                Samtals launagreiðslur :{' '}
              </Text>
            </Box>
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'right'}>
              <Text fontWeight="semiBold" paddingBottom={1}>
                10.260.000 kr.
              </Text>
            </Box>
          </GridColumn>
        </GridRow>
      </GridContainer>

      <Text variant="h4" paddingTop={3} paddingBottom={1}>
        Ökutækjastyrkur, dagpeningar og hlunnindi
      </Text>
      <GridContainer>
        <GridRow>
          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'left'}>
              <Text fontWeight="light" paddingBottom={1}>
                {' '}
                Dagpeningar :
              </Text>
            </Box>
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'right'}>
              <Text fontWeight="light" paddingBottom={1}>
                {' '}
                120.000 kr.
              </Text>
            </Box>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'left'}>
              <Text fontWeight="light" paddingBottom={1}>
                Samtals greiðslur :
              </Text>
            </Box>
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'right'}>
              <Text fontWeight="semiBold" paddingBottom={1}>
                {' '}
                120.000 kr.
              </Text>
            </Box>
          </GridColumn>
        </GridRow>
      </GridContainer>

      <Text variant="h4" paddingTop={3} paddingBottom={1}>
        Lífeyrisgreiðslur, greiðslur frá Tryggingastofnun, aðrar bótagreiðslur,
        styrkir o.fl.
      </Text>
      <GridContainer>
        <GridRow>
          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'left'}>
              <Text fontWeight="light" paddingBottom={1}>
                Norðurljós Software ehf., Íþróttastyrkur :
              </Text>
            </Box>
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'right'}>
              <Text fontWeight="light" paddingBottom={1}>
                75.000 kr.
              </Text>
            </Box>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'left'}>
              <Text fontWeight="light" paddingBottom={1}>
                VR, Starfsmenntastyrkur :
              </Text>
            </Box>
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'right'}>
              <Text fontWeight="light" paddingBottom={1}>
                900.000 kr.
              </Text>
            </Box>
          </GridColumn>
        </GridRow>

        <GridRow>
          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'left'}>
              <Text fontWeight="light" paddingBottom={1}>
                Samtals greiðslur :{' '}
              </Text>
            </Box>
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'right'}>
              <Text fontWeight="semiBold" paddingBottom={1}>
                {' '}
                975.000 kr.
              </Text>
            </Box>
          </GridColumn>
        </GridRow>
      </GridContainer>

      <Box paddingY={[4]}>
        <Divider />
      </Box>

      <Text variant="h3" paddingBottom={2}>
        Eignir ársins 2024
      </Text>

      <Text variant="h4" paddingBottom={1}>
        Innlendar fasteignir
      </Text>
      <GridContainer>
        <GridRow>
          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'left'}>
              <Text fontWeight="light"> 210-9876, Bláfjallagata 12 :</Text>
            </Box>
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'right'}>
              <Text fontWeight="light">52.000.000 kr.</Text>
            </Box>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'left'}>
              <Text fontWeight="light"> MSamtals fasteignir:</Text>
            </Box>
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'right'}>
              <Text fontWeight="semiBold">52.000.000 kr.</Text>
            </Box>
          </GridColumn>
        </GridRow>
      </GridContainer>

      <Text variant="h4" paddingTop={2} paddingBottom={1}>
        Bifreiðar og önnur farartæki
      </Text>
      <GridContainer>
        <GridRow>
          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'left'}>
              <Text fontWeight="light"> KB-521 / 2021 :</Text>
            </Box>
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'right'}>
              <Text fontWeight="light">3.100.000 kr..</Text>
            </Box>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'left'}>
              <Text fontWeight="light"> JU-329 / 2012 :</Text>
            </Box>
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'right'}>
              <Text fontWeight="light">430.000 kr.</Text>
            </Box>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'left'}>
              <Text fontWeight="light"> Samtals bifreiðar:</Text>
            </Box>
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'right'}>
              <Text fontWeight="semiBold">3.220.000 kr.</Text>
            </Box>
          </GridColumn>
        </GridRow>
      </GridContainer>

      <Box paddingY={[4]}>
        <Divider />
      </Box>

      <Text variant="h3" paddingBottom={2}>
        Skuldir og vaxtagjöld
      </Text>

      <Text variant="h4" paddingBottom={2}>
        Upplýsingar um eign: Bláfjallagata 12
      </Text>

      <GridContainer>
        <GridRow>
          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'left'}>
              <Text fontWeight="light">Lántökudagur :</Text>
            </Box>
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'right'}>
              <Text fontWeight="light">15.06.2021</Text>
            </Box>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'left'}>
              <Text fontWeight="light"> Lánstími í árum :</Text>
            </Box>
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'right'}>
              <Text fontWeight="light">30</Text>
            </Box>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'left'}>
              <Text fontWeight="light">Samtals vaxtagjöld :</Text>
            </Box>
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'right'}>
              <Text fontWeight="semiBold">920.000 kr.</Text>
            </Box>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'left'}>
              <Text fontWeight="light">Samtals eftirstöðvar :</Text>
            </Box>
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'right'}>
              <Text fontWeight="semiBold">28.540.000 kr.</Text>
            </Box>
          </GridColumn>
        </GridRow>
      </GridContainer>

      <Text variant="h4" paddingY={2}>
        Aðrar skuldir og vaxtagjöld
      </Text>
      <Text fontWeight="light">Kreditkort 4469 88XX XXXX 4567</Text>
      <GridContainer>
        <GridRow>
          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'left'}>
              <Text fontWeight="light">Vaxtagjöld :</Text>
            </Box>
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'right'}>
              <Text fontWeight="light">39.200 kr.</Text>
            </Box>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'left'}>
              <Text fontWeight="light">Eftirstöðvar :</Text>
            </Box>
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'right'}>
              <Text fontWeight="light">217.000 kr.</Text>
            </Box>
          </GridColumn>
        </GridRow>
        <Text fontWeight="light">Aukalán</Text>

        <GridRow>
          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'left'}>
              <Text fontWeight="light">Vaxtagjöld :</Text>
            </Box>
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'right'}>
              <Text fontWeight="light">86.000 kr.</Text>
            </Box>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'left'}>
              <Text fontWeight="light">Eftirstöðvar :</Text>
            </Box>
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'right'}>
              <Text fontWeight="light">980.000 kr.</Text>
            </Box>
          </GridColumn>
        </GridRow>
        <Text fontWeight="light">Varðan: 0142-26-732645</Text>
        <GridRow>
          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'left'}>
              <Text fontWeight="light">Vaxtagjöld :</Text>
            </Box>
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'right'}>
              <Text fontWeight="light">14.500 kr.</Text>
            </Box>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'left'}>
              <Text fontWeight="light">Eftirstöðvar :</Text>
            </Box>
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'right'}>
              <Text fontWeight="light">62.000 kr.</Text>
            </Box>
          </GridColumn>
        </GridRow>
        <Text fontWeight="light">Kílómetragjald, Skatturinn</Text>
        <GridRow>
          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'left'}>
              <Text fontWeight="light">Vaxtagjöld :</Text>
            </Box>
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'right'}>
              <Text fontWeight="light">0 kr.</Text>
            </Box>
          </GridColumn>
        </GridRow>

        <GridRow>
          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'left'}>
              <Text fontWeight="light">Eftirstöðvar :</Text>
            </Box>
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'right'}>
              <Text fontWeight="light">2.370 kr.</Text>
            </Box>
          </GridColumn>
        </GridRow>
        <Text fontWeight="light">Þing- og sveitarsjóðsgjöld, Skatturinn</Text>
        <GridRow>
          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'left'}>
              <Text fontWeight="light">Vaxtagjöld :</Text>
            </Box>
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'right'}>
              <Text fontWeight="light">224kr.</Text>
            </Box>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'left'}>
              <Text fontWeight="light">Eftirstöðvar :</Text>
            </Box>
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'right'}>
              <Text fontWeight="light">0kr.</Text>
            </Box>
          </GridColumn>
        </GridRow>

        <GridRow>
          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'left'}>
              <Text fontWeight="light">Samtals vaxtagjöld :</Text>
            </Box>
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'right'}>
              <Text fontWeight="semiBold">139.924 kr.</Text>
            </Box>
          </GridColumn>
        </GridRow>

        <GridRow>
          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'left'}>
              <Text fontWeight="light">Samtals eftirstöðvar :</Text>
            </Box>
          </GridColumn>

          <GridColumn span={['12/12', '12/12', '6/12']}>
            <Box textAlign={'right'}>
              <Text fontWeight="semiBold">1.261.370 kr.</Text>
            </Box>
          </GridColumn>
        </GridRow>

        <Box paddingY={[4]}>
          <Divider />
        </Box>
      </GridContainer>

      <Box>
        <Checkbox
          large
          subLabel="Hér með staðfestist að viðlögðum drengskap að skýrsla þessi um tekjur og eignir er gefin eftir bestu vitund. Áritaðar fjárhæðir hafa verið yfirfarnar og jafnframt leiðréttar, hafi það reynst nauðsynlegt. Mér er kunnugt um að ófullnægjandi eða röng upplýsingagjöf getur haft í för með sér álagsbeitingu eða refsingu."
        />
      </Box>
      <Buttons onBackward={onBackward} onForward={onForward} isLastStep></Buttons>
    </Box>
  )
}

export default StepSix
