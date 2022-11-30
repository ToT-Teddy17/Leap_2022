const registerNumber = prompt('Give me your register number');
const registerChar = registerNumber.substr(0, 2);
const registerNum = registerNumber.substr(2, 9);
if (!Number.isInteger(Number(registerChar)) && Number.isInteger(Number(registerNum)) && registerNumber.length == 10) {
    console.log('Your register characters are correct ')
} else {
    console.log('Your register characters are wrong')
}




console.log(registerChar);
console.log(registerNum);





if (!Number.isInteger(Number(registerChar))&& Number.isInteger(Number(registerNum))  && registerNumber.length == 10) {
    console.log('chi bol mongol');
}
else{
    console.log('not mongol');
}