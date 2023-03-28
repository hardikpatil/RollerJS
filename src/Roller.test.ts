import {Roller} from './Roller';

describe('Roller', () => {
  let roller: Roller;

  beforeEach(() => {
    roller = new Roller(6);
  });

  test('Roller should have a specified number of faces', () => {
    expect(roller['_faces']).toBe(6);
  });

  test('Roller should default to 6 faces if less than 2 faces are specified', () => {
    const roller2 = new Roller(1);
    expect(roller2['_faces']).toBe(6);
  });

  test('Roller should record a valid roll', () => {
    const value = roller.roll(3);
    expect(value).toBe(3);
    expect(roller.last()).toBe(3);
    expect(roller.distribution().get(3)).toBe(1);
  });

  test('Roller should not record an invalid roll', () => {
    const value = roller.roll(10);
    expect(value).toBe(0);
    expect(roller.last()).toBe(0);
    expect(roller.distribution().get(1)).toBe(0);
    expect(roller.distribution().get(2)).toBe(0);
    expect(roller.distribution().get(3)).toBe(0);
    expect(roller.distribution().get(4)).toBe(0);
    expect(roller.distribution().get(5)).toBe(0);
    expect(roller.distribution().get(6)).toBe(0);
    expect(roller.distribution().get(10)).toBeUndefined();
  });

  test('Roller should update the distribution of rolls', () => {
    roller.roll(3);
    roller.roll(3);
    roller.roll(4);
    expect(roller.distribution().get(3)).toBe(2);
    expect(roller.distribution().get(4)).toBe(1);
  });
});