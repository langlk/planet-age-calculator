import { AgeCalculator } from './../js/age-calculator.js';
import { PlanetYearConverter } from './../js/planet-year-converter.js';

function clearForm() {
  $('.form-group').removeClass('has-error');
  $('#birthdate-error').text('');
}

$(document).ready(function() {
  const ageCalc = new AgeCalculator();
  const planetConverter = new PlanetYearConverter();
  const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter'];

  planets.forEach(function(planet) {
    let yearConversion = planetConverter.planetYears(31540000, planet);
    $('.output').append(`<h3>${ planet }</h3>
      <p><strong>Ratio to Earth Years:</strong> ${ yearConversion.toFixed(2) } to 1.00</p>
      <div class= ${ planet }></div>`);
  });

  $("#calculator").submit(function(event) {
    event.preventDefault();
    clearForm();

    let birthString = $('#birthdate').val();
    if (birthString.length != 10) {
      $('.birthdate').addClass('has-error');
      $('#birthdate-error').text('Error: Birthdate cannot be empty.');
    } else {
      let birthYear = parseInt(birthString.substring(0, 4));
      let birthMonth = parseInt(birthString.substring(5, 7));
      let birthDay = parseInt(birthString.substring(8, 10));
      let birthdate = new Date(birthYear, birthMonth, birthDay);
      let gender = $('#gender').val();

      let age = ageCalc.getAge(birthdate);
      if (age === "Error: Birthdate cannot be in future.") {
        $('.birthdate').addClass('has-error');
        $('#birthdate-error').text(age);
      } else {
        let expectancy = ageCalc.lifeExpectancy(age, gender);
        planets.forEach(function(planet) {
          let planetAge = planetConverter.planetYears(age, planet);
          let planetEstimate = planetConverter.planetYears(expectancy, planet);
          $('.' + planet).append(`<p><strong>Age:</strong> ${ planetAge.toFixed(2) }</p>`);
          $('.' + planet).append(`<p><strong>Estimated Years Left:</strong> ${ planetEstimate.toFixed(2) }</p>`);
        });
      }
    }
  });
});
