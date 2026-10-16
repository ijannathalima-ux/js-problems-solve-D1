// Shopping Cart Total Calculator

function calculateCartTotal(items, taxRate) {

    let subtotal = 0;

    for (let i = 0; i < items.length; i++) {
        let itemTotal = items[i].price * items[i].quantity;

        let discountAmount = itemTotal * items[i].discount / 100;

        itemTotal = itemTotal - discountAmount;

        subtotal = subtotal + itemTotal;
    }

    let total = subtotal + (subtotal * taxRate / 100);

    return Number(total.toFixed(2));
}

console.log(calculateCartTotal([
    { price: 100, quantity: 2, discount: 10 },
    { price: 50, quantity: 1, discount: 0 }
], 10))