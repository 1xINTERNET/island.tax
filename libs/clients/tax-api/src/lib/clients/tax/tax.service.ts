import { AuthMiddleware, Auth } from '@island.is/auth-nest-tools'
import { handle404 } from '@island.is/clients/middlewares'
import { Inject, Injectable } from '@nestjs/common'

/**
 * @todo define and adpat the clientConfig.js
 * @todo run yarn codegen and use the correct imports
 */
import {
  TaxDto,
  MeTaxControllerGetTaxEnum,
  MeTaxApi,
} from './gen/fetch'
import { LOGGER_PROVIDER } from '@island.is/logging'
import type { Logger } from '@island.is/logging'

const LOG_CATEGORY = 'tax-api'
@Injectable()
export class TaxService {
  constructor(
    @Inject(LOGGER_PROVIDER) private readonly logger: Logger,
    private readonly taxApi: MeTaxApi,
  ) {}

  private taxApiWithAuth(auth: Auth) {
    return this.taxApi.withMiddleware(new AuthMiddleware(auth))
  }

  public async getTax(
    auth: Auth,
  ): Promise<Array<TaxDto> | null> {
    const taxes = await this.taxApiWithAuth(auth)
      .meTaxControllerGetTax()
      .catch(handle404)

    if (!taxes) {
      this.logger.debug('No tax returned', {
        category: LOG_CATEGORY,
      })
      return null
    }

    return taxes
  }

  public async getTaxDetail(
    auth: Auth,
    locale: string,
  ): Promise<Array<TaxDto> | null> {
    const taxes = await this.taxApiWithAuth(auth)
      .meTaxControllerGetTax({
        locale:
          locale === 'is'
            ? MeTaxControllerGetTaxEnum.Is
            : MeTaxControllerGetTaxEnum.En,
      })
      .catch(handle404)

    if (!taxes) {
      this.logger.debug('No taxes returned', {
        category: LOG_CATEGORY,
      })
      return null
    }

    return taxes
  }
}
