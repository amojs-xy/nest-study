import { Injectable } from '@nestjs/common';
import { ProductOrderRepository } from './product-order.repository';

@Injectable()
export class ProductOrderService {
    constructor (private readonly productOrderRepo: ProductOrderRepository) {}

    public createOrder (productId: string, userId: string, quantity: number) {
        const productInfo = this.productOrderRepo.checkOrderValid(productId, quantity);

        if (productInfo.product === null) return null;

        if (productInfo.quantity === 0) return 0;

        return this.productOrderRepo.createOrder(productId, userId, quantity)
    }
}
