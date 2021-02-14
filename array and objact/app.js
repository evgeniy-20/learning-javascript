//                                 Работа с массивами

// Создайте массив arr = ['a', 'b', 'c']. Выведите его на экран с помощью функции alert.
// let arr = ['a', 'b', 'c'];
// console.log(arr);
// С помощью массива arr из предыдущего номера выведите на экран содержимое первого, второго и третьего элементов.
// let arr1 = ['a', 'b', 'c'];
// console.log(arr1[0]);
// console.log(arr1[1]);
// console.log(arr1[2]);
// Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите на экран строку 'a+b, c+d'.
// let arr2 =  ['a', 'b', 'c', 'd'];
// let result = arr2[0] + arr2[1] + arr2[3] + arr2[4];
// console.log(result);
// Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.
// let arr3 = [2, 5, 3, 9];
// let a = arr3[0] * arr3[1];
// let b = arr3[2] * arr3[3];
// let result = a + b;
// console.log(result);
//                             Объекты (ассоциативные массивы)

// Создайте объект obj. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта:
// var obj = {a: 1, b: 2, c: 3};
// let obj = { 
//     a: 1, 
//     b: 2, 
//     c: 3
// };
// console.log(obj.c);
// Создайте массив заработных плат obj. Выведите на экран зарплату Пети и Коли.
// let obj = {Коля: '1000', Вася: '500', Петя: '200'};
// let obj = { 
//     Коля: '1000', 
//     Вася: '500', 
//     Петя: '200'
// }
// console.log(obj['Коля'], obj['Петя'])
// Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). Выведите на экран текущий день недели.
// let obj = { 
//     1: 'Пн', 
//     2: 'Вт', 
//     3: 'Ср',
//     4: 'Чт', 
//     5: 'Пт', 
//     6: 'Сб',
//     7: 'Нд', 
// }
// console.log(obj['7']);
// Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3. Выведите день недели, соответствующий значению переменной day.
// day = 7;
// let obj = { 
//     1: 'Пн', 
//     2: 'Вт', 
//     3: 'Ср',
//     4: 'Чт', 
//     5: 'Пт', 
//     6: 'Сб',
//     7: 'Нд', 
// }
// console.log(obj[day]);
//                                     Многомерные массивы

// Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.
let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let newArr = arr[1][0];
console.log(newArr);
// Дан объект {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}. Выведите с его помощью слово 'jQuery'.
let obj = {
    js: ['jQuery', 'Angular'], 
    php: 'hello', 
    css: 'world'
}
console.log(obj['js']['0']);
// Создайте двухмерный массив. Первые два ключа - это 'ru' и 'en'. Пусть первый ключ содержит элемент, являющийся массивом названий дней недели по-русски, а второй - по-английски. Выведите с помощью этого массива понедельник по-русски и среду по английски (пусть понедельник - это нулевой день).
let arr1 = {
    ru: [{
        0: 'Пн',
        1: 'Вт',
        2: 'Ср',
        3: 'Чт',
        4: 'Пт',
        5: 'Сб',
        6: 'Вс',
    }
    ],
    en: [{
        0: 'Mo',
        1: 'Tu',
        2: 'We',
        3: 'Th',
        4: 'Fb',
        5: 'Sa',
        6: 'Su',
    }
    ]
}
console.log(arr1['ru'][0], arr1[en][2]);
// Пусть теперь в переменной lang хранится язык (она принимает одно из значений или 'ru', или 'en' - либо то, либо то), а в переменной day - номер дня. Выведите словом день недели, соответствующий переменным lang и day. То есть: если, к примеру, lang = 'ru' и day = 3 - то выведем 'среда'