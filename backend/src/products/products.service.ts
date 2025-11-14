import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { randomUUID } from 'crypto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private readonly repo: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    const entity = this.repo.create({ id: randomUUID(), ...createProductDto });
    return this.repo.save(entity);
  }

  findAll() {
    return this.repo.find();
  }

  async findOne(id: string) {
    const product = await this.repo.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const exists = await this.repo.findOne({ where: { id } });
    if (!exists) {
      throw new NotFoundException('Product not found');
    }
    return this.repo.save({ ...exists, updateProductDto, id });
  }

  async remove(id: string) {
    const res = await this.repo.delete(id);
    if (res.affected === 0) throw new NotFoundException('Product not found');
  }
}
