import { Module } from '@nestjs/common';
import { ProductOrderController } from './product-order.controller';
import { ProductOrderService } from './product-order.service';
import { ProductOrderRepository } from './product-order.repository';

@Module({
  controllers: [ProductOrderController],
  providers: [ProductOrderService, ProductOrderRepository]
})
export class ProductOrderModule {}
