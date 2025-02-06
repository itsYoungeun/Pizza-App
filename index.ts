type Pizza = {
    id: number,
    name: string,
    price: number,
}

type Order = {
    id: number,
    pizza: Pizza,
    status: "ordered" | "completed",
}

const menu: Pizza[] = [
    { id: 1, name: "Margherita", price: 8 },
    { id: 2, name: "Pepperoni", price: 10 },
    { id: 3, name: "Hawaiian", price: 10 },
    { id: 4, name: "Veggie", price: 9 }, 
]

let cashInRegister = 100
let nextOrderId = 1
const orderHistory: Order[] = []

function addNewPizza(pizzaObj: Pizza) {
    menu.push(pizzaObj)
}

function placeOrder(pizzaName: string) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza) {
        console.error(`${pizzaName} was not found in the menu`)
        return
    }
    cashInRegister += selectedPizza.price
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered"}
    orderHistory.push(newOrder)
    return newOrder
}

function completeOrder(orderId: number) {
    const order = orderHistory.find(order => order.id === orderId)
    if (!order) {
        console.error(`${orderId} was not found in the orderHistory`)
        return
    }
    order.status = "completed"
    return order
}

addNewPizza({ id: 5, name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ id: 6, name: "BBQ Chicken", price: 12 })
addNewPizza({ id: 7, name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order history:", orderHistory)