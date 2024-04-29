class MenuItem {
    id:number;
    name:string;
    price:number;
    constructor(id:number,name:string,price:number){
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class Table {
    id:number;
    capacity:number;
    available:boolean;
    constructor(id:number,capacity:number,available:boolean){
        this.id = id;
        this.capacity = capacity;
        this.available = available;
    }
}
class Reservation {
    id:number;
    customerName:string;
    tableId:number;
    constructor(id:number,customerName:string,tableId:number){
        this.id = id;
        this.customerName = customerName;
        this.tableId = tableId;
    }
}
class Order {
    id:number;
    tableId:number;
    items:MenuItem[];
    constructor(id:number,tableId:number){
        this.id = id;
        this.tableId = tableId;
        this.items = [];
    }
    getTotal(){
        let sumpay:number = 0
        this.items.forEach((item)=>{
            sumpay +=item.price
        })
        return sumpay
    }
    addItemsOrder(item:MenuItem){
       this.items.push(item)
    }
}
class Restaurant {
    menu:MenuItem[];
    tables:Table[];
    reservations:Reservation[];
    orders:Order[];
    constructor(){
        this.menu = []
        this.tables = []
        this.reservations = []
        this.orders = [] 
    }
    addMenuItem(item:MenuItem){
        this.menu.push(item)
    }
    addTable(table:Table){
        this.tables.push(table)
    }
    makeReservation(id:number,customerName:string){
        let TableIndex = this.tables.findIndex(item => item.id === id);
        if(TableIndex !== -1){
            if(this.tables[TableIndex].available === true){
                this.tables[TableIndex].available = false
                let newReservation = new Reservation(this.reservations.length + 1,customerName,id)
                this.reservations.push(newReservation);
            }else{
                console.log("Bàn đã được đặt trước")
            }
        }else{
            console.log("Không tìm thấy bàn")
        }
    }
    placeOrder(idTable:number,idMenuItem:number[]){
        let newOder = new Order(this.orders.length + 1,idTable)
        idMenuItem.forEach((item)=>{
            let itemMenuIndex = this.menu.findIndex(findMenuItem => findMenuItem.id === item);
            if(itemMenuIndex !== -1){
                let oderItem = new MenuItem(item,this.menu[itemMenuIndex].name,this.menu[itemMenuIndex].price)
                newOder.items.push(oderItem)
        }
        })
        this.orders.push(newOder);
    }
    generateBill(idTable:number){
        let indexOrder =this.orders.findIndex(item => item.tableId === idTable)
        if(indexOrder !== -1){
            let TableIndex = this.tables.findIndex(item => item.id === idTable);
            if(TableIndex !== -1){  
                this.tables[TableIndex].available = true
            }
            return this.orders[indexOrder].getTotal();
        }
    }
}
let restaurant = new Restaurant();

let menuItem1 = new MenuItem(1, "Bún chả", 30000);
let menuItem2 = new MenuItem(2, "Phở", 35000);
restaurant.addMenuItem(menuItem1);
restaurant.addMenuItem(menuItem2);

let table1 = new Table(1,4, true);
let table2 = new Table(2, 6, true);
restaurant.addTable(table1);
restaurant.addTable(table2);


restaurant.makeReservation(1, "Nguyen Van Duy Anh");


restaurant.placeOrder(1, [1, 2]);

let totalBill = restaurant.generateBill(1);
console.log("Tổng tiền của bàn là: " + totalBill);
