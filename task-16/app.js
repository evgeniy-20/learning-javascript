let a;
a = 10
a = 20
console.log(a);
let a = 4;
let b = 6;
let c = a + b;
let i = a - b;
let j = a * b;
let g = a / b;
console.log(c);
console.log(i);
console.log(j);
console.log(g);
let a = 10;
let b = 5;
let c = a - b;
let d = 7;
let result = c + d;
console.log(result);
let a = -10 / 0;
console.log(a);
const hour = 60;
const year = 365;
const day = 24;
const minuts = hour * year * day;
console.log(minuts);
let a = Number('10');
let b = Number('20');
let c = a + b;
console.log('2' + Number('3') );
let a = +'2';
let b = +'3';
console.log(a + b);
Дана переменная со значением 5px и переменная со значением 6px. Найдите сумму пикселей из значений этих переменных и выведите ее на экран.
const a = parseFloat('5px');
const b = parseFloat('6px');
const c = a + b;
console.log(c);
Дана переменная со значением 5.5px и переменная со значением 6.25px. Найдите сумму пикселей из значений этих переменных и выведите ее на экран.
const a = parseInt('5.5px');
const b = parseInt('6.25px');
const c = a + b;
console.log(c);
Модифицируйте предыдущую задачу так, чтобы к выводящемуся результату добавлялись буквы 'px'. То есть, если наша сумма равна 11.75, то на экран пусть выведется 11.75px.
const a = parseFloat('5.5px');
const b = parseFloat('6.25px');
const c = a + b;
console.log(c + "px");
Даны две переменные с числами. Сложите значения этих переменных как строки и выведите результат на экран.
const num1 = 2;
const num2 = 3;
const result = String(num1) + String(num2);
alert(result);
Дана переменная с числом. Найдите количество цифр в этом числе.
const num = 1234567890;
const str = String(num).length;
console.log(str);
Даны две переменные с числами. Найдите количество цифр в одном и во втором числе, результаты сложите и выведите на экран.
const num1 = 124698469086689486749867985746834706784076847958675869458757567895768579345;
const num2 = 678994639830e82048586998570965068590689586958695806596809596859869508695086958695868956895686958690596859860956898409869582592840989;
const result = String(num1).length + String(num2).length;
console.log(result);
let test = Boolean(NaN);
console.log(test);
Дана строка 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'c', символ 'e'.
const str = 'abcde';
console.log(str[0])
console.log(str[2])
console.log(str[4])
//Дана переменная со строкой 'abcde'. Обращаясь к отдельным символам этой строки запишите в новую переменную символы этой строки в обратном порядке, то есть 'edcba'.
const str = 'abcde';
const newStr = '';
console.log(str[0])
//Дана переменная str со строкой 'abcde' и переменная num с номером символа. Выведите на экран символ, номер которого хранится в переменной num.
let num = 10;
num++;
num++
num--;
console.log(num);
let num1 = Number(prompt('сторону квадрата'));
let num2 = Number(prompt('Введите второе число'));
alert(num1 + num2);
const arr = ['a', 'b', 'c', 'd']
console.log(arr[0], '+', arr[1], '+', arr[2], '+', arr[3]);
Создайте массив с элементами 1, 2 и 3. Выведите на экран сумму этих элементов.
const arr = [1,2,3];
const newArr = arr[0] + arr[1] + arr[2];
console.log(newArr);
Создайте массив с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.
const arr = [2,5,3,9];
const arr1 = arr[0] * arr[1];
const arr2 = arr[2] * arr[3];
const result = arr1 + arr2;
console.log(result);
const arr = [1,2,3,4,5,6,7,0,9,8,0,9,8,,6,5,4,3,1,2,3,4,5,6,7,8,9,5,4,5]
console.log(arr[arr.length - 1])
Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента число 1, вместо второго - 2, вместо третьего - 3.
const arr = ['a','b','c']
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
console.log(arr)
Создайте массив с числами. Прибавьте к каждому элементу массива число 3. Выведите на экран измененный массив.
const arr = [67,78,95]
arr[0] += 3;
arr[1] += 3;
arr[2] += 3;
console.log(arr)
Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте каждый элемент массива на единицу.
const arr = [1,2,3]
arr[0]++;
++arr[1];
arr[2]++;
console.log(arr)
С помощью описанного приема создайте массив с элементами 1, 2 и 3.
const arr = []
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
console.log(arr)
Пусть дан такой массив.Добавьте ему в конец элементы 4 и 5.
const arr = [1,2,3]
arr[3] = 4;
arr[4] = 5;
console.log(arr)
Создайте объект с ключами 1, 2 и 3 и значениями 'a', 'b' и 'c'. Выведите на экран все его элементы.
const obj = {
    1: 'a',
    2: 'b',
    3: 'c'
}
console.log(obj[1]);
console.log(obj[2]);
console.log(obj[3]);
Создайте объект с ключами a, b и c и значениями 1, 2 и 3. Найдите сумму его элементов.
const obj  = {
    a: 1,
    b: 2,
    c: 3
}
const result = obj['a'] + obj['b'] + obj['c'];
console.log(result);
Создайте объект с ключами 1a, 2b и с-с и значениями 1, 2 и 3. Найдите сумму его элементов
const obj = {
    '1a': 1,
    '2b': 2,
    'c-c': 3
}
const result = obj['1a'] + obj['2b'] + obj['c-c'];
console.log(result);
let arr = ['a', 'b', 'c'];
let key = 2;
console.log(arr[key]);
let arr = [1, 2, 3, 4, 5];
let key1 = 1;
let key2 = 2;
let result = arr[key1] + arr[key2]
console.log(result);
let obj = {'a': 1, 'b': 2, 'c': 3};
let key = 'b';
console.log(obj[key]);
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr1[0] = 'a';
arr2[0] = 'b';
console.log(arr2);
Если переменная test больше 10, то выведите на экран слово 'верно', иначе выведите слово 'неверно'.
let test1 = '3';
let test2 = '3';
		
