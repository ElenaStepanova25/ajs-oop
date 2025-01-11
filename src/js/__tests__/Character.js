import Character from '../character';
test('valid arguments', () => {
  const result = new Character('Character', 'Swordsman');
  expect(result).toEqual({
    name: 'Character',
    type: 'Swordsman',
    health: 100,
    attack: undefined,
    defence: undefined,
    level: 1,
  });
});

test('short name', () => {
  expect(() => new Character('C', 'Swordsman')).toThrowError('неверное имя');
});

test('long name', () => {
  expect(() => new Character('CharacterCharacter', 'Swordsman')).toThrowError('неверное имя');
});

test('invalid type', () => {
  expect(() => new Character('Character', 'Batman')).toThrowError('неверный тип');
});
