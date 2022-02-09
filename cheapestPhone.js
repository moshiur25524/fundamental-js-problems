const phones = [
    { phone: 'samsang s8', price: 28000, storage: 64, camera: 16 },
    { phone: 'realme narzo', price: 19000, storage: 128, camera: 16 },
    { phone: 'walton', price: 8000, storage: 16, camera: 8 },
    { phone: 'oppo', price: 15000, storage: 32, camera: 12 },
    { phone: 'iphone', price: 128000, storage: 128, camera: 32 }
];
let cheapest = phones[0];
for (const phone of phones) {
    // console.log(phone);
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
}

console.log(cheapest);
