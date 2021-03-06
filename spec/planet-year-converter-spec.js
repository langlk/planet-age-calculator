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

    it("converts seconds to Earth's years", function() {
      expect(converter.planetYears(31540000, 'Earth')).toEqual(1);
    });

    it("converts seconds to Mars's years", function() {
      expect(converter.planetYears(31540000, 'Mars')).toEqual(0.530976430976431);
    });

    it("converts seconds to Jupiter's years", function() {
      expect(converter.planetYears(31540000, 'Jupiter')).toEqual(0.08524324324324324);
    });
  });
});
