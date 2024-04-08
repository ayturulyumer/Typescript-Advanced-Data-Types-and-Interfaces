"use strict";
function calorieObject(array) {
    const foods = {};
    for (let i = 0; i < array.length; i += 2) {
        const currentFood = array[i];
        const calories = Number(array[i + 1]);
        if (!isNaN(calories)) {
            foods[currentFood] = calories;
        }
        else {
            console.log(`Invalid input for calories ${currentFood}`);
        }
    }
    console.log(foods);
}
const productData = ["Yoghurt", "48", "Rise", "138", "Apple", "52"];
calorieObject(productData);
//# sourceMappingURL=calorieObject.js.map