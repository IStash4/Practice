class human {
  constructor(name,age,country){
    this.name = name;
    this.age = age;
    this.country = country;
  }

  output(){
    return `Меня зовут ${this.name} , мне лет ${this.age}, я из ${this.country}.`
  }
}
const human1 = new human("Антон", 22, "Беларусь");
const human2 = new human("Стив", 16, "США");
console.log(human1.output());
console.log(human2.output());
