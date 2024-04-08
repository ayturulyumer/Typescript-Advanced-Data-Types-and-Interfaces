"use strict";
function createHeroesInventory(data) {
    const heroes = [];
    for (const heroInfo of data) {
        const [name, levelString, itemsString] = heroInfo.split(" / ");
        const level = parseInt(levelString);
        const items = itemsString ? itemsString.split(", ") : [];
        const hero = {
            name: name,
            level: level,
            items: items,
        };
        heroes.push(hero);
    }
    const sortedHeroes = heroes.sort((a, b) => a.level - b.level);
    for (const hero of sortedHeroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`Items => ${hero.items.join(",")} `);
    }
}
const heroesData = [
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
];
createHeroesInventory(heroesData);
//# sourceMappingURL=inventory.js.map