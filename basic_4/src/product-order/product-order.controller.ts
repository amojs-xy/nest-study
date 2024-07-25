import { Body, Controller, Post } from '@nestjs/common';
import { ProductOrderService } from './product-order.service';
import { ProductOrder } from 'src/typing/product';
import { Response } from 'src/typing/app';
import { OrderBody } from 'src/dto/order-body.dto';

@Controller('product-order')
export class ProductOrderController {
    constructor (private readonly productOrderService: ProductOrderService) {}

    @Post('/order-create')
    public createOrder (@Body() body: OrderBody): Response<ProductOrder> {
        const { productId, userId, quantity  } = body;

        const orderInfo = this.productOrderService.createOrder(productId, userId, quantity);

        if (orderInfo === null) {
           return {
              code: 1,
              msg: '未找到该产品'
           }
        }

        if (orderInfo === 0) {
            return {
                code: 2,
                msg: '该产品库存不足购买量'
            }
        }

        return {
            code: 0,
            msg: 'ok',
            data: orderInfo
        };
    }
}
