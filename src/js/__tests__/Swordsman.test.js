import Swordsman from '../Swordsman';

test('valid arguments', () => {
  const result = new Swordsman('Character');
  expect(result).toEqual({
    name: 'Character',
    type: 'Swordsman',
    health: 100,
    attack: 40,
    defence: 10,
    level: 1,
  });
});