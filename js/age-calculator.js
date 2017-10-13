export class AgeCalculator {
  yearsToSeconds(years) {
    const secondsInYear = 31540000;
    return years * secondsInYear;
  }

  dateDifference(start, end) {
    return (end - start) / 1000;
  }

  getAge(birthdate) {
    let age = this.dateDifference(birthdate, Date.now());
    if (age < 0)  {
      return "Error: Birthdate cannot be in future."
    } else {
      return age;
    }
  }

  lifeExpectancy(age, gender) {
    const expectancies = { 'female': 2293136620, 'male': 2156389940 };
    let remaining = expectancies[gender.toLowerCase()] - age;
    if (remaining > 0) {
      return remaining;
    } else {
      return 31540000;
    }
  }
}