if (test1 === test2) {
	console.log('верно');
} else {
	console.log('неверно');
}
Если переменная num больше нуля и меньше 5, то выведите на экран слово 'верно', иначе выведите слово 'неверно'.
const num = 3;
if(num > 0 && num < 5) {
    console.log('верно')
} else {
    console.log('неверно')
}
Если переменная num больше или равна 10 и меньше или равна 20, то выведите на экран слово 'верно', иначе выведите слово 'неверно'.
const num = 15;
if(num >= 10 && num <= 20) {
    console.log('верно')
} else {
    console.log('неверно')
}
Если переменная num1 равна или меньше 1, а переменная num2 больше или равна 3, то выведите на экран слово 'верно', иначе выведите слово 'неверно'.
const num1 = -5;
const num2 = 6;
if(num1 <= 1 && num2 >= 3) {
    console.log('верно')
} else {
    console.log('неверно')
}
const test = 5;
if (test === 10) {
    console.log('Верно')
}
const test = 0;
// if (test == 0) console.log('верно'); else console.log('неверно!');
if (test == 0) console.log('верно');
В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
const day = 35;
if(day >= 0 && day <= 10) {
    console.log('dacade-1');
} else if(day >= 11 && day <= 21) {
    console.log('dacade-2');
} else if(day >= 22 && day <= 31) {
    console.log('dacade-3');
} else {
    console.log('Такова числа нету!')
}
let age = 18;
let adult;
if (age >= 18) {
	adult = true;
} else {
	adult = false;
}
console.log(adult);
В переменной arr содержится некоторый массив с числами.Напишите условие, которое проверит, что в массиве 3 элемента. Если это так, выведите на экран сумму элементов массива.
const arr = [65,67,75]
const result = arr[0] + arr[1] + arr[2];
if(arr.length <= 3) {
    console.log(result);
} 
Дано целое число. Напишите условие, которое проверит, равна ли последняя цифра этого числа нулю.
let num = '123450';
let newNum = num[num.length -1];
if(newNum == 0) {
    console.log('Верно')
}
const num = 17;
const result = num % 3;
if(result === 0) {
    console.log('делится нацело')
} else {
    console.log('делится с остатком ' + result)
}
В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
const month = 2;
if(month >= 0 && month <= 3) {
    console.log('Зима')
} else if(month >= 4 && month <= 6) {
    console.log('Весна')
} else if(month >= 7 && month <= 9) {
    console.log('Лето')
} else if(month >= 10 && month <= 12) {
    console.log('Осень')
}
Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.
let str = 'abcde';
let newStr = str[0];
if(newStr === 'a') {
    console.log('Yes')
} else {
    console.log('No')
}
Дано число, например, 12345. Проверьте, что первым символом этого числа является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.
const num = 12345;
const newNum = String(num);
if(newNum[0] == 1 || newNum[0] == 2 || newNum[0] == 3) {
    console.log('Yes')
} else {
    console.log('No')
}
Дано трехзначное число. Найдите сумму цифр этого числа.
const num = '987';
const sum = num[0] + num[1] + num[2];
console.log(sum);
Дано число из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.
const str = '468249';
	if (($str[0]+$str[1]+$str[2]) == ($str[3]+$str[4]+$str[5]))
		echo 'Да';
	else
		echo 'Нет';
