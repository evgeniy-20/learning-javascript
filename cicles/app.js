//                                                     Циклы while и for

// Выведите столбец чисел от 1 до 100.
// for(let i = 1; i <= 100; i++) {
//     console.log(i);
// }
// // Выведите столбец чисел от 11 до 33.
// for(let i = 11; i <= 33; i++) {
//     console.log(i);
// }
// // Выведите столбец четных чисел в промежутке от 0 до 100.
// for(let i = 0; i <= 100; i++) {
//     console.log(i+2);
// }
// С помощью цикла найдите сумму чисел от 1 до 100.
// let sum = 0;
// for(let i = 1; i <= 100; i++) {
//     sum += i;
//     console.log(sum);
// }
//                                                 Работа с for для массивов

// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for(let i = 0; i < arr.length; i++) {
//     let result = sum + arr[i];
//     console.log(result);
// }
//                                                     Работа с for-in

// Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы этого объекта.
// let obj = {green: 'зеленый', red: 'красный', blue: 'голубой'}
// for (key in obj) {
//     console.log(obj);
// }
//                                                       Задачи

// Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.
// let arr = [2, 5, 9, 15, 0, 4];
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] > 3 && arr[i] < 10) {
//         console.log(arr[i]);
//     }
// }
// Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.
// let arr = [2, 5,-3, 9,-8,-7, 15, 0, 4];
// let result = 0;
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] > 0) {
//         result += arr[i];
//     }
// }
// console.log(result);
// Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.
// let arr = [2,5,9,15,0,4];
// for(let i = 0;  i < arr.length; i++) {
//     if(arr[i] === 4) {
//         console.log('Есть');
//     } 
// }
// Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
// let arr = [10,20,30,50,235,300];
// arr = String(arr);
// for(let i = 0;  i < arr.length; i++) {
//     if(arr[i][0] == 1 || arr[i][0] == 2 || arr[i][0] == 5) {
//         console.log(arr[i]);
//     } 
// }
// Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = ' ';
for(let i = 0;  i < arr.length; i++) {
    result = result + '-' + arr[i];
}
console.log(result + '-');
