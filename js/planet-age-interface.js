import { AgeCalculator } from './../js/age-calculator.js';
import { PlanetYearConverter } from './../js/planet-year-converter.js';

$(document).ready(function() {
  const ageCalc = new AgeCalculator();
  const planetConverter = new PlanetYearConverter();
  const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter'];

  $("#calculator").submit(function(event) {
    event.preventDefault();
    let birthString = $('#birthdate').val();
    let birthYear = parseInt(birthString.substring(0, 4));
    let birthMonth = parseInt(birthString.substring(5, 7));
    let birthDay = parseInt(birthString.substring(8, 10));
    let birthdate = new Date(birthYear, birthMonth, birthDay);
    let gender = $('#gender').val();
    $(".output").html('');

    let age = ageCalc.getAge(birthdate);
    let expectancy = ageCalc.lifeExpectancy(age, gender);
    planets.forEach(function(planet) {
      $('.output').append("<h3>" + planet + "</h3>");
      $('.output').append(`<p><strong>Age:</strong> ${planetConverter.planetYears(age, planet).toFixed(2)}</p>`);
      $('.output').append(`<p><strong>Estimated Years Left:</strong> ${planetConverter.planetYears(expectancy, planet).toFixed(2)}</p>`);
    });
  });
});