let a = 2 * (3 - 1);
let b = 6 - 2;
let result = a == b;
console.log(result);
let a = 5 * (7 - 4);
let b = 1 + 2 + 7;
let result = a > b;
console.log(result);
let a = 2 ** 4;
let b = 4 ** 2;
let result = a != b;
console.log(result);
let ok = confirm('Есть ли Вам уже 18 лет');

if (ok) {
	alert('для взрослых');
} else {
	alert('доступ пользователю запрещен');
}
Выведите в консоль числа от 1 до 100.
for(let i = 1; i <= 100; i++) {
    console.log(i);
}
for(let i = 0; i <= 100; i++) {
    console.log(i++);
}
for(let i = 1; i <= 99; i--) {
    if(i % 1 === 0) {
        console.log(i);
    }
}
for(let i = 100; i >= 0; i--) {
    console.log(i)
}
let result = 0;
for (let i = 1; i <= 100; i++) {
	result = result + i;
}
console.log(result);
Дан массив с элементами 'a', 'b', 'c', 'd', 'e'. С помощью цикла for выведите все эти элементы на экран.
let arr = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
	if (arr[i] % 2) {
		console.log(arr[i]);
	}
}
let result = 0;
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
	result += arr.pow(i,2);
}
console.log(result);
Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for-of найдите сумму элементов этого массива.
let arr = ['a', 'b', 'c', 'd', 'e'];
for (let elem of arr) {
	if (elem == 'c') {
		console.log('есть');
	} else {
		console.log('нету')
	}
}
let str = ''; 
for (let i = 0; i < 5; i++) {
	str += 0;
}
console.log(str); 
С помощью цикла сформируйте строку 123456789 и запишите ее в переменную str. Выведите значение этой переменной на экран.
let str = '';
for(let i = 1; i <= 9; i++) {
	str += i
}
console.log(str);
let str = '';
for(let i = 9; i > 0; i--) {
	str += i
}
console.log(str);
С помощью цикла сформируйте строку -1-2-3-4-5-6-7-8-9- и запишите ее в переменную str. Выведите значение этой переменной на экран.
let str = ''
for(let i = 1; i < 10; i++) {
	str = str + '-' + i;
}
console.log(str + '-');
for (let i = 1; i <= 100; i++) {
	let str = String(i);
	if (str[0] == 1 || str[0] == 2) {
		console.log(i);
	}
}
Переберите циклом числа от 10 до 1000 и выведите на экран те числа, сумма двух первых цифр которых равна 5.
for(let i = 10; i <= 1000; i++) {
	let str = String(i);
	let str1 = +str[0] + +(str[1]);
	if(str1 == 5) {
		console.log(i);
	}
}
let result = '';
for (let i = 1; i <= 9; i++) {
	result += i;
}
console.log(result);
Переберите циклом числа от 1 до 30 и сложите их как строки.
let result = ' ';
for(let i = 1; i <= 30; i++) {
	result += i;
}
console.log(result);
let result = '';
for (let i = 1; i <= 9; i++) {
	for (let j = 1; j <= 3; j++) {
		result += i;
	}
}
console.log(result);
С помощью двух вложенных циклов выведите на экран следующую строку:
let result = '';
for (let i = 4; i <= 8; i++) {
	for (let j = 4; j <= 8; j++) {
		result = result + ' ' + i + j;
	}
}
console.log(result);
Выведите с помощью цикла столбец чисел от 1 до 100.
for(let i = 1; i <= 100; i++) {
	console.log(i);
}
Выведите с помощью цикла столбец чисел от 100 до 1.
for(let i = 100; i >= 1; i--) {
	console.log(i);
}
Выведите с помощью цикла столбец четных чисел от 1 до 100. 
for(let i = 2; i <= 100; i+=2) {
	console.log(i);
}
Заполните массив 10-ю иксами с помощью цикла.
let result = []
for(let i = 0; i < 10; i++) {
	result[i] = 'x';
}
console.log(result);
Заполните массив числами от 1 до 10 с помощью цикла. 
let result = []
for(let i = 1; i <= 10; i++) {
	result = result + i;
}
console.log(result);
Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла. Дроби округляйте до двух знаков в дробной части. 
let result = []
for(let i = 1; i <= 10; i++) {
	result.push(Math.random().toFixed(2));
}
console.log(result);
Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.
let result = []
for(let i = 1; i <= 10; i++) {
	result.push((Math.random() * 10) + 1);
}
console.log(result);
Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти. Показать решение.
let result = [0,6,7,8,9,1,15,13,18,19,45,65]
for(let i = 0; i <= result.length; i++) {
	if(result[i] > 0 && result[i] < 10) {
		console.log(result[i]);
	}
}
Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5. Как только будет найден первый такой элемент - выведите 'Есть' и оборвите цикл. Если такого элемента нет - ничего не выводите. 
let result = [0,6,7,8,9,1,15,5,18,19,45,65]
for(let i = 0; i <= result.length; i++) {
	if(result[i] === 5) {
		console.log('есть');
		break
	}
}
Дан массив с числами. С помощью цикла найдите сумму элементов этого массива. 
let result = [0,6,7,8,9,1,15,5,18,19,45,65]
let sum = 0;
for(let i = 0; i < result.length; i++) {
    sum += result[i]
}
console.log(sum);
Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива. 
let result = [0,6,7,8,9,1,15,5,18,19,45,65]
let sum = 0;
for(let i = 0; i < result.length; i++) {
    sum = result[i] * result[i]; 
}
console.log(sum);
Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).
let arr = [1, 2, 3, 7, 6, 9];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
	sum += arr[i];
}
let result = sum / arr.length;
console.log(result);
Объявите пустой массив, а затем заполните его числами от 1 до 10. 
let arr = [];
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;
arr[4] = 5;
arr[5] = 6;
arr[6] = 7;
arr[7] = 8;
arr[8] = 9;
arr[9] = 10;
console.log(arr);
Объявите пустой массив, а затем заполните его 5-ю буквами x.
let arr = [];
arr[0] = 'x';
arr[1] = 'x';
arr[2] = 'x';
arr[3] = 'x';
arr[4] = 'x';
console.log(arr);
С помощью цикла заполните массив числами от 1 до 100.
let arr = [];
for(let i = 1; i <=100; i++) {
    arr[i] = i + 1;
}
console.log(arr);
Дан массив с числами. Переберите этот массив циклом и возведите каждый элемент этого массива в квадрат.
let number = [2,3,4,5,6,7,8,9]
for(let i = 0; i < number.length; i++) {
    number[i] = number[i] * number[i]
}
console.log(number);
Дан массив с числами. Переберите этот массив циклом и отнимите от каждого элемента единицу.
let number = [2,3,4,5,6,7,8,9]
for(let i = 0; i < number.length; i++) {
    number[i]++
}
console.log(number);
Дан массив с числами. Переберите этот массив циклом и прибавьте к каждому элементу 10.
let number = [2,3,4,5,6,7,8,9]
for(let i = 0; i < number.length; i++) {
    number[i] += 10
}
console.log(number);
Используя цикл и метод push заполните массив числами от 1 до 10.
let arr = [];
for(let i = 1; i <= 10; i++) {
    arr.push(i);
}
console.log(arr);
Используя цикл и метод push заполните массив 10-ю буквами x.
let arr = [];
for(let i = 1; i <= 10; i++) {
    arr.push('x')
}
console.log(arr);
Используя цикл и метод push заполните массив 10-ю случайными целыми числами. Пусть случайные числа будут в промежутке от 1 до 10.
let arr = [];
for(let i = 1; i <= 10; i++) {
    arr.push(Math.floor(Math.random() * (10 - 1)) + 1)
}
console.log(arr);
let arr = [ 2, 8, -6, 7, 9, -3, 1, 8, -9, 5 ]
let result = []
for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
        result.push(arr[i])
    }
}
console.log(result)
let arr = ['a', 'b', 'c', 'd', 'e'];
let result = [];
for(let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i])
}
console.log(result);
let arr = [];
arr.push('a');
arr.push('b');
arr.push('c');
console.log(arr);
let arr = [];
for (let i = 1; i <= 5; i++) {
	arr.push(i);
}
console.log(arr);
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = [];
for (let elem of arr) {
	if (elem % 2 != 0) {
		result.push(elem);
	}
}
console.log(result);
Объявите пустой объект, а затем заполните его названиями дней недели в качестве ключей, и порядковыми номерами дней недели в качестве значений.
let obj = {};
obj['пн'] = 1;
obj['вт'] = 2;
obj['ср'] = 3;
obj['чт'] = 4;
obj['пт'] = 5;
obj['сб'] = 6;
obj['нд'] = 7;
console.log(obj);
let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let obj = {};
for(let i = 0; i <= 6; i++) {
    obj[arr1[i]] = arr2[i];
}
console.log(obj);
let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let obj = {};
for(let i = 0; i <= 6; i++) {
    obj[arr2[i]] = arr1[i];
}
console.log(obj);
let obj = {'a': 12, 'b': 21, 'c': 13, 'd': 23, 'e': 17};
let result = {};
for (let key in obj) {
	if (obj[key] >= 10 && obj[key] <= 20) {
		result[key] = obj[key];
	}
}
console.log(result);
let obj = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'};
let result = {};
for (let elem in obj) {
	if (elem % 2 != 0) {
		result[elem] = obj[elem];
	}
}
console.log(result);
let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
for (let key in obj) {
	obj[key] = obj[key] ** 2;
}
console.log(obj); 
let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let result = {};
for (let key in obj) {
	result[obj[key]] = key
}
console.log(result); 
let obj = {
    employee1: 100,
    employee2: 200,
    employee3: 300,
    employee4: 400,
    employee5: 500,
    employee6: 600,
    employee7: 700,
};
for(key in obj){
    obj[key] = 110 * obj[key] / 100
}
console.log(obj)
let obj = {
    employee1: 100,
    employee2: 200,
    employee3: 300,
    employee4: 400,
    employee5: 500,
    employee6: 600,
    employee7: 700,
};
for(key in obj){
    if(obj[key] <= 400) {
        obj[key] = 110 * obj[key] / 100
    }
}
console.log(obj)
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let result = {};
for(let i = 0; i < arr1.length; i++){
    result[arr1[i]] = arr2[i]
}
console.log(result)
let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
key_sum = 0;
values_sum = 0;
for(key in obj){
    key_sum = key_sum + Number(key);
    values_sum = values_sum + obj[key]
}
console.log(key_sum / values_sum);
let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let arr1 = []
let arr2 = []
for(key in obj){
    arr1.push(key);
    arr2.push(obj[key]);
}
console.log(arr1);
console.log(arr2);
	
