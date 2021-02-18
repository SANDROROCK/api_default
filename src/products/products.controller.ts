import { ProductsService } from './shared/products.service';
import { Controller, Get, Param } from '@nestjs/common';
import { Products } from './shared/products';

@Controller('products')
export class ProductsController {
  constructor(private ProductsService: ProductsService) {}

  @Get()
  async getAll(): Promise<Products[]> {
    return this.ProductsService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<Products[]> {
    return this.ProductsService.getById(id);
  }
}
