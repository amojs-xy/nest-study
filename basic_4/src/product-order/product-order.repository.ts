import { Injectable } from "@nestjs/common";
import { readFileSync, writeFileSync } from "fs";
import { Product, ProductOrder } from "src/typing/product";

@Injectable()
export class ProductOrderRepository {
    public checkOrderValid (productId: string, quantity: number) {
        const productData = JSON.parse(readFileSync('src/data/product.json', 'utf8')) as Product[];

        const productInfo = productData.find(product => product.id === productId);

        if (!productInfo) {
            return {
                product: null,
                quantity: 0
            };
        }

        if (productInfo.remaining < quantity) {
            return {
                product: productInfo,
                quantity: 0
            };
        }

        return {
            product: productInfo,
            quantity
        }
    }

    public createOrder (productId: string, userId: string, quantity: number) {
        const order: ProductOrder = {
            id: new Date().getTime().toString(),
            productId,
            productName: '',
            userId,
            quantity,
            dateTime: new Date().getTime()
        }

        let productData = JSON.parse(readFileSync('src/data/product.json', 'utf8')) as Product[];

        productData = productData.map(p => {
            if (p.id === productId) {
               p.remaining -= quantity;
               order.productName = p.name;
            }
            return p;
        });

        writeFileSync('src/data/product.json', JSON.stringify(productData));

        const productOrderData = JSON.parse(readFileSync('src/data/product-order.json', 'utf8')) as ProductOrder[];
        productOrderData.unshift(order);
        writeFileSync('src/data/product-order.json', JSON.stringify(productOrderData));

        return order;
    }
}

