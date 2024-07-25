import { IsString, IsNumber } from "class-validator";


export class OrderBody {
    @IsString()
    productId: string;
    @IsString()
    userId: string;
    @IsNumber()
    quantity: number;
}