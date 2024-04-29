"use strict";
class MenuItem {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class Table {
    constructor(id, capacity, available) {
        this.id = id;
        this.capacity = capacity;
        this.available = available;
    }
}
class Reservation {
    constructor(id, customerName, tableId) {
        this.id = id;
        this.customerName = customerName;
        this.tableId = tableId;
    }
}
class Order {
    constructor(id, tableId) {
        this.id = id;
        this.tableId = tableId;
        this.items = [];
    }
    getTotal() {
        let sumpay = 0;
        this.items.forEach((item) => {
            sumpay += item.price;
        });
        return sumpay;
    }
    addItemsOrder(item) {
        this.items.push(item);
    }
}
class Restaurant {
    constructor() {
        this.menu = [];
        this.tables = [];
        this.reservations = [];
        this.orders = [];
    }
    addMenuItem(item) {
        this.menu.push(item);
    }
    addTable(table) {
        this.tables.push(table);
    }
    makeReservation(id, customerName) {
        let TableIndex = this.tables.findIndex(item => item.id === id);
        if (TableIndex !== -1) {
            if (this.tables[TableIndex].available === true) {
                this.tables[TableIndex].available = false;
                let newReservation = new Reservation(this.reservations.length + 1, customerName, id);
                this.reservations.push(newReservation);
            }
            else {
                console.log("Bàn đã được đặt trước");
            }
        }
        else {
            console.log("Không tìm thấy bàn");
        }
    }
    placeOrder(idTable, idMenuItem) {
        let newOder = new Order(this.orders.length + 1, idTable);
        idMenuItem.forEach((item) => {
            let itemMenuIndex = this.menu.findIndex(findMenuItem => findMenuItem.id === item);
            if (itemMenuIndex !== -1) {
                let oderItem = new MenuItem(item, this.menu[itemMenuIndex].name, this.menu[itemMenuIndex].price);
                newOder.items.push(oderItem);
            }
        });
        this.orders.push(newOder);
    }
    generateBill(idTable) {
        let indexOrder = this.orders.findIndex(item => item.tableId === idTable);
        if (indexOrder !== -1) {
            let TableIndex = this.tables.findIndex(item => item.id === idTable);
            if (TableIndex !== -1) {
                this.tables[TableIndex].available = true;
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
let table1 = new Table(1, 4, true);
let table2 = new Table(2, 6, true);
restaurant.addTable(table1);
restaurant.addTable(table2);
restaurant.makeReservation(1, "Nguyen Van Duy Anh");
restaurant.placeOrder(1, [1, 2]);
let totalBill = restaurant.generateBill(1);
console.log("Tổng tiền của bàn là: " + totalBill);
