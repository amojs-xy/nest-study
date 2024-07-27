import { IsString, IsInt } from "class-validator";


export class OrderBody {
    @IsString({ message: '产品ID必须传递字符串' })
    productId: string;
    @IsString({ message: '用户ID必须传递字符串' })
    userId: string;
    @IsInt({ message: '购买量必须是一个整数' })
    quantity: number;
}