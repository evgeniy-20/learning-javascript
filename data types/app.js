//                                      Работа с переменными

// Создайте переменную num и присвойте ей значение 3. Выведите значение этой переменной на экран с помощью метода alert.
// let num = 3;
// console.log(num);
// Создайте переменные a=10 и b=2. Выведите на экран их сумму, разность, произведение и частное (результат деления).
// let a = 10;
// let b = 2;
// let c = a + b;
// let f = a - b;
// let g = a * b;
// let h = a / b;
// console.log(c);
// console.log(f);
// console.log(g);
// console.log(h);
// Создайте переменные c=15 и d=2. Просуммируйте их, а результат присвойте переменной result. Выведите на экран значение переменной result.
// let k = 15;
// let d = 2;
// let result = k + d;
// console.log(result);
// Создайте переменные a=10, b=2 и c=5. Выведите на экран их сумму.
// let r = 10;
// let t = 2;
// let y = 5;
// let result1 = r + t + y;
// console.log(result1);
// Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат присвойте переменной c. Затем создайте переменную d, присвойте ей значение 7. Сложите переменные c и d, а результат запишите в переменную result. Выведите на экран значение переменной result.
// let u = 17;
// let i = 10;
// let o = u - i;
// let p = 7;
// let result2 = p + o;
// console.log(result2);
//                                     Работа со строками

// Создайте переменную str и присвойте ей значение 'Привет, Мир!'. Выведите значение этой переменной на экран.
// let str = 'Hello, World';
// console.log(str);
// Создайте переменные str1='Привет, ' и str2='Мир!'. С помощью этих переменных и операции сложения строк выведите на экран фразу 'Привет, Мир!'.
// let str1 = 'Hello, ';
// let str2 = 'World!'
// let result = str1 + str2;
// console.log(result);
// Создайте переменную name и присвойте ей ваше имя. Выведите на экран фразу 'Привет, %Имя%!'.
// let name = 'Hello, Yevhen!';
// console.log(name);
// Создайте переменную age и присвойте ей ваш возраст. Выведите на экран 'Мне %Возраст% лет!'.
// let age = 23;
// let str3 = 'Мне ' + age + ' лет!';
// console.log(str3);
//                                     Функция prompt

// Спросите имя пользователя с помощью методы prompt. Выведите с помощью alert сообщение 'Ваше имя %имя%'.
// let name = prompt('What is your name?');
// alert('My name is ' + name);
// Спросите у пользователя число. Выведите с помощью alert квадрат этого числа.
// let namber = prompt('Введите число');
// let sqrt = namber * namber;
// alert('квадрат числа ' + sqrt);
//                                 Обращение к символам строки

// Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'c' символ 'e'.
// let str = 'abcde';
// console.log(str[0]);
// console.log(str[2]);
// console.log(str[4]);
// Создайте переменную num и присвойте ей значение '12345'. Найдите произведение (умножение) цифр этого числа.
// let num = '12345';
// let result = num[0] * num[1] * num[2] * num[3] * [4];
// console.log(result);
//                                         Практика

// Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце.
// let second = 60;
// let minut = 60;
// let hours = second * minut;
// let day = hours * 24;
// let mounth = day * 30;
// console.log(hours);
// console.log(day);
// console.log(mounth);
// Создайте три переменные - час, минута, секунда. С их помощью выведите текущее время в формате 'час:минута:секунда'.
// let hours = 08;
// let minut = 27;
// let seconds = 54;
// let result = hours + ':' + minut + ':' + seconds;
// console.log(result);
// Создайте переменную, присвойте ей число. Возведите это число в квадрат. Выведите его на экран.
// let num = 6;
// let result = Math.pow(num,2);
// console.log(result);
//                             Работа с присваиванием и декрементами

// Переделайте этот код так, чтобы в нем использовались операции +=, -=, *=, /=. Количество строк кода при этом не должно измениться.

// let num = 47;
// num += 7;
// num -= 18;
// num *= 10;
// num /= 15;
// console.log(num);

// Переделайте этот код так, чтобы в нем использовались операции ++ и --. Количество строк кода при этом не должно измениться.

// let num = 10;
// num++;
// num++;
// num--;
// console.log(num);