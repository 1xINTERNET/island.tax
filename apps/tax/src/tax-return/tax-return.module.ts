import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TaxReturn } from './tax-return.model';
import { Income } from './income.model';
import { Asset } from './asset.model';
import { Liability } from './liability.model';
import { TaxReturnService } from './tax-return.service';
import { TaxReturnController } from './tax-return.controller';
import { IncomeController } from './income.controller';
import { IncomeService } from './income.service';
import { AssetController } from './asset.controller';
import { AssetService } from './asset.service';
import { LiabilityController } from './liability.controller';
import { LiabilityService } from './liability.service';

@Module({
  imports: [SequelizeModule.forFeature([TaxReturn, Income, Asset, Liability])],
  controllers: [
    TaxReturnController,
    IncomeController,
    AssetController,
    LiabilityController,
  ],
  providers: [TaxReturnService, IncomeService, AssetService, LiabilityService],
  exports: [TaxReturnService, IncomeService, AssetService, LiabilityService],
})
export class TaxReturnModule {}
