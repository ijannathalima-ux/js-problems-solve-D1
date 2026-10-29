//Best Discount Selector

function selectBestDiscount(price, offers) {
    let bestOffer = null;
    let lowestPrice = price;

    for (const offer of offers) {
        if (price < offer.minPrice) {
            continue;
        }

        let discount = 0;

        if (offer.type === "flat") {
            discount = offer.value;
        } else if (offer.type === "percent") {
            discount = price * (offer.value / 100);
        }

        const finalPrice = Math.max(0, price - discount);

        if (finalPrice < lowestPrice) {
            lowestPrice = finalPrice;
            bestOffer = offer;
        }
    }

    return bestOffer;
}

console.log(selectBestDiscount(100, [
    { name: "FLAT15", type: "flat", value: 15, minPrice: 50 },
    { name: "HALF", type: "percent", value: 50, minPrice: 150 }
]));