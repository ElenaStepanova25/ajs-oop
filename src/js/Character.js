//классы и наследования
export default class Character {
    constructor(name, type) {
      const types = ['Bowerman', 'Swordsman', 'Magician', 'Undead', 'Daemon', 'Zombie'];
  
      if (name.length < 2 || name.length > 10) {
        throw new Error('неверное имя');
      } else {
        this.name = name;
      }
  
      if (!types.includes(type)) {
        throw new Error('неверный тип');
      } else {
        this.type = type;
      }
  
      this.health = 100;
      this.level = 1;
  
      this.attack = 10;
      this.defence = 10;
    }
  // методы
    levelUp() {
      if (this.health > 0) {
        this.level += 1;
        this.attack *= 1.2;
        this.defence *= 1.2;
        this.health = 100;
      } else {
        throw new Error('нельзя повысить level умершего');
      }
    }
  
    damage(points) {
      this.health -= points * (1 - this.defence / 100);
      if (this.health < 0) {
        this.health = 0;
      }
    }
  }