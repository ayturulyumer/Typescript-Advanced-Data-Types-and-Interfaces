"use strict";
function createTown(data) {
    const towns = [];
    for (const location of data) {
        const [town, latitudeStr, longitudeStr] = location
            .split(" | ")
            .map((item) => item.trim());
        const latitude = parseFloat(latitudeStr);
        const longitude = parseFloat(longitudeStr);
        const roundedLatitude = parseFloat(latitude.toFixed(2));
        const roundedLongitude = parseFloat(longitude.toFixed(2));
        const city = {
            name: town,
            latitude: roundedLatitude,
            longitude: roundedLongitude,
        };
        towns.push(city);
    }
    return towns;
}
const inputData = [
    "Sofia | 42.696552 | 23.32601",
    "Beijing | 39.913818 | 116.363625",
    "Plovdiv | 136.45 | 812.575",
];
console.log(createTown(inputData));
//# sourceMappingURL=towns.js.map