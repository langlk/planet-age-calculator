import { PlanetYearConverter } from './../js/planet-year-converter.js';

describe('PlanetYearConverter', function() {
  const converter = new PlanetYearConverter();

  describe('mercuryYears', function() {
    it ("converts seconds to Mercury years", function() {
      expect(converter.mercuryYears(31540000)).toEqual(4.15);
    });
  });
});
