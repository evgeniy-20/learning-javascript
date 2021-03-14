// let date = new Date();
// let newDay = date.getDate();
// let newMonth = date.getMonth();
// let newYear = date.getFullYear();
// console.log(newDay);
// console.log(newMonth);
// console.log(newYear);
// let date = new Date();
// const getDate = (num) => {
//     if(num > 0 && num < 0) {
//         return num + '0';
//     } else {
//         return num;
//     }
// }
// console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' ' + getDate(date.getDate()) + '.' + getDate(date.getMonth()) + '.' 
// + getDate(date.getFullYear()));
// let date = new Date();
// let newDate = date.getDay();
// console.log(newDate);
//Выведите на экран текущий день недели (словом, по-русски). Создайте для этого вспомогательную функцию showDay, которая параметром принимает число, а возвращает день недели по-русски
// let date = new Date();
// let day = date.getDay();
// const showDay = (day) => {
//     let days = ['Вс','Пн', 'Вт','Ср','Чт','Пт','Сб'];
//     return days[day];
// }
// console.log(showDay(day));
// let date = new Date(2021,5,10);
// let day = date.getDay();
// const showDay = (day) => {
//     let days = ['Вс','Пн', 'Вт','Ср','Чт','Пт','Сб'];
//     return days[day];
// }
// console.log(showDay(day));
// Выведите на экран количество минут с 1-го января 1970 года до настоящего момента времени.
// let date = new Date();
// var minute = Math.floor(date.getTime() / (1000 * 60));
// console.log(minute);
let date = new Date(2021,2,14);
let result = date.getTime();
console.log(result);