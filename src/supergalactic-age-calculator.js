export class Person {
  constructor (age, lifeexpectancy) {
    this.age = age;
    this.lifeexpectancy = lifeexpectancy;
  }

checkPlanet() {
  let inputAge = new Array(4);
  inputAge[0] = (this.age * .24);
    inputAge[1] = (this.age * .62);
    inputAge[2] = (this.age * 1.88);
    inputAge[3] = (this.age * 11.86);
}


// checkPlanet() {
//   let inputAge = new Array(4);
//     inputAge[0] = (inputAge * .24);
//     inputAge[1] = (inputAge * .62);
//     inputAge[2] = (inputAge * 1.88);
//     inputAge[3] = (inputAge * 11.86);
//   let planetAge = new Age(`${this.mercury}, ${this.venus}, ${this.mars}, ${this.jupiter}`);
//   let ageResult = inputAge[planetAge];
//     return ageResult;
//   }
// }