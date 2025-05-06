import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TaxReturnService } from './tax-return.service';
import { CreateTaxReturnDto } from './dto/create-tax-return.dto';
import { UpdateTaxReturnDto } from './dto/update-tax-return.dto';

@Controller('tax-returns')
export class TaxReturnController {
  constructor(private readonly taxReturnService: TaxReturnService) {}

  @Post()
  create(@Body() createTaxReturnDto: CreateTaxReturnDto) {
    return this.taxReturnService.create(createTaxReturnDto);
  }

  @Get()
  findAll() {
    return this.taxReturnService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taxReturnService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTaxReturnDto: UpdateTaxReturnDto,
  ) {
    return this.taxReturnService.update(+id, updateTaxReturnDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taxReturnService.remove(+id);
  }
}
