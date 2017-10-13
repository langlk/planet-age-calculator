import { AgeCalculator } from './../js/age-calculator.js';
import { PlanetYearConverter } from './../js/planet-year-converter.js';

$(document).ready(function() {
  $("#calculator").submit(function(event) {
    event.preventDefault();
    let birthString = $('#birthdate').val();
    let birthYear = parseInt(birthString.substring(0, 4));
    let birthMonth = parseInt(birthString.substring(5, 7));
    let birthDay = parseInt(birthString.substring(8, 10));
    let birthdate = new Date(birthYear, birthMonth, birthDay);
    let gender = $('#gender').val();
    $(".output").html('<p>' + birthdate + '</p><p>' + gender + '</p>');
  });
});
