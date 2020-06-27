const calckSum = (number) => {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum = sum + Number(number[i]);
    }
    return sum;
}
console.log(calckSum('1234'));