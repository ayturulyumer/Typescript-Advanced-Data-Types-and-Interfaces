"use strict";
function findLowestPrices(data) {
    const products = {};
    for (const entry of data) {
        const [town, name, priceStr] = entry.split(" | ");
        const price = parseFloat(priceStr);
        if (!products[name] || price < products[name].price) {
            products[name] = { name: name, price: price, town: town };
        }
    }
    for (const productName in products) {
        const product = products[productName];
        console.log(`${product.name} -> ${product.price} (${product.town})`);
    }
}
// Example usage:
const input = [
    "Sample Town | Sample Product | 1000",
    "Sample Town | Orange | 2",
    "Sample Town | Peach | 1",
    "Sofia | Orange | 3",
    "Sofia | Peach | 2",
    "New York | Sample Product | 1000.1",
    "New York | Burger | 10",
];
findLowestPrices(input);
//# sourceMappingURL=lowestPrices.js.map