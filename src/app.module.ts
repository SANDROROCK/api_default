import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';
import { ClientModule } from './client/client.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ProductsModule,
    ClientModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
