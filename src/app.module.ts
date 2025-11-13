import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { Products2Module } from './products2/products.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule, Products2Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
