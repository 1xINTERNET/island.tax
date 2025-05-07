import {Bullet, BulletList, LinkV2, Text} from '@island.is/island-ui/core'
import Link from 'next/link'
import localization from './Error404.json'
import {CustomError} from "@island.is/tax/components/Error";
import Layout from "@island.is/tax/layouts/main";

export const Error404 = () => {
  const loc = localization.Error404
  return (
    <CustomError statusCode={404} title={loc.title}>
      <Text as="h2" variant="h5" paddingBottom={3}>
        {loc.notFoundText}
      </Text>
      <div>
        <Text>{`${loc.text}:`}</Text>
        <BulletList>
          <Bullet>{loc.bulletOne}</Bullet>
          <Bullet>{loc.bulletTwo}</Bullet>
          <Bullet>{loc.bulletThree}</Bullet>
          <Bullet>{loc.bulletFour}</Bullet>
        </BulletList>{' '}
        <Text>
          {loc.textAfterBullets}
          <Link href="https://island.is/samradsgatt" legacyBehavior>
            {loc.linkText}
          </Link>
          <br/>
          {loc.textAfterBreak}
          <LinkV2 href="mailto:samradsgatt@stjornarradid.is">
            {loc.email}
          </LinkV2>
        </Text>
      </div>
    </CustomError>
  )
}
export default Error404