let obj = {
    1: 125,
    2: 225,
    3: 128,
    4: 356,
    5: 145,
    6: 281,
    7: 452,
};
let arr = []

for(key in obj){
    let str = String(obj[key])
    if(str[0] == 1 || str[0] == 2){
        arr.push(obj[key])
    }
}

console.log(arr)
let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let counter = 0;
for (let elem of arr) {
	if (elem == 3) {
		counter++;
	}
}
console.log(counter);
let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let counter = 0;
for (let i = 0; i <= arr.length; i++) {
	if (arr[i] == 3 && arr[i] == 2) {
		counter++;
	}
}
console.log(counter);
let arr = [1, 2, 3, 4, 5];

for (let i = 1; i < arr.length; i++) {
	console.log(arr[i - 1] + arr[i]);
}
let str = '';
for (let i = 0; i < 5; i++) {
	str += 'x';
	console.log(str);
}
let str = '';
for (let i = 1; i <= 9; i++) {
	for (let j = 1; j <= 3; j++) {
        str += i
		console.log(str);
	}
}
let arr = [];
let str = '';
for(let i = 1; i <= 5; i++) {
	str += 'x';
	arr.push(str)
}
console.log(arr);
let arr = [];
for (let i = 1; i <= 5; i++) {
	let str = '';
	for (let j = 0; j < 5; j++) {
		str += i;
	}
	arr.push(str);
}
console.log(arr);
Выведите с помощью цикла столбец чисел от 1 до 100.
for(let i = 1; i <= 100; i++) {
	console.log(i);
}
Выведите с помощью цикла столбец чисел от 100 до 1.
for(let i = 100; i >= 1; i--) {
	console.log(i);
}
Выведите с помощью цикла столбец четных чисел от 1 до 100.
for(let i = 2; i <= 100; i++) {
	console.log(i);
}
Заполните массив 10-ю иксами с помощью цикла.
let arr = []
for(let i = 1; i <= 10; i++) {
	arr.push('x')
}
console.log(arr);
Заполните массив числами от 1 до 10 с помощью цикла.
let arr = []
for(let i = 1; i <= 10; i++) {
	arr.push(i)
}
console.log(arr);
Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.
let arr = [2,6,8,14,16,5,17,4,9,56]
for(let i = 0; i <= arr.length; i++) {
	if(arr[i] > 0 && arr[i] < 10) {
        console.log(arr[i]);
	}
}
Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.
let arr = [2,6,8,14,16,5,17,4,9,56]
for(let i = 0; i <= arr.length; i++) {
	if(arr[i] === 5) {
        console.log('есть');
	}
}
Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.
let arr = [2,6,8,14,16,5,17,4,9,56]
let result = 0
let multti = 1;
for(let i = 0; i <= arr.length; i++) {
	multti = arr.length * arr.length
	result += multti;
}
console.log(result)
Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.

Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).

