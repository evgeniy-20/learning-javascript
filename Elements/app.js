const getGo = () => {
    let input = document.getElementById('input');
    input.innerHTML = 'Ку-ку! а я <b>жирный</b>'
}
const getH3 = () => {
    let input = document.getElementById('input1');
    input.innerHTML = '<h3>Абзац превратился в h3!</h3>'
}
const getText = () => {
    let input = document.getElementById('input2');
    input.innerHTML = '<h3>При нажатии на кнопку абзац станет h3, но текст останется.</h3>'
}
const getSum = () => {
    let input3 = document.getElementById('input3').value;
	let input4 = document.getElementById('input4').value;
	let result = document.getElementById('result');
	result.innerHTML = input3 + input4;
}