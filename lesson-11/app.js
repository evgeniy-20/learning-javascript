const buttonClick = () => {
    let elem = document.getElementById('elem');
    elem.innerHTML = "!!!";
}
const buttonClicks = () => {
    let elem = document.getElementById('elem1');
    elem.outerHTML = '<b>' + elem.innerHTML + '</b>';
}
const funck = () => {
    let elems = document.getElementsByTagName('p');
    for(let i = 0; i < elems.length; i++) {
        elems[i].innerHTML = i+1;
    }
}
const funck1 = () => {
    let elems1 = document.getElementsByClassName('zzz');
    for(let i = 0; i < elems1.length; i++) {
        elems1[i].innerHTML = i+1;
    }
}
const button = () => {
    let elem4 = document.getElementById('elem4');
    elem4.innerHTML = 'Ку-ку! А я ' + '<b>' + 'жирный' + '</b>' + '!';
}
const button1 = () => {
    let elem = document.getElementById('elem5');
    elem5.innerHTML = 'Абзац превратился в h3'
    elem.outerHTML = '<h3>' + elem.innerHTML + '</h3>';
}
const button2 = () => {
    let elem = document.getElementById('elem6');
    elem.outerHTML = '<h3>' + elem.innerHTML + '</h3>';
}
const go = () => {
    let input1 = +document.getElementById('input1').value;
    let input2 = +document.getElementById('input2').value;
    let result = document.getElementById('result');
    result.innerHTML = input1 + input2;
}
const button3 = () => {
    let elems2 = document.getElementsByTagName('p');
    for(let i = 0; i < elems2.length; i++) {
        elelms2.innerHTML = 'Ку-ку!'
        elems2[i].innerHTML = i+1;
    }
}
// var date = new Date();
// alert(date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate());
// var months = [
// 	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
// 	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
// ];

// var date = new Date();
// var month = date.getMonth();
// alert(months[month]);
