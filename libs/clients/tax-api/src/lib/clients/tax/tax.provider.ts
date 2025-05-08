import { createEnhancedFetch } from '@island.is/clients/middlewares'
import {
  ConfigType,
  IdsClientConfig,
  LazyDuringDevScope,
  XRoadConfig,
} from '@island.is/nest/config'
import { TaxClientConfig } from './tax.config'
import { Configuration, MeTaxApi } from './gen/fetch'

/**
 * @todo The TaxApiProvider needs to be configured
 */
export const TaxApiProvider = {
  provide: MeTaxApi,
  scope: LazyDuringDevScope,
  useFactory: (
    xRoadConfig: ConfigType<typeof XRoadConfig>,
    config: ConfigType<typeof TaxClientConfig>,
    idsClientConfig: ConfigType<typeof IdsClientConfig>,
  ) => {
    return new MeTaxApi(
      new Configuration({
        fetchApi: createEnhancedFetch({
          name: 'clients-tax',
          organizationSlug: 'landlaeknir',
          logErrorResponseBody: true,
          autoAuth: idsClientConfig.isConfigured
            ? {
                mode: 'tokenExchange',
                issuer: idsClientConfig.issuer,
                clientId: idsClientConfig.clientId,
                clientSecret: idsClientConfig.clientSecret,
                scope: config.scope,
              }
            : undefined,
        }),
        basePath: `${xRoadConfig.xRoadBasePath}/r1/${config.xroadPath}`,
        headers: {
          'X-Road-Client': xRoadConfig.xRoadClient,
          Accept: 'application/json',
        },
      }),
    )
  },
  inject: [
    XRoadConfig.KEY,
    TaxClientConfig.KEY,
    IdsClientConfig.KEY,
  ],
}
