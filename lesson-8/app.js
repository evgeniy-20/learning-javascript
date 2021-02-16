// Создайте переменную num и присвойте ей значение 3. Выведите значение этой переменной на экран с помощью метода alert.
// let num = 3;
// alert(num);
// Создайте переменные a=10 и b=2. Выведите на экран их сумму, разность, произведение и частное (результат деления).
// let a = 10;
// let b = 2;
// let result = a + b;
// console.log(result);
// Создайте переменные c=15 и d=2. Просуммируйте их, а результат присвойте переменной result. Выведите на экран значение переменной result.
// let a = 15;
// let b = 2;
// let result = a + b;
// console.log(result);
// Создайте переменные a=10, b=2 и c=5. Выведите на экран их сумму.
// let a = 10;
// let b = 2;
// let c = 5
// let result = a + b + c;
// console.log(result);
// Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат присвойте переменной c. Затем создайте переменную d, присвойте ей значение 7. Сложите переменные c и d, а результат запишите в переменную result. Выведите на экран значение переменной result.
// let a = 17;
// let b = 10;
// let c = a - b;
// let d = 7;
// let result = c + d;
// console.log(result);
// Создайте переменную str и присвойте ей значение 'Привет, Мир!'. Выведите значение этой переменной на экран.
// let str = 'Привет, Мир!';
// console.log(str);
// Создайте переменные str1='Привет, ' и str2='Мир!'. С помощью этих переменных и операции сложения строк выведите на экран фразу 'Привет, Мир!'.
// let str1 = 'Привет, ';
// let str2 = 'Мир!';
// let result = str1 + str2;
// console.log(result);
// Создайте переменную name и присвойте ей ваше имя. Выведите на экран фразу 'Привет, %Имя%!'.
// let name = 'Yevhen!';
// let str2 = 'Привет, ';
// let result = str2 + name;
// console.log(result);
// Создайте переменную age и присвойте ей ваш возраст. Выведите на экран 'Мне %Возраст% лет!'.
// let age = 23;
// let str1 = "Мне ";
// let str2 = " лет!"
// let result = str1 + age + str2;
// console.log(result);
// Спросите имя пользователя с помощью методы prompt. Выведите с помощью alert сообщение 'Ваше имя %имя%'.
// let age = 23;
// let str1 = "Мне ";
// let str2 = " лет!"
// let result = str1 + age + str2;
// console.log(result);
// Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.
// let arr = [2,5,9,15,0,4];
// for(let i = 0;  i <= arr.length; i++) {
//     if(arr[i] > 3 && arr[i] < 10) {
//         console.log(arr[i]);
//     }
// }
// Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.
// let arr = [2,-5,9,15,0,-4];
// let result = 0;
// for(let i = 0;  i <= arr.length; i++) {
//     if(arr[i] > 0) {
//         result += arr[i]
//     }
// }
// console.log(result);
// Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.
// let arr = [2,5,9,15,0,4];
// for(let i = 0;  i < arr.length; i++) {
//     if(arr[i] === 4) {
//         console.log('Есть');
//     } else {
//         console.log('Нету');
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
// Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b. Показать решение.
// let a = 10;
// let b = 3;
// let result = a % b;
// console.log(result);
// Даны переменные a и b. Проверьте, что a делится без остатка на b. Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления. Показать решение.
// let a = 14;
// let b = 3;
// let result = a % b;
// if( result != 0) {
//     console.log('Делится c остатком ' + result);
// } else {
//     console.log('Делится,  результат ' + (a / b));
// }
// Возведите 2 в 10 степень. Результат запишите в переменную st.
// let pow = Math.pow(2,10);
// console.log(pow);
// // Найдите квадратный корень из 245.
// let sqrt = Math.sqrt(245);
// console.log(sqrt);
// Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.
// let arr = [4, 2, 5, 19, 13, 0, 10];
// let result = 0;
// for(let i = 0; i <= arr.length; i++) {
//     result += Math.pow(i, 3);
// }
// console.log(Math.sqrt(result));
// Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
// let sqrt = Math.sqrt(379);
// let round = Math.round(sqrt);
// let ceil = Math.ceil(sqrt);
// let floor = Math.floor(sqrt);
// console.log(round);
// console.log(ceil);
// console.log(floor);
//  Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.
// Выведите на экран случайное целое число от 1 до 100.
// let a = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
// console.log(a);
// //Заполните массив 10-ю случайными целыми числами. (Подсказка: нужно воспользоваться циклами for или while). Показать решение.
// var arr = [];
// for (i = 0; i < 10; i++) {
// 	arr[i] = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
// }
// console.log(arr);
// Даны переменные a и b. Найдите найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b.
// let a = 6;
// let b = 18;
// let c = Math.abs(a - b);
// console.log(c);
// Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. Сделайте так, чтобы в любом случае в переменную c записалось положительное значение. Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.
// let a = 6;
// let b = 1;
// let c = Math.abs(a - b);
// console.log(c);
// Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
// let arr = [12, 15, 20, 25, 59, 79];
// let sum = 0;
// let result = 0;
// for(let i = 0; i <= arr.length; i++) {
//     sum += arr[i];
//     result = sum / arr.length;
// }
// console.log(result);
// //  Напишите скрипт, который будет находить факториал числа. Факториал (обозначается !) - это произведение (умножение) всех целых чисел, меньше данного, и его самого. Например, 4! = 1*2*3*4.
// Дана строка 'js'. Сделайте из нее строку 'JS'.
// let str = 'js'
// console.log(str.toUpperCase());
// // Дана строка 'JS'. Сделайте из нее строку 'js'.
// let str1 = 'JS'
// console.log(str1.toLowerCase());
//Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
// let arr1 =  [1, 2, 3];
// let arr2 = [4, 5, 6];
// let c = arr1.concat(arr2);
// console.log(c);
//Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
// let arr1 =  [1, 2, 3];
// let c = arr1.reverse();
// console.log(c);
// Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
// let arr = [1,2,3];
// arr.push(4,5,6);
// console.log(arr);
// Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
// let arr = [1,2,3];
// arr.unshift(4,5,6);
// console.log(arr);
// Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
// let arr = ['js', 'css', 'jq'];
// arr.shift();
// console.log(arr);
// Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
// let arr = ['js', 'css', 'jq'];
// let newArr = arr.shift();
// console.log(newArr);
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.slice();
// console.log(newArr);
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']
// Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
// let arr = [3, 4, 1, 2, 7];
// let newArr = arr.sort();
// console.log(newArr);
// Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
// const getNumber = (num) => {
//     let newNum = Math.pow(num, 2);
//     return newNum;
// }
// console.log(getNumber(125));
// Сделайте функцию, которая возвращает сумму двух чисел.
// const getNumber = (num1, num2) => {
//     let result = num1 + num2;
//     return result;
// }
// console.log(getNumber(5,4));
// Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
// const getNumber = (num1, num2, num3) => {
//     let result = (num1 - num2) / num3;
//     return result;
// }
// console.log(getNumber(15,3,3));
// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
// const getNumber = (num1, num2, num3) => {
//     let result = (num1 - num2) / num3;
//     return result;
// }
// console.log(getNumber(15,3,3));
// Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.
// const getNum = (num1, num2) => {
//     return num1 === num2;
// }
// console.log(getNum(5,5));
// Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть функция вернет true, а если нет - false.
// const getNum = (num1, num2) => {
//     let sum = num1 + num2;
//     return sum > 10;
// }
// console.log(getNum(5,7));
// Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.
// const getNum = (num) => {
//     return num > 0;
// }
// console.log(getNum(7));
// var arr = [1, 2, 3, -1, -2, -3];
// function isPositive(num) {
// 	if (num >=0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// var newArr = [];
// for (var i = 0; i <= arr.length; i++) {
// 	if (isPositive(arr[i])) {
// 		newArr.push(arr[i]);
// 	}
// }
// console.log(newArr);
// Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
// const isNumberInRange = (num) => {
//     return num > 0 && num < 10;
// }
// console.log(isNumberInRange(11));
// Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.
// let arr = [3,6,7,9,13,15,34,23,45,67]
// const isNumberInRange = (num) => {
//     return num > 0 && num < 10;
// }
// let newArr = [];
// for (let i = 0; i <= arr.length; i++) {
// 	if (isNumberInRange(arr[i])) {
// 		newArr.push(arr[i]);
// 	}
// }
// console.log(newArr);
//  Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.
// const getDigitsSum = (num) => {
// 	let sum = 0;
// 	let str = String(num);
// 	for(let i = 0; i < str.length; i++) {
// 		sum += Number(str[i]);
// 	}
// 	return sum;
// }
// console.log(getDigitsSum(67));
//  Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.
// const getDigitsSum = (num) => {
// 	let sum = 0;
// 	let str = String(num);
// 	for(let i = 0; i < str.length; i++) {
// 		sum += Number(str[i]);
// 	}
// 	return sum;
// }
// let newArr = [];
// for(let i = 1; i <= 2020; i++) {
// 	if(getDigitsSum(str[i]) === 13) {
// 		newArr.push(str[i]);
// 	}
// }
// console.log(newArr);
//  Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
// const isNumberInRange = (num) => {
//     return num  % 2 === 0;
// }
// console.log(isNumberInRange(99));
//  Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
// let arr = [1,2,3,4,5,6,7,8,9];
// const isEven = (num) => {
//     return num  % 2 === 0;
// }
// function getDivisors(num) {
// 	var result = [];
// 	for (var i = 1; i <= num; i++) {
// 		if(num % i == 0) {
// 			result.push(num);
// 		}
// 	}
// 	return result;
// }
// console.log(getDivisors(24));
// const getSum = (arr) => {
// 	let sum = 0;
// 	for(let i = 0; i < arr.length; i++) {
// 		let sqrt = Math.pow(arr[i],2);
// 		sum += sqrt;
// 	}
// 	return sum
// }
// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 7, 8];
// console.log(getSum(arr1));
// console.log(getSum(arr2));
// Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.
// let str = 'я учу javascript!'
// let newStr = str.length;
// console.log(newStr);
// Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).
// let str = 'я учу javascript!'
// let newStr = str.substr(2,3);
// console.log(newStr);
// let str = 'я учу javascript!'
// let newStr = str.substring(2,5);
// console.log(newStr);
// let str = 'я учу javascript!'
// let newStr = str.slice(2,5);
// console.log(newStr);
// Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.
// let str = 'я учу javascript!'
// let newStr = str.indexOf('javascript');
// console.log(newStr);
//Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены.
// let str = 'Я-учу-javascript!';
// let newStr = str.replace(/-/g, '!');
// // console.log(newStr);
// // Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.
// let str = 'я учу javascript!';
// let newStr = str.split(' ');
// console.log(newStr);
// Дана строка 'я учу javascript!'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.
// Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.
// let str = 'я учу javascript!';
// let newStr = str.split('');
// console.log(newStr);
// В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.
// let str = '2025-12-31';
// let arr = str.split('-');
// let newStr = arr[2] + '.' + arr[1] + '.' + arr[0];
// console.log(newStr);
//Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.
// let arr = ['я', 'учу', 'javascript', '!'];
// let str = arr.join("+");
// console.log(str);
// Преобразуйте первую букву строки в верхний регистр.
// let str = 'я учу javascript!';
// let newStr = str[0].toUpperCase() + ' учу javascript!';
// console.log(newStr);
// Преобразуйте первую букву каждого слова строки в верхний регистр.
// let str = 'я учу javascript!';
// let newStr = str[0].toUpperCase() + str[2].toUpperCase() + 'чу' + str[6].toUpperCase() + 'avascript!';
// console.log(newStr);
// Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.
// let str = 'var_test_text';
// let arr = str.split('_')
// let newStr = 'var' + arr[3].toUpperCase() + 'est' + arr[7].toUpperCase() + 'ext';
// console.log(newStr);
//Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let result = arr1.concat(arr2);
// console.log(result);
// Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
// let arr1 = [1, 2, 3];
// let result = arr1.reverse();
// console.log(result);
// Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
// let arr1 = [1, 2, 3];
// arr1.push(4,5,6);
// console.log(arr1);
// //Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
// let arr2 = [1, 2, 3];
// arr2.unshift(4,5,6);
// console.log(arr2);
//Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
// let arr1 = ['js', 'css', 'jq'];
// let result = arr1.pop();
// console.log(result);
// //Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
// let arr2 = ['js', 'css', 'jq'];
// let result1 = arr2.shift();
// console.log(result1);
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1,2);
// console.log(arr);
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
// let arr = [1, 2, 3, 4, 5];
// let result = arr.splice(1,3);
// console.log(result);
//Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
// let arr = [3, 4, 1, 2, 7];
// let result = arr.sort();
// console.log(result);
// Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
// let obj = {js:'test', jq: 'hello', css: 'world'};
// let result = Object.keys(obj);
// console.log(result);
// Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения
// let str = 'Evgeniy';
// let newStr = str[0].toUpperCase() + str[1].toUpperCase() + 'geniy';
// console.log(newStr);
// let str = 'Evgeniy';
// let newStr = str[0].toUpperCase() + str.substr(1);
// console.log(newStr);
// //Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321') не используя цикл.
// let str = '654321';
// let newStr = str.split().reverse().join('');
// console.log(newStr);
// var str = 'http://phphtml';
// if (str.substr(0, 7) == 'http://') {
// 	console.log('Да');
// } else {
// 	console.log('Нет');
// }
// var str = 'index.html';
// if (str.substr(-5) == '.html') {
// 	alert('Да');
// } else {
// 	alert('Нет');
// }
// Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
// const getNum = (num) => {
// 	return Math.pow(num,2);
// }
// console.log(getNum(6));
// Сделайте функцию, которая возвращает сумму двух чисел.
// const getNum = (num1,num2) => {
// 	let sum = num1 + num2;
// 	return sum;
// }
// console.log(getNum(6,7));
// Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
// const getNum = (num1,num2,num3) => {
// 	let sum = (num1 - num2) / num3;
// 	return sum;
// }
// console.log(getNum(6,4,2));
// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
// let arr = [1,2,3,4,5,6,7];
// let str = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"] 
// const getNum = (arr) => {
// 	return str;
// }
// console.log(getNum());
// Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.
// const getNum = (num1,num2) => {
// 	return num1 === num2;
// }
// console.log(getNum(6,5));
// Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть функция вернет true, а если нет - false.
// const getNum = (num1,num2) => {
// 	let sum = num1 + num2;
// 	return sum > 10;
// }
// console.log(getNum(6,9));
// Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false
// const getNum = (num) => {
// 	return num > 0;
// }
// console.log(getNum(-6));
// С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.
// let str = '';
// for(let i = 1; i <= 9; i++) {
// 	str += i;
// }
// console.log(str);
// С помощью цикла for сформируйте строку '987654321' и запишите ее в переменную str.
// let str = '';
// for(let i = 9; i >= 1; i--) {
// 	str += i;
// }
// console.log(str);
// С помощью цикла for сформируйте строку '-1-2-3-4-5-6-7-8-9-' и запишите ее в переменную str.
// let str = '';
// for(let i = 1; i <= 9; i++) {
// 	str += '-' + i;
// }
// console.log(str);
// Нарисуйте пирамиду, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
// let str = '';
// for(let i = 1; i <= 9; i++) {
// 	str += '-' + i;
// }
// console.log(str);
//Создайте массив с элементами массив с элементами 'a', 'b', 'c', 'd'. Выведите с его помощью на экран строку 'a+b+c+d'.
// let arr = ['a', 'b', 'c', 'd'];
// let newArr = arr[0] + '+' + arr[1] + '+' + arr[2] + '+'  + arr[3];
// console.log(newArr);
//Создайте массив с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.
// let arr = [2, 5, 3, 9];
// let arr1 = arr[0] * arr[1];
// let arr2 = arr[2] * arr[3];
// let result = arr1 + arr2;
// console.log(result);
//Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента число 1, вместо второго - 2, вместо третьего - 3.
// let arr = ['a','b','c'];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// console.log(arr);
//Создайте массив с числами. Прибавьте к каждому элементу массива число 3. Выведите на экран измененный массив.
// let arr = [1,2,3]
// arr[0] += 3;
// arr[1] += 3;
// arr[2] += 3;
// console.log(arr);
//Создайте объект с ключами 1, 2 и 3 и значениями 'a', 'b' и 'c'. Выведите на экран все его элементы.
// let obj = {
//     1: 'a',
//     2: 'b',
//     3: 'c'
// }
// console.log(obj[1]);
// console.log(obj[2]);
// console.log(obj[3]);
//Создайте объект с ключами a, b и c и значениями 1, 2 и 3. Найдите сумму его элементов.
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// let result = obj['a'] + obj['b'] + obj['c'];
// console.log(result);
//Создайте объект с ключами 1a, 2b и с-с и значениями 1, 2 и 3. Найдите сумму его элементов.
// let obj = {
//     '1a': 1,
//     '2b': 2,
//     'c-c': 3
// }
// let result = obj['1a'] + obj['2b'] + obj['c-c'];
// console.log(result);
//Найдите сумму его элементов. Обращайтесь к элементам с помощью изученного синтаксиса.
// let obj = {
//     key1: 1,
//     key2: 2,
//     key3: 3
// }
// let result = obj.key1 + obj.key2 + obj.key3;
// console.log(result);
//Создайте объект user с ключами name (имя), surname (фамилия), patronymic (отчество) и какими-то произвольными значениями. Выведите на экран фамилию, имя и отчество через пробел.
// let user = {
//     name: 'Yevhen ',
//     patronymic: 'Volodymyrovych ',
//     surname: 'Prokopiv',
//     a: '!'
// }
// let result = user.name + user.patronymic + user.surname + user.a;
// console.log(result);
//Создайте объект date (дата) с ключами year (год), year (месяц) и day (день) и значениями, соответствующими текущему дню. Выведите созданную дату на экран в формате 'год-месяц-день'.
// let date = {
//     year: '2020',
//     month: '12',
//     day: '22',
// }
// let result = date.year + '-' + date.month + '-' + date.day;
// console.log(result);
//Создайте объект с ключами a, b и c и элементами 1, 2 и 3.
// let obj = {};
// obj.a = 1;
// obj.b = 2;
// obj.c = 3;
// console.log(obj);
// Дана также переменная key со значением 2.
// Выведите на экран элемент, ключ которого хранится в переменной key.
// let arr = ['a', 'b', 'c'];
// let key = 2;
// console.log(arr[key]);
//Дана также переменная key1 со значением 1 и переменная key2 со значением 2.
//Найдите сумму элементов, ключи которых хранятся в наших переменных.
// let arr = [1, 2, 3, 4, 5];
// let key1 = 1;
// let key2 = 2;
// let result = arr[key1] + arr[key2];
// console.log(result);
//Дано число из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.
// let num = [4,5,6,3,9,3]
// let sum1 = num[0] + num[1] + num[2];
// let sum2 = num[3] + num[4] + num[5];
// if(sum1 === sum2) {
//     console.log('Yes');
// } else {
//     console.log('No')
// }
// for(let i = 1; i <= 100; i++) {
//     if(i % 2 === 0) {
//         console.log(i);
//     }
// }
// for(let i = 1; i <= 100; i++) {
//     if(i % 2) {
//         console.log(i);
//     }
// }
//Выведите в консоль числа от 30 до 0.
// for(let i = 30; i >= 0; i--) {
//     console.log(i);
// }
//Выведите с помощью цикла столбец чисел от 1 до 100.
// for(let i = 1; i <=100; i++) {
//     console.log(i);
// }
// //Выведите с помощью цикла столбец чисел от 100 до 1.
// for(let i = 100; i >=1; i--) {
//     console.log(i);
// }
// //Выведите с помощью цикла столбец четных чисел от 1 до 100.
// for(let i = 1; i <=100; i++) {
//     if(i % 2 === 0) {
//         console.log(i)
//     }
// }
// //Заполните массив 10-ю иксами с помощью цикла.
// let arr = [];
// for(let i = 0; i <= 10; i++) {
//     arr.push('x');
// }
// console.log(arr);
// //Заполните массив числами от 1 до 10 с помощью цикла.
// let newArr = [];
// for(let i = 0; i <= 10; i++) {
//     newArr.push('i')
// }
// //Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.
// for(let i = 0; i <= 10; i++) {
//     if(i > 0 && i < 10) {
//         console.log(i);
//     }
// }
// //Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.
// let arr1 = [2,4,5,6,7,8,9]
// for(let i = 0; i <= arr.length; i++) {
//     if(arr1[i] === 5) {
//         console.log(arr1[i]);
//     }
// }
//Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.
// let arr = [44,56,67,87,98];
// let sum = 0;
// for(let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum);
//Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.
// let arr = [44,56,67,87,98];
// let sum = 0;
// let quert = 0;
// for(let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     quert = Math.pow(sum,2);
// }
// console.log(quert);
//Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).
// let arr = [44,56,67,87,98];
// let sum = 0;
// let result = 0;
// for(let i = 0; i < arr.length; i++) {
//     sum += arr[i]
// }
// result = sum / arr.length;
// console.log(result);
//Напишите скрипт, который будет находить факториал числа. Факториал (обозначается !) - это произведение (умножение) всех целых чисел, меньше данного, и его самого. Например, 4! = 1*2*3*4.
// function factorial(n) {
//     return n ? n * factorial(n - 1) : 1;
//   }
// console.log( factorial(5) )
// Сделать первую и последнюю буквы строки в верхнем регистре. При помощи конкатенации и через шаблонные строки.
// let string = 'some test string';
// string = `${string[0].toUpperCase()}ome one test strin${string[string.length - 1].toUpperCase()}`;
// console.log(string); 
// Найти положение слова 'string' в строке.
// let string = 'some test string';
// let newString = string.indexOf('string')
// console.log(newString);
// Найти положение второго пробела в строке (“вручную” ничего не считать).
// let string = 'some test string';
// let newString = string.indexOf(' ', string.indexOf(' ') + 1);
// console.log(newString);
// Получить строку с 5-го по 9-й символы.
// let string = 'some test string';
// let newString = string.slice(5,9);
// console.log(newString);
// Получить число pi из Math и округлить его до 2-х знаков после точки.
// let number = Math.PI;
// let newString = number.toFixed(2);
// console.log(newString);
// Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51.
// console.log(Math.max(15, 11, 16, 12, 51, 12, 13, 51));
// console.log(Math.min(15, 11, 16, 12, 51, 12, 13, 51));
// Получить случайное число и округлить его до двух цифр после запятой.
// let num = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
// let newNum = num.toFixed(2);
// console.log(newNum);
// Получить случайное целое число от 0 до X. X - любое произвольное число.
// Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
// Создать объект с полем product, равным 'iPhone'.
// let obj = {
//     product: 'iPhone'
// }
// console.log(obj.product);
// Добавить в объект поле price, равное 1000 и поле currency, равное 'dollar'.
// let obj = {
//     product: 'iPhone'
// }
// obj.price = 1000;
// obj.currency = 'dollar'
// console.log(obj);
// Добавить поле details, которое будет содержать объект с полями model и color
let obj = {
    product: 'iPhone'
}
obj.price = 1000;
obj.currency = 'dollar'
obj.details = {
    model: "",
    color: ""
}
console.log(obj);
// Задание с "плюсом" : написать функцию, которая будет делить строку на массив используя функции: calculateChars, findMaxValue
// Дан объект car. Написать условие если поле lastService больше 5 месяцев (из строки нужно достать число) то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.

// let car = { name: 'Lexus', age: 10, lastService: '1 month', create: 2008, needRepair: false }

// Дан следующий код:

// let product = { name: 'Яблоко', price: '10$' };

// let min = 10; // минимальная цена let max = 20; // максимальная цена

// Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товар не найден.

// На основе строки
// “JavaScript is a pretty good language”

// Cделать новую строку, где каждое слово начинается с большой буквы, а пробелы удалены. Использовать цикл for.

// Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива:
// doubleArray([1,2,3]) // [1,2,3,1,2,3]

// Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений:
// changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ],

// changeCollection([1,2,3]) → [ [2,3] ] и т.д*.*

// Дан массив пользователей:

// [ { "_id": "5d1c3860aa841704d3245513", "isActive": false, "balance": 2764.35, "age": 33, "name": "Allie Blair", "gender": "female", "company": "PHOTOBIN", "email": "allieblair@photobin.com", "phone": "+1 (951) 566-2987", "registered": "2018-11-30T02:29:00 -02:00" }, { "_id": "5d1c386095ffb689687f2db9", "isActive": false, "balance": 3276.25, "age": 22, "name": "Yesenia Leblanc", "gender": "female", "company": "SKINSERVE", "email": "yesenialeblanc@skinserve.com", "phone": "+1 (947) 446-2840", "registered": "2015-10-31T01:10:31 -02:00" }, { "_id": "5d1c3860e73ff2a338722e81", "isActive": true, "balance": 1868.65, "age": 38, "name": "Mamie Kramer", "gender": "female", "company": "EARBANG", "email": "mamiekramer@earbang.com", "phone": "+1 (885) 564-3305", "registered": "2014-06-03T09:36:40 -03:00" }, { "_id": "5d1c386000e4f2fc62be1b1e", "isActive": true, "balance": 1003.15, "age": 32, "name": "Crawford Bryant", "gender": "male", "company": "DIGIRANG", "email": "crawfordbryant@digirang.com", "phone": "+1 (889) 408-2141", "registered": "2015-01-15T05:20:21 -02:00" }, { "_id": "5d1c386008ff236a315d638b", "isActive": false, "balance": 3045.41, "age": 36, "name": "Helene Holland", "gender": "female", "company": "HYDROCOM", "email": "heleneholland@hydrocom.com", "phone": "+1 (937) 554-2040", "registered": "2014-09-15T08:22:59 -03:00" }, { "_id": "5d1c3860b4c27c4d5fdb6c1f", "isActive": true, "balance": 1693.51, "age": 23, "name": "Hernandez Osborn", "gender": "male", "company": "TERRASYS", "email": "hernandezosborn@terrasys.com", "phone": "+1 (965) 595-3942", "registered": "2016-08-06T12:19:01 -03:00" } ]

// Создать функцию которая принимает массив пользователей, поле которое по которому хочу фильтровать, значение на которое хочу фильтровать. Возвращать новый массив с пользователями соответсвующие указанным параметрам. Пример результата:

// <code>funcGetUsers(users, "gender", "male"); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]</code>
// Задание с плюсом: 
// Оптимизировать имеющийся функции с помощью методов, которые, были пройдены на занятии. Внедрить шапку в текущее приложение приложения и вывести в нее кол - во товаров и их общую стоимость.