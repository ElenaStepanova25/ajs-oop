import Magician from '../Magician';

test('valid arguments', () => {
  const result = new Magician('Character');
  expect(result).toEqual({
    name: 'Character',
    type: 'Magician',
    health: 100,
    attack: 10,
    defence: 40,
    level: 1,
  });
});