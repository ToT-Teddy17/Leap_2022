/*console.log('Day14');
console.log("find out even numbers from 1 to 10");
const Max=10;
let start= 1;
while(start<=10){
    if(start%2==0){
        console.log(start);

    }
    start=start+1;
}


//odd number 1-20
let begin= 1;
while(begin<=20){
    if(begin%2!=0){
        console.log(begin);

    }
    begin=begin+1
}


const str = "Life Is Wonderfully";
count=0

while(count<str.length){
    console.log( str.charAt(count));
   
    count=count+1;
    
}
const str = "Life Is Wonderfully";
for (count = 0; count < str.length; count++) {
    console.log(str.charAt(count));

}








let count = 0;
let a = prompt("number");
let sum = 0;
let urt = a.length;
while (count <= urt) {
    console.log(a.charAt(count));
    sum=sum + Number(a.charAt(count));
    count=count+1;



}
console.log(sum);






//9doh bodlogo
let a=prompt('give me number'); 
 let sum1 =0 ; 
 let rem1 =0;
for(; a>0; rem1++){
    rem1=a%10;
    sum1=sum1+rem1;
    a=Math.floor(a/10);
    

}
console.log(sum1);

let sum=0;
let rem=0;
let n=prompt("give number");

while(n>0){
    rem=n%10;
    sum=sum+rem;
    n=Math.floor(n/10);
    rem=rem+1;
}
console.log(sum);


//anhnii too hoho
let a = prompt('give me Number i will show your number is prime number. \n Ow and if you write 100<number .it wont  work ');
let Max = 100;

while (a <= 100) {

    if (a % 2 === 0 && a % 1 === 0) {
        if (a / 2 === 1) {
            console.log(a + "is prime number");
        }
        else if (a % 2 === 0) {
            console.log(a + "is not prime number");
        }
    }
    else {
        console.log(a + "is not prime number");
    }
    break;
}

*/
/*let num = prompt("100s baga buhel too");
let result = true;

if (num == 2) {
    console.log(result);
}
for(let i = 2; i <= num && num < 100; i++) {
    if (num % i == 0) {
        result = false;
    }
    console.log(result);
}
*/


let a = prompt("Tanii oruulsan toonuud heden ornotoi baigaag haraad ogii");
let count = 0;


while(a!==0){
    count  = count + 1;
    a = Math.floor(a/10);
    
}
console.log(count);
