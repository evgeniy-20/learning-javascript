// const str = 'abcde';
// console.log(str[0]);
// console.log(str[1]);
// console.log(str[2]);
// console.log(str[3]);
// console.log(str[4]);
// const hour = 60;
// const minuts = 60;
// const day = 24;
// const second = hour * minuts * day;
// console.log(second);
// let num = 1;
// num += 12;
// num -= 14;
// num *= 5;
// num /= 7;
// num++;
// num--;
// console.log(num);
// const k = 10;
// const l = 2;
// let h = k + l;
// let i = k - l;
// let e = k * l;
// let y = k / l;
// let v = 15;
// let d = 2;
// result = v + d;
// let a = 10;
// let b = 2;
// let c = 5;
// res = a + b + c;
// let a = 15;
// let b = 10;
// let c = a - b;
// let d = 7;
// result = c + d;
// console.log(result);
// end numbers
// string
// let str = "Привет, Мир!"
// console.log(str);
// let str1 = "Привет, ";
// let str2 = "Мир!";
// result = str1 + str2;
// console.log(result);
// let name = "Evgeniy";
// res = str1 + name;
// console.log(res);
// let age = 23;
// resu = "Мне " + age + " лет!"
// console.log(resu);
// let str = "abcde"
// let num = 12345;
// num[0] * num[1] * num[2] * num[3] * num[4];
// console.log(num);
// const hour = "hour:";
// const minuts = "minuts:";
// const second = "second";
// res = hour + minuts + second;
// console.log(res);
// let num = 5;
// let result = num * num;
// console.log(result);
// const arr = ['a', 'b', 'c', 'd']
// arr[0];
// arr[1];
// arr[2];
// arr[3];
// const arr1 = "arr[0] + arr[1], arr[2] + arr[3]";
// console.log(arr);
// const obj = {};
// obj['Вася'] = 300;
// console.log(obj);
// const arr = [2,5,3,9]
// const arr1 = arr[0] * arr[1];
// const arr2 = arr[2] * arr[3];
// const result = arr1 + arr2;
// console.log(result);
const obj = {a: 1, b: 2, c: 3};
const a = obj["c"];
console.log(a);
const obj1 = {a: 1, b: 2, c: 3};
const b = obj1.c;
console.log(b);
const obj2 = {Коля: '1000', Вася: '500', Петя: '200'};
const c = obj2.Коля;
const v = obj2.Петя;
console.log(c,v);
const obj3 = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'};
const day = obj3[6];
console.log(day);
const arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
const g = arr[1][0];
console.log(g);
const obj4 = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}
const n = obj4.js[0];
console.log(n);
const arr1 = {
	'ru':['пн','вт','ср','чт','пт','сб', 'вс'],
	'en':['mo','tu','we','th','fr','sa', 'su'],
};
const f = arr1['ru'][0];
const k = arr1['en'][2];
console.log(f,k)
