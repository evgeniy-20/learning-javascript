const makeUserObject = (name,surname,age) => {
    const result = {
        name: name,
        surname: surname,
        age: age
    }
    return result
}
const makeUserObject1 = new makeUserObject('Evgeniy', 'Prokopiv', 22);
console.log(makeUserObject1);
