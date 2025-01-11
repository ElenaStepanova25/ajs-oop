import Undead from '../Undead';

test('valid arguments', () => {
  const result = new Undead('Character');
  expect(result).toEqual({
    name: 'Character',
    type: 'Undead',
    health: 100,
    attack: 25,
    defence: 25,
    level: 1,
  });
});