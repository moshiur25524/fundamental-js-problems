function animalCound(miles) {
    const animalDensityFirst10Miles = 10;
    const animalDensitySecond10Miles = 50;
    const animalDensityRestMiles = 100;
    if (miles <= 10) {
        const count = miles * animalDensityFirst10Miles;
        return count;
    }
    else if (miles <= 20) {
        const firstDenseanimals = 10 * animalDensityFirst10Miles;
        const restMiles = miles - 10;
        const secondDenseanimals = restMiles * animalDensitySecond10Miles;
        const totalAnimals = firstDenseanimals + secondDenseanimals;
        return totalAnimals;
    }
    else {
        const firstDenseanimals = 10 * animalDensityFirst10Miles;
        const secondDenseanimals = 10 * animalDensitySecond10Miles;
        const restMiles = miles - 20;
        const restDenseanimals = restMiles * animalDensityRestMiles;
        const totalAnimals = firstDenseanimals + secondDenseanimals + restDenseanimals;
        return totalAnimals;
    }
}
const animals = animalCound(21);
console.log(animals);