import Bowerman from '../bowerman';

test('valid arguments', () => {
  const result = new Bowerman('Character');
  expect(result).toEqual({
    name: 'Character',
    type: 'Bowerman',
    health: 100,
    attack: 25,
    defence: 25,
    level: 1,
  });
});