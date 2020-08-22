const secretValue = "1234";
const value = '1234';
let result = 'result:'
if(value.length != 4) {
    result = result + "Ошибка!!!"
} else {
    if(value === secretValue) {
        result = result + "Угадал!!!"
    } else {
        result = result + "Не угадал!!!"
    }
}
console.log(result);
const a = 3;
if (a === 5) {
    console.log("yes")
 } else {
    console.log("no")
 }
