import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TaxReturn } from './tax-return.model';
import { CreateTaxReturnDto } from './dto/create-tax-return.dto';
import { UpdateTaxReturnDto } from './dto/update-tax-return.dto';

@Injectable()
export class TaxReturnService {
  constructor(
    @InjectModel(TaxReturn)
    private taxReturnModel: typeof TaxReturn,
  ) {}

  async create(createTaxReturnDto: CreateTaxReturnDto): Promise<TaxReturn> {
    return this.taxReturnModel.create(createTaxReturnDto as any);
  }

  async findAll(): Promise<TaxReturn[]> {
    return this.taxReturnModel.findAll();
  }

  async findOne(id: number): Promise<TaxReturn> {
    const taxReturn = await this.taxReturnModel.findByPk(id);
    if (!taxReturn) throw new NotFoundException('Tax return not found');
    return taxReturn;
  }

  async update(
    id: number,
    updateTaxReturnDto: UpdateTaxReturnDto,
  ): Promise<TaxReturn> {
    const taxReturn = await this.findOne(id);
    return taxReturn.update(updateTaxReturnDto);
  }

  async remove(id: number): Promise<void> {
    const taxReturn = await this.findOne(id);
    await taxReturn.destroy();
  }
}
