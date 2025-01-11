import Daemon from '../daemon';

test('valid arguments', () => {
  const result = new Daemon('Character');
  expect(result).toEqual({
    name: 'Character',
    type: 'Daemon',
    health: 100,
    attack: 10,
    defence: 40,
    level: 1,
  });
});