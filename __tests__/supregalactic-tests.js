import { Calculate } from '../src/supergalactic-age-calculator.js';

describe ('Age', () => {
  test('should display age in planetary years', () => {
    let planetAge = new Calculate(30);
    expect(planetAge.mercury).toEqual(7.2);
    expect(planetAge.venus).toEqual(18.6);
    expect(planetAge.mars).toEqual(56.4);
    expect(planetAge.jupiter).toEqual(11.86);
  })
})

 

  // expect(planteAge.checkAge()).toEqual(7.2);