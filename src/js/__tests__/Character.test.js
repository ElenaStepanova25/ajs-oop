import Character from '../Character';

describe('Character class', () => {
  test('valid arguments', () => {
    const result = new Character('Character', 'Swordsman');
    expect(result).toEqual({
      name: 'Character',
      type: 'Swordsman',
      health: 100,
      attack: 10, // Начальное значение
      defence: 10, // Начальное значение
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

  test('level up', () => {
    const character = new Character('Character', 'Swordsman');
    character.levelUp();

    expect(character.level).toBe(2);
    expect(character.attack).toBe(12); // 10 * 1.2
    expect(character.defence).toBe(12); // 10 * 1.2
    expect(character.health).toBe(100);
  });

  test('level up dead character', () => {
    const character = new Character('Character', 'Swordsman');
    character.health = 0;

    expect(() => character.levelUp()).toThrowError('нельзя повысить level умершего');
  });

  test('damage calculation', () => {
    const character = new Character('Character', 'Swordsman');
    character.defence = 20; // 20% защиты

    character.damage(10); // 10 * (1 - 0.2) = 8
    expect(character.health).toBe(92); // 100 - 8

    character.damage(100); // 100 * (1 - 0.2) = 80
    expect(character.health).toBe(12); // 92 - 80

    character.damage(20); // 20 * (1 - 0.2) = 16
    expect(character.health).toBe(0); // 12 - 16 = 0
  });

  test('health should not go below 0', () => {
    const character = new Character('Character', 'Swordsman');
    character.damage(200); // 200 * (1 - 0) = 200
    expect(character.health).toBe(0);
  });
});