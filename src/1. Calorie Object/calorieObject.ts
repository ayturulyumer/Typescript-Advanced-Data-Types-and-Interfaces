function calorieObject(array: string[]): void {
  const foods: { [key: string]: number } = {};

  for (let i = 0; i < array.length; i += 2) {
    const currentFood: string = array[i];
    const calories: number = Number(array[i + 1]);

    if (!isNaN(calories)) {
      foods[currentFood] = calories;
    } else {
      console.log(`Invalid input for calories ${currentFood}`);
    }
  }

  console.log(foods);
}

const productData: string[] = ["Yoghurt", "48", "Rise", "138", "Apple", "52"];
calorieObject(productData);
