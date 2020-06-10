const str1 = 'бабочки';
function string(str) {
    let input = '';
    for(let i = 0; i < str.length; i++) {
        if(i % 2 === 0) {
            input = input + str[i]
        }
    }
    return input;
}
console.log(string(str1));
console.log(string('абрикоса')); 
