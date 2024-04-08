type Hero = {
  name: string;
  level: number;
  items: string[];
};

function createHeroesInventory(data: string[]): void {
  const heroes: Hero[] = [];

  for (const heroInfo of data) {
    const [name, levelString, itemsString] = heroInfo.split(" / ");
    const level: number = parseInt(levelString);
    const items: string[] = itemsString ? itemsString.split(", ") : [];

    const hero: Hero = {
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

const heroesData: string[] = [
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
];

createHeroesInventory(heroesData);
