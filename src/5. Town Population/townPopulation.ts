type TownRegistry = {
  [town: string]: number;
};

function createTownRegistry(data: string[]): TownRegistry {
  const registry: TownRegistry = {};

  for (const entry of data) {
    const [town, populationStr] = entry.split(" <-> ");
    const population: number = parseInt(populationStr);

    if (registry.hasOwnProperty(town)) {
      registry[town] += population;
    } else {
      registry[town] = population;
    }
  }

  return registry;
}
const data: string[] = [
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
];

const townRegistry: TownRegistry = createTownRegistry(data);

// Print the town registry
for (const town in townRegistry) {
  console.log(`${town} : ${townRegistry[town]}`);
}
