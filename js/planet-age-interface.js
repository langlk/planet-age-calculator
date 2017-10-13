import { AgeCalculator } from './../js/age-calculator.js';
import { PlanetYearConverter } from './../js/planet-year-converter.js';

$(document).ready(function() {
  const ageCalc = new AgeCalculator();
  const planetConverter = new PlanetYearConverter();
  const planets = ['mercury', 'venus', 'mars', 'jupiter'];

  $("#calculator").submit(function(event) {
    event.preventDefault();
    let birthString = $('#birthdate').val();
    let birthYear = parseInt(birthString.substring(0, 4));
    let birthMonth = parseInt(birthString.substring(5, 7));
    let birthDay = parseInt(birthString.substring(8, 10));
    let birthdate = new Date(birthYear, birthMonth, birthDay);
    let gender = $('#gender').val();
    $(".output").html('<p>' + birthdate + '</p><p>' + gender + '</p>');

    let age = ageCalc.getAge(birthdate);
    let expectancy = ageCalc.lifeExpectancy(age, gender);
    planets.forEach(function(planet) {
      $('.output').append("<p>" + planet + "</p>");
      $('.output').append('<p>age: ' + planetConverter.planetYears(age, planet) + "</p>");
      $('.output').append('<p>expectancy: ' + planetConverter.planetYears(expectancy, planet) + "</p>");
    });
  });
});
