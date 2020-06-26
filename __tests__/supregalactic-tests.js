import { Age } from '../src/supergalactic-age-calculator.js';

describe ('Age', () => {
  test('should calculate age in planetary years', () => {
    let planetAge = new Age(30);
    expect(planteAge.checkAge()).toEqual(7.2);
  })
})

 

  

   // expect(planetAge.mercury).checkAge().toEqual();
    // expect(planetAge.venus).toEqual(18.6);
    // expect(planetAge.mars).toEqual(56.4);
    // expect(planetAge.jupiter).toEqual(11.86);