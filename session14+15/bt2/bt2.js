"use strict";
class Products2 {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class CartProduct extends Products2 {
    constructor(id, name, price, quantity) {
        super(id, name, price);
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    calculatePrice() {
        return this.price * this.quantity;
    }
    increaseQuantity() {
        this.quantity++;
    }
    decreaseQuantity() {
        this.quantity--;
    }
    getQuanlity() {
        return this.quantity;
    }
    getIdProduct() {
        return this.id;
    }
}
class ShopProduct extends Products2 {
    constructor(id, name, price, stock) {
        super(id, name, price);
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    getId() {
        return this.id;
    }
}
let shop = [
    new ShopProduct(1, "product1", 15000, 3),
    new ShopProduct(2, "product2", 30000, 2),
    new ShopProduct(3, "product3", 100000, 4),
];
class Cart {
    constructor() {
        this.items = [];
    }
    addItem(id, quantity) {
        let index = shop.findIndex(item => item.getId() === id);
        if (index !== -1) {
            if (quantity <= shop[index].stock) {
                this.items.push(new CartProduct(shop[index].id, shop[index].name, shop[index].price, quantity));
            }
            else {
                console.log("Số lượng cần mua vượt quá số lượng sản phẩm trong kho");
            }
        }
    }
    removeItem(id) {
        let index = shop.findIndex(item => item.getId() === id);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
    getTotal() {
        let sum = 0;
        this.items.forEach((item) => {
            sum += item.calculatePrice();
        });
        return sum;
    }
}
let cart1 = new Cart();
cart1.addItem(1, 1);
cart1.addItem(2, 1);
console.log(cart1.getTotal());
