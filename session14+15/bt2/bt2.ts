class Products2{
    id:number;
    name:string;
    price:number;
    constructor(id:number,name:string,price:number){
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class  CartProduct extends Products2{
    quantity:number;
    constructor(id:number,name:string,price:number,quantity:number){
        super(id,name,price)
        this.id = id
        this.name = name
        this.price = price
        this.quantity = quantity
    }
    calculatePrice(){
        return this.price * this.quantity
    }
    increaseQuantity(){
        this.quantity++
    }
    decreaseQuantity(){ 
        this.quantity--
    }
    getQuanlity(){
        return this.quantity
    }
    getIdProduct(){
        return this.id
    }
}
class ShopProduct extends Products2{
    stock:number
    constructor(id:number,name:string,price:number,stock:number){
        super(id,name,price)
        this.id = id
        this.name = name
        this.price = price 
        this.stock = stock
    }
    getId(){
        return this.id
    }
}
let shop:ShopProduct[] = [
    new ShopProduct(1,"product1",15000,3) ,
    new ShopProduct(2,"product2",30000,2) ,
    new ShopProduct(3,"product3",100000,4) ,
]

class Cart{
    items:CartProduct[]
    constructor(){
        this.items = []
    }
    addItem(id:number,quantity:number){
        let index = shop.findIndex(item => item.getId() === id)
        if(index !== -1){
            if(quantity <= shop[index].stock){
            this.items.push(new CartProduct(shop[index].id,shop[index].name,shop[index].price,quantity))
        }else{
            console.log("Số lượng cần mua vượt quá số lượng sản phẩm trong kho")
        }
        }
    }
    removeItem(id:number){
        let index = shop.findIndex(item => item.getId() === id)
        if(index !== -1){
            this.items.splice(index,1)
        }
    }
    getTotal():number{
        let sum:number = 0;
        this.items.forEach((item)=>{
            sum += item.calculatePrice()
        })
        return sum
    }
}

let cart1 = new Cart()
cart1.addItem(1,1)
cart1.addItem(2,1)
console.log(cart1.getTotal())
