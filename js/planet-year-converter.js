export class PlanetYearConverter {
  planetYears(seconds, planet) {
    const planets = {
      'mercury': 7600000,
      'venus': 19400000,
      'mars': 59400000,
    };
    return seconds / planets[planet.toLowerCase()];
  }
}
