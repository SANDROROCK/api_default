import { ProductsService } from './shared/products.service';
import { ProductsController } from './products.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
