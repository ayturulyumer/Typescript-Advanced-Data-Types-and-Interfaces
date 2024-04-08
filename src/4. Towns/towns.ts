type Town = {
  town: string;
  latitude: number;
  longitude: number;
};

function createTown(data: string[]): Town[] {
  const towns: Town[] = [];
  for (const location of data) {
    const [town, latitudeStr, longitudeStr] = location
      .split(" | ")
      .map((item) => item.trim());

    const latitude: number = parseFloat(latitudeStr);
    const longitude: number = parseFloat(longitudeStr);

    const roundedLatitude: number = parseFloat(latitude.toFixed(2));
    const roundedLongitude: number = parseFloat(longitude.toFixed(2));

    const city: Town = {
      town: town,
      latitude: roundedLatitude,
      longitude: roundedLongitude,
    };

    towns.push(city);
  }
  return towns;
}

const inputData: string[] = [
  "Sofia | 42.696552 | 23.32601",
  "Beijing | 39.913818 | 116.363625",
  "Plovdiv | 136.45 | 812.575",
];

console.log(createTown(inputData));
