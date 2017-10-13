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

  lifeExpectancy(age, gender) {
    const expectancies = { 'female': 2293136620, 'male': 2156389940 }
    return expectancies[gender.toLowerCase()] - age;
  }
}
