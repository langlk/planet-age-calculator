(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AgeCalculator = exports.AgeCalculator = function () {
  function AgeCalculator() {
    _classCallCheck(this, AgeCalculator);
  }

  _createClass(AgeCalculator, [{
    key: 'yearsToSeconds',
    value: function yearsToSeconds(years) {
      var secondsInYear = 31540000;
      return years * secondsInYear;
    }
  }, {
    key: 'dateDifference',
    value: function dateDifference(start, end) {
      return (end - start) / 1000;
    }
  }, {
    key: 'getAge',
    value: function getAge(birthdate) {
      var age = this.dateDifference(birthdate, Date.now());
      if (age < 0) {
        return "Error: Birthdate cannot be in future.";
      } else {
        return age;
      }
    }
  }, {
    key: 'lifeExpectancy',
    value: function lifeExpectancy(age) {
      var gender = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'average';

      var expectancies = { 'average': 2254800000, 'female': 2293136620, 'male': 2156389940 };
      var remaining = expectancies[gender.toLowerCase()] - age;
      if (remaining > 0) {
        return remaining;
      } else {
        return 31540000;
      }
    }
  }]);

  return AgeCalculator;
}();

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PlanetYearConverter = exports.PlanetYearConverter = function () {
  function PlanetYearConverter() {
    _classCallCheck(this, PlanetYearConverter);
  }

  _createClass(PlanetYearConverter, [{
    key: 'planetYears',
    value: function planetYears(seconds, planet) {
      var planets = {
        'mercury': 7600000,
        'venus': 19400000,
        'earth': 31540000,
        'mars': 59400000,
        'jupiter': 370000000
      };
      return seconds / planets[planet.toLowerCase()];
    }
  }]);

  return PlanetYearConverter;
}();

},{}],3:[function(require,module,exports){
'use strict';

var _ageCalculator = require('./../js/age-calculator.js');

var _planetYearConverter = require('./../js/planet-year-converter.js');

function clearForm() {
  $('.form-group').removeClass('has-error');
  $('#birthdate-error').text('');
}

$(document).ready(function () {
  var ageCalc = new _ageCalculator.AgeCalculator();
  var planetConverter = new _planetYearConverter.PlanetYearConverter();
  var planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter'];

  planets.forEach(function (planet) {
    var yearConversion = planetConverter.planetYears(31540000, planet);
    $('.output').append('<h3>' + planet + '</h3>\n      <p><strong>Ratio to Earth Years:</strong> ' + yearConversion.toFixed(2) + ' to 1.00</p>\n      <div class= ' + planet + '></div>');
  });

  $("#calculator").submit(function (event) {
    event.preventDefault();
    clearForm();

    var birthString = $('#birthdate').val();
    if (birthString.length != 10) {
      $('.birthdate').addClass('has-error');
      $('#birthdate-error').text('Error: Birthdate cannot be empty.');
    } else {
      var birthYear = parseInt(birthString.substring(0, 4));
      var birthMonth = parseInt(birthString.substring(5, 7));
      var birthDay = parseInt(birthString.substring(8, 10));
      var birthdate = new Date(birthYear, birthMonth, birthDay);
      var gender = $('#gender').val();

      var age = ageCalc.getAge(birthdate);
      if (age === "Error: Birthdate cannot be in future.") {
        $('.birthdate').addClass('has-error');
        $('#birthdate-error').text(age);
      } else {
        var expectancy = ageCalc.lifeExpectancy(age, gender);
        planets.forEach(function (planet) {
          var planetAge = planetConverter.planetYears(age, planet);
          var planetEstimate = planetConverter.planetYears(expectancy, planet);
          $('.' + planet).append('<p><strong>Age:</strong> ' + planetAge.toFixed(2) + '</p>');
          $('.' + planet).append('<p><strong>Estimated Years Left:</strong> ' + planetEstimate.toFixed(2) + '</p>');
        });
      }
    }
  });
});

},{"./../js/age-calculator.js":1,"./../js/planet-year-converter.js":2}]},{},[3]);
