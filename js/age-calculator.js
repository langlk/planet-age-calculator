export class AgeCalculator {

  yearsToSeconds(years) {
    const secondsInYear = 31540000;
    return years * secondsInYear;
  }

  dateDifference(start, end) {
    return (end - start) / 1000;
  }

  getAge(birthdate) {
    return this.dateDifference(birthdate, Date.now());
  }
}
