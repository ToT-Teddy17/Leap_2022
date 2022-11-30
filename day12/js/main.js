/*
        let a = "hi";
        let b = "hi";
        console.log(a>b);
        console.log(a==b);
        console.log(a===b);
        let c = 10;
        let d = '10';
        console.log(c==d);
        console.log(c===d);

        let e = true;
        let f = false;
        console.log(e<f);
        console.log(e>f);


        let result= 9;


        if (result>10){
            console.log('more than 10');
        }
        else {
            console.log('less than 10');
        }

        result>10? (result<10? console.log('zaza'): console.log('za boli')): console.log('less than 10');


        // 3000, 27500 , 100000
        const input= prompt ('mongoo tol');
        const numberInput= Number(input);
        const tip1 = 3000;
        const tip2 = 27500;
        const tip3 = 100000;
       
        let exResult = (5000>=numberInput && 30000<=numberInput)? numberInput*0.15 + numberInput: numberInput*0.2 + numberInput;
       console.log(exResult);






       //bold toi bodlogo
       
       const studentPoint = Number(prompt('give me your student score'));
       const studentName = prompt('give me your stutend name');
       let studentResult='onoo dandaa 100 aas doosh bn';
       if(studentPoint<60){
           studentResult = 'very very bad'
           
       }
       else if (studentPoint>=60 &&studentPoint<70){
           studentResult= 'bad'

       }
       else if(studentPoint>=70 && studentPoint<80){
           studentResult='normal'
       }
       else if (studentPoint>=80 && studentPoint<90){
           studentResult='good'
           
       }
       else if ( studentPoint>=90 && studentPoint<=100){
           studentResult='very very good'
       }
       else{
           console.log(none);
       }
       alert(studentName + ' - ' + studentPoint + "%"+' - ' + studentResult );
       console.log(`${studentName} - ${studentPoint}% - ${studentResult}` );
       




// script
console.log(`${studentName} -`);
//text
alert(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`);

//.length
const registerNumber= prompt('registee oruulnu');
if(registerNumber.length==10){
    alert('amjilttai');}
     

else{
    alert('erorre');
}



 charAt(index) str[index]

console.log(register.charAt(0));
console.log(register.charAt(1));



let str ="this is a string";
console.log(str.indexOf("string"));
const registerChar=registerNumber.substr(0,2);
const registerNum=registerNumber.substr(2,9);





const registerNumber= prompt('registee oruulnu');

if(!Number.isInteger( Number(registerChar))
&& Number.isInteger(Number(registerNum)) && registerNumber.length==10){
    console.log("you got it");
}
else {
    console.log('you didnot got it');
}
console.log(Number('abc'));
console.log(Number.isInteger(Number('abc')));
console.log(Number('12345678'));
console.log(Number.isInteger(Number('12345678')));


*/


//bagshiin register shig bodlogo
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
// shine oruulsan bodlogo










