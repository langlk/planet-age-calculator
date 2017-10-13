export class PlanetYearConverter {
  planetYears(seconds, planet) {
    const planets = {
      'mercury': 7600000,
      'venus': 19400000,
      'earth': 31540000,
      'mars': 59400000,
      'jupiter': 370000000
    };
    return seconds / planets[planet.toLowerCase()];
  }
}
