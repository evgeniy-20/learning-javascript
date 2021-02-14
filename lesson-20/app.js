// Выведите на экран текущий день. 
// let date = new Date();
// console.log(date.getDate());
// Выведите на экран текущий месяц. 
// var date = new Date();
// var day = date.getMonth();
// var days = ['Ян', 'Фев', 'Мар', 'Ап', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт','Нояб','Декаб'];
// console.log(days[day]);
// Выведите на экран текущий год. 
// let year = new Date();
// let newYear = year.getFullYear();
// console.log(newYear);
// Выведите на экран текущую дату-время в формате '12:59:59 31.12.2014'. Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014). 
// var date = new Date();
// const getZero = (num) => {
//     if(num > 0 && num < 10) {
//         return '0' + num;
//     } else {
//         return num;
//     }
// }
// console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' ' + getZero(date.getDate()) + '.' + getZero(date.getMonth() + 1) + '.' + date.getFullYear());
// let date = new Date();
// console.log(date.getDay());
//Выведите на экран текущий день недели (словом, по-русски). Создайте для этого вспомогательную функцию showDay, которая параметром принимает число, а возвращает день недели по-русски
// let date = new Date();
// var day = date.getDay();
// const showDay = (day) => {
//     days = ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'];
//     return days[day];
// }
// console.log(showDay(day))
//Узнайте, какой был 7-го января 2015 года.
// let date = new Date(2015, 0, 7);
// var day = date.getDay();
// const showDay = (day) => {
//     days = ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'];
//     return days[day];
// }
// console.log(showDay(day))
// var now = new Date();
// var date = new Date(2021,1,9,07,57,59);
// var diff = now.getTime() - date.getTime();
// console.log(diff);
//Выведите на экран количество минут с 1-го января 1970 года до настоящего момента времени.
// const getYear = () => {
//     let now = new Date(); 
//     let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
//     let dob = new Date(1997, 6, 10); 
//     let dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()); 
//     let age; 
//     age = today.getFullYear() - dob.getFullYear();
//     if (today < dobnow) {
//     age = age-1;
//     }
//     return age;
// }
// console.log(getYear(age))
