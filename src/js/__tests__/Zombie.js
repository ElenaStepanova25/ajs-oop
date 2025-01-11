import Zombie from '../zombie';

test('valid arguments', () => {
  const result = new Zombie('Character');
  expect(result).toEqual({
    name: 'Character',
    type: 'Zombie',
    health: 100,
    attack: 40,
    defence: 10,
    level: 1,
  });
});