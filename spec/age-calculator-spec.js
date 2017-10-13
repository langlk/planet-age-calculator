import { AgeCalculator } from './../js/age-calculator.js';

describe('AgeCalculator', function() {
  let ageCalc = new AgeCalculator();

  describe('yearsToSeconds', function() {
    it("should return 0 if years inputted is 0", function() {
      expect(ageCalc.yearsToSeconds(0)).toEqual(0);
    });

    it("converts an amount of years into seconds", function() {
      expect(ageCalc.yearsToSeconds(1)).toEqual(31540000);
    });
  });

  describe('dateDifference', function() {
    it("returns the difference, in seconds, between two dates", function() {
      let start = new Date(1992, 1, 1);
      let end = new Date(2017, 1, 1);
      expect(ageCalc.dateDifference(start, end)).toEqual(789004800);
    });
  });

  describe('getAge', function() {
    it("returns current age in seconds, based on birthdate given", function() {
      let birthdate = new Date(1992, 1, 1);
      let expectedOne = (Date.now() - birthdate) / 1000;
      let result = ageCalc.getAge(birthdate);
      let expectedTwo = (Date.now() - birthdate) / 1000;
      expect(result).toBeGreaterThanOrEqual(expectedOne);
      expect(result).toBeLessThanOrEqual(expectedTwo);
    });

    it("returns error message if birthday after current date", function() {
      let birthdate = new Date(2020, 1, 1);
      expect(ageCalc.getAge(birthdate)).toEqual("Error: Birthdate cannot be in future.");
    });
  });

  describe('lifeExpectancy', function() {
    it("returns remaining life expectancy based on gender", function() {
      let age = 789004800;
      expect(ageCalc.lifeExpectancy(age, 'female')).toEqual(1504131820);
      expect(ageCalc.lifeExpectancy(age, 'male')).toEqual(1367385140);
    });

    it("returns 1 earth year remaining if age is past expectancy", function() {
      let age = 2299136620;
      expect(ageCalc.lifeExpectancy(age, 'male')).toEqual(31540000);
    });

    it("uses average life expectancy if no gender specified", function() {
      let age = 789004800;
      expect(ageCalc.lifeExpectancy(age)).toEqual(1465795200);
    });
  });
});