Напишите скрипт, который будет находить факториал числа. Факториал (обозначается !) - это произведение (умножение) всех целых чисел, меньше данного, и его самого. Например, 4! = 1*2*3*4.
let factorial = 1;
for(let i = 1; i <= 4; i++) {
	factorial = factorial * i;
}
console.log(factorial);
let arr = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
	['j', 'k', 'l'],
];
console.log(arr[3][2]);
console.log(arr[1][1]);
console.log(arr[2][0]);
console.log(arr[0][0]);
let arr = [[1, 2], [3, 4], [5, 6]];
let result = 0
for(let i = 0; i < arr.length; i++) {
	for(let j = 0; j < arr[i].length; j++) {
		result += arr[i][j]
	}
}
console.log(result);
Возведите 2 в 10 степень.
let number = Math.pow(2,10);
console.log(number)
Найдите квадратный корень из 245.
let number = Math.sqrt(245);
console.log(number)
Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.
let number = [4, 2, 5, 19, 13, 0, 10]
let result = 0
for(let i = 0; i <= number.length; i++) {
    result += Math.pow(number.length, 3)
}
console.log(Math.sqrt(result,2));
Дана строка 'js'. Сделайте из нее строку 'JS'.
const str = 'js'
console.log(str.toUpperCase());
Дана строка 'JS'. Сделайте из нее строку 'js'.
const str = 'js'
console.log(str.toLowerCase());
Дан следующий массив:
let arr = [1, 2, 3, 4, 5];
//С помощью метода join слейте его в строку '1-2-3-4-5'.
let newArr = arr.join('-');
console.log(newArr)
Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
let arr = [1,2,3]
arr.push(4,5,6);
console.log(arr);
Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
let arr = [1,2,3]
arr.unshift(4,5,6);
console.log(arr);
Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
let arr = ['js', 'css', 'jq'];
console.log(arr.shift());
console.log(arr.pop());
Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
let arr = [1, 2, 3, 4, 5];
let newArr = arr.slice(0,3);
console.log(newArr);
Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
let arr = [1, 2, 3, 4, 5];
let newArr = arr.slice(3,5);
console.log(newArr);
Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
let arr = [1, 2, 3, 4, 5];
arr.splice(1,2)
console.log(arr);
Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
let arr = [1, 2, 3, 4, 5];
let newArr = arr.splice(1,3)
console.log(newArr);
Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
let arr = [1, 2, 3, 4, 5];
arr.splice(3, 0, 'a', 'b', 'c');
console.log(arr);
Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, 'a', 'b');
arr.splice(6, 0, 'c');
arr.splice(arr.length, 0, 'e');
console.log(arr);
Дан массив с числами. Проверьте, есть ли в этом массиве число 3.
let arr = [1,2,3,4,5];
let newArr = arr.indexOf(3) !== -1;
console.log(newArr);
Преобразуйте последнюю букву строки в верхний регистр.
let str = 'london';
let result = str.slice(0, -1)+ str.slice(-1).toUpperCase();
console.log(result);
let str = 'london';
let result = str.slice(0, 2).toUpperCase() + str.slice(2);
console.log(result);
let str = 'London';
let result = str.slice(0, 1).toLowerCase() + str.slice(1);
console.log(result);
Сделайте функцию, выводящую на экран ваше имя.
const name = () => {
    console.log('Evgeniy')
}
name();
Сделайте функцию, выводящую на экран сумму чисел от 1 до 100.
const number = () => {
	let result = 0;
	for(let i = 1; i <= 100; i++) {
		result += i
	}
	console.log(result)
}
number()
Сделайте функцию, которая параметром принимает число и выводит на экран куб этого числа.
const getNumber = (num) => {
	let result = num * num * num;
	console.log(result)
}
getNumber(25)
Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. В первом случае пусть функция выводит на экран текст '+++', а во втором '---'.
const getNumber = (num) => {
	if(num >- 0) {
        console.log('++++')
	} else {
        console.log('----')
	}
}
getNumber(-6)
Сделайте функцию, которая параметрами принимает 3 числа и выводит на экран сумму этих чисел.
const getNumber = (num1, num2, num3) => {
	const result = num1 + num2 + num3;
	console.log(result);
}
getNumber(5,9,86);
let param1 = 1;
let param2 = 2;
let param3 = 3;
const getNumber = (num1, num2, num3) => {
	const result = num1 + num2 + num3;
	console.log(result);
}
getNumber(param1,param2,param3);
function func(num = 5) {
	console.log(num * num);
}
func(3)
Сделайте функцию, которая параметром принимает число, а возвращает куб этого числа. С помощью этой функции найдите куб числа 3 и запишите его в переменную result.
function func(num) {
	return Math.pow(num,3)
}
console.log(func(3))
function sqrt(num) {
	return Math.sqrt(num);
}
function round(num) {
	return num.toFixed(3);
}
Напишите функцию, которая будет находить сумму квадратов элементов массива.
let arr = [1,2,3,4,5,6]
const getNumber = (arr) => {
	let sum = 0;
	for(let i = 0; i <= arr.length; i++) {
        sum += Math.pow(arr.length,2)
	}
	return sum;
}
console.log(getNumber(arr));
function getDigitsSum(num){
    let result = 0;
    let str = String(num);
    let arr = str.split('');
    for(elemArr of arr){
        result = result + Number(elemArr);
    }
    return result;
}
console.log( getDigitsSum(34) );
const getName = () => {
	return('Evgeniy')
}