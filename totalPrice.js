const cart = [
    { name: 'laptop', price: 45000, quantity: 2 },
    { name: 'watch', price: 1200, quantity: 2 },
    { name: 'shirt', price: 450, quantity: 3 },
    { name: 'phone', price: 12000, quantity: 1 },
    { name: 'glass', price: 400, quantity: 2 }
]
let totalPrice = 0;
for (const product of cart) {

    cartTotal = product.price * product.quantity;

    totalPrice = totalPrice + cartTotal;
}
console.log(totalPrice);