const cart = [
    { name: 'laptop', price: 45000, quantity: 1 },
    { name: 'shirt', price: 450, quantity: 8 },
    { name: 'watch', price: 3500, quantity: 3 },
    { name: 'phone', price: 20000, quantity: 1 }
];
let cartTotal = 0;
for (const product of cart) {
    console.log(product);
    const prodcutTotal = product.price * product.quantity;
    cartTotal = cartTotal + prodcutTotal;
}
console.log(cartTotal);