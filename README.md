# Planet Age Calculator

## Planning
### Configuration/Dependencies
* Gulp build tools
  * Babel
* Bower
  * jQuery
  * Bootstrap
* Jasmine
* Karma
* Gulp serve tools

### Specifications

* Program converts a person's age in years into seconds.
* Program takes two dates and determines the difference, in seconds, between them.
* Program converts Earth years into Mercury years (1:0.24)
* Program converts Earth years into Venus years (1:0.62)
* Program converts Earth years into Mars years (1:1.88)
* Program converts Earth years into Jupiter years (1:11.86)
* Program determines a user's remaining life expectancy.
* Program converts a user's remaining life expectancy different planetary years.
* If user's age is past their life expectancy, program returns 1 Earth year as expected remaining.

### Integration

* Homepage: index.html
  * requires planet-age-calculator-interface.js
  * requires all CSS
  * interface:
    * Form:
      * Age / Birthday
      * Gender
    * Display:
      * Age in each planet's years
      * Remaining life expectancy in each planet's years
* JS:
  * planet-year-converter.js
  * age-calculator.js
  * planet-age-calculator-interface.js
* CSS:
  * Bootstrap
  * Custom

### UX/UI

* Custom styling

### Polish

* Refactor if needed
* Edit README
