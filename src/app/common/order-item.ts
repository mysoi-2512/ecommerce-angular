import { CartItem } from "./cart-item";

export class OrderItem {
    imgUrl!: string;
    unitPrice!: number;
    quantity!: number;
    productId!: number;

    constructor(cartItem: CartItem) {
        this.imgUrl = cartItem.imgUrl;
        this.quantity = cartItem.quantity;
        this.unitPrice = cartItem.unitPrice;
        this.productId = cartItem.id;
    }

}
