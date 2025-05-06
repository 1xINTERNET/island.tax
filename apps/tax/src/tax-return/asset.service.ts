import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Asset } from './asset.model';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';

@Injectable()
export class AssetService {
  constructor(
    @InjectModel(Asset)
    private assetModel: typeof Asset,
  ) {}

  async create(createAssetDto: CreateAssetDto): Promise<Asset> {
    return this.assetModel.create(createAssetDto as any);
  }

  async findAll(): Promise<Asset[]> {
    return this.assetModel.findAll();
  }

  async findOne(id: number): Promise<Asset> {
    const asset = await this.assetModel.findByPk(id);
    if (!asset) throw new NotFoundException('Asset not found');
    return asset;
  }

  async update(id: number, updateAssetDto: UpdateAssetDto): Promise<Asset> {
    const asset = await this.findOne(id);
    return asset.update(updateAssetDto);
  }

  async remove(id: number): Promise<void> {
    const asset = await this.findOne(id);
    await asset.destroy();
  }
}
