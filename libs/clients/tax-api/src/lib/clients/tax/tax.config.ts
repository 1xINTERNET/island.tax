import { defineConfig } from '@island.is/nest/config'
import * as z from 'zod'

const schema = z.object({
  xroadPath: z.string(),
  scope: z.array(z.string()),
})


/**
 * @todo configure The TaxClientConfig
 */
export const TaxClientConfig = defineConfig<
  z.infer<typeof schema>
>({
  name: 'TaxClientConfig',
  schema,
  load(env) {
    return {
      xroadPath: env.required(
        'XROAD_TAX_PATH',
        'IS-DEV/GOV/10015/EmbaettiLandlaeknis-Protected/tax-v1',
      ),
      scope: ['@landlaeknir.is/tax'],
    }
  },
})
