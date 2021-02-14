function buttonClick() {
	document.getElementById('img').src='./images/2.jpg';
}
const inputClick = () => {
	document.getElementById('input').style.color = 'red';
}
function hide(){
	elem = document.getElementById('test');
	elem.style.display = 'none';
}
function show(){
	elem = document.getElementById('test');
	elem.style.display = 'inline-block';
}
const button = () => {
	let input = document.getElementById('input2');
	input.value = 'Ой, я поменял свой текст и css!'
	input.style.width = '300px';
	input.style.height = '200px';
	input.style.color = 'red';
	input.style.borderRadius = '35px';
}
const  block = () => {
	let block = document.getElementById('block');
	let unblock = document.getElementById('unblock');
	block.value = 'О, теперь на меня больше не нажать!';
	block.disabled = true;
	unblock.style.display = 'block';
}
const unblock = () => {
	let block = document.getElementById('block');
	let unblock = document.getElementById('unblock');
	block.value = 'О, на меня снова можно нажимать!';
	block.disabled = false;
	unblock.style.display = 'none';
}
const go = (elem) => {
	elem.value = parseInt(elem.value) + 1;
}
const getGo = () => {
	elem = document.getElementById('test1');
	elem.value = 'Теперь я плаваю справа!';
	elem.style.cssFloat = 'right';
}
const getBo = () => {
	elem = document.getElementById('test2');
	elem.value = 'Мои css классы: eee www ddd';
}
const getNo = () => {
	var input1 = document.getElementById('input1');
	var input2 = document.getElementById('input5');
	var input1Value = input1.value;
	var input2Value = input2.value;
	input1.value = input2Value;
	input2.value = input1Value;
}
const goVo = () => {
	var test1 = document.getElementById('test1');
	var value = test1.value;
	var result = document.getElementById('result');
	result.value =  value*value;
}
x = 2;
