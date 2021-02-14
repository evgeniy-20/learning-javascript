// let date = new Date();
// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(date.getFullYear());
// let newDate = new Date();
// function getZero(num){
// 	if (num > 0 && num < 10) { 
// 		return '0' + num;
// 	} else {
// 		return num;
// 	}
// }
// console.log(newDate.getHours() + ':' + newDate.getMinutes() + ':' + newDate.getSeconds() + ' ' + getZero(newDate.getDate()) + '.' + getZero(newDate.getMonth() + 1) + '.' + newDate.getFullYear());
// Выведите на экран номер текущего дня недели. Показать решение.
// let date = new Date();
// console.log(date.getDate());
// Выведите на экран текущий день недели (словом, по-русски). Создайте для этого вспомогательную функцию showDay, которая параметром принимает число, а возвращает день недели по-русски. Показать решение.
// let date = new Date();
// let day = date.getDay();
// function showDay(day) {
// 	let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// 	return days[day];
// }
// console.log(showDay(day));
// Узнайте, какой был 7-го января 2015 года. Показать решение.
// let date = new Date(2015,0,7);
// let day = date.getDay();
// const showDays = (day) => {
//     let days = ['вс','пн','вт','ср','чт','пт','сб'];
//     return days[day];
// }
// console.log(showDays(day));
// let date = new Date();
// let minute = Math.floor(date.getTime() / (1000 * 60));
// console.log(minute);
// var time = Date.parse('1988-03-01T00:00:00'); //заданный момент в timestamp
// var date = new Date();
// var now = date.getTime(); //текущий момент в timestamp
// var result = now - time; //найдем разницу в миллисекундах
// result = result / (1000 * 60 * 60); //переведем миллисекунды в часы
// alert(result);
// let date = new Date();
// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(date.getFullYear());
//Выведите на экран текущую дату-время в формате '12:59:59 31.12.2014'. Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014).
// let date = new Date();
// const getZero = (num) => {
//     if(num > 0 && num < 10) {
//         return '0' + num;
//     } else {
//         return num;
//     }
// }
// console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' ' + getZero(date.getDate()) + '.' + getZero(date.getMonth() + 1) + '.' + date.getFullYear());
// let date = new Date();
// let num = date.getDay();
// // console.log(day.getDay());
// const showDay = (num) => {
//     let days = ['вс','пн','вт','ср','чт','пт','сб'];
//     return days[num];
// }
// console.log(showDay(num));
//Узнайте, какой был 7-го января 2015 года.
// let date = new Date(2015, 0, 7);
// let newDate = date.getDay();
// const showDay = (newDate) => {
//     let days = ['вс','пн','вт','ср','чт','пт','сб'];
//     return days[newDate];
// }
// console.log(showDay(newDate));
// let date = new Date;
// console.log(date.getTime());
//Выведите на экран количество минут с 1-го января 1970 года до настоящего момента времени.
// let date = new Date;
// let minets = Math.floor(date.getTime() / (100 * 60));
// console.log(minets);
function go(){
    window.setInterval(timer, 1000);
}
function timer(){
    var test = document.getElementById('test');
    test.innerHTML = parseInt(test.innerHTML)+1;
}
