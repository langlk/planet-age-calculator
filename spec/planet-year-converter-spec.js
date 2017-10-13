import { PlanetYearConverter } from './../js/planet-year-converter.js';

describe('PlanetYearConverter', function() {
  const converter = new PlanetYearConverter();

  describe('planetYears', function() {
    it("converts seconds to Mercury's years", function() {
      expect(converter.planetYears(31540000, 'Mercury')).toEqual(4.15);
    });

    it("converts seconds to Venus's years", function() {
      expect(converter.planetYears(31540000, 'Venus')).toEqual(1.6257731958762887);
    });
  });
});
