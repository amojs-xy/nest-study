export interface ProductOrder {
  id: string;
  userId: string;
  productId: string;
  productName: string;
  quantity: number;
  dateTime: number;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  unit: string;
  remaining: number;
}
