import { Module } from '@nestjs/common';
import { ProductOrderModule } from './product-order/product-order.module';

@Module({
  imports: [ProductOrderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
