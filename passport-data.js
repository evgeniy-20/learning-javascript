function makeUserObject (name,surname,age) {
    this.name = name;
    this.surname = surname;
    this.age = age
}
const makeUserObject1 = new makeUserObject('Evgeniy', 'Prokopiv', 22);
console.log(makeUserObject1);
