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
      return this.dateDifference(birthdate, Date.now());
    }
  }, {
    key: 'lifeExpectancy',
    value: function lifeExpectancy(age, gender) {
      var expectancies = { 'female': 2293136620, 'male': 2156389940 };
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

$(document).ready(function () {
  var ageCalc = new _ageCalculator.AgeCalculator();
  var planetConverter = new _planetYearConverter.PlanetYearConverter();
  var planets = ['mercury', 'venus', 'mars', 'jupiter'];

  $("#calculator").submit(function (event) {
    event.preventDefault();
    var birthString = $('#birthdate').val();
    var birthYear = parseInt(birthString.substring(0, 4));
    var birthMonth = parseInt(birthString.substring(5, 7));
    var birthDay = parseInt(birthString.substring(8, 10));
    var birthdate = new Date(birthYear, birthMonth, birthDay);
    var gender = $('#gender').val();
    $(".output").html('<p>' + birthdate + '</p><p>' + gender + '</p>');

    var age = ageCalc.getAge(birthdate);
    var expectancy = ageCalc.lifeExpectancy(age, gender);
    planets.forEach(function (planet) {
      $('.output').append("<p>" + planet + "</p>");
      $('.output').append('<p>age: ' + planetConverter.planetYears(age, planet) + "</p>");
      $('.output').append('<p>expectancy: ' + planetConverter.planetYears(expectancy, planet) + "</p>");
    });
  });
});

},{"./../js/age-calculator.js":1,"./../js/planet-year-converter.js":2}]},{},[3]);
