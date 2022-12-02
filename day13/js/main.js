//math 
//PI
/*
console.log(Math.PI);
console.log(Math.PI.toFixed(2));

//ikh toog emkh tsegtstei haruulah
const budget = 1_000_000_000;
console.log(budget);




const degrees = 45 ;
let rad = degrees*(Math.PI/100);
console.log(rad.toFixed(4));

//modul
let a=5 , b=6;
const diff = Math.abs(a-b);
console.log(diff);
//ceil deeshe dandaa utga avna 


console.log(Math.ceil(.95));

console.log(Math.ceil(4));
console.log(Math.ceil(7.004));

console.log(Math.ceil(-7.004));



// floor doosho utga avah
console.log(Math.floor(5.95));
// output: 5
console.log(Math.floor(5.05));
// output: 5
console.log(Math.floor(5));
// output: 5

console.log(Math.floor(-5.05));
// output: -6




// ceil floor hoyriin negdmel
console.log(Math.round(0.9));

console.log(Math.round(5.95), Math.round(5.5), Math.round(5.1));

console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-6));

//ogson toonuudiin ikhiin olj ogno 
console.log(Math.max(1, 3, 2));

console.log(Math.max(-1, -3, -2));
//hamgiin baga utgiin olj ogno




console.log(Math.min(2, 3, 1));

console.log(Math.min(-2, -3, -1));
//Math.pow n zereg
console.log(Math.pow(7,3));
//Math.sqrt n yazguur
console.log(Math.sqrt(49));

//bodlogo
alert('x2=y2+z2 what is x');
let y = (prompt("give me y number"));


let z=(prompt("give me your z number"));
alert("now we find your answer ......")
alert('............')
alert(Math.sqrt((y**2)+(z**2)));
console.log(Math.sqrt((y**2)+(z**2)));


//random
console.log(Math.ceil(Math.random()* 6));


//number dotroh random bod;logo 3 dah dasgal
c

let first= prompt('give me number');
let second= prompt('give me number');



//loops buyu davtah
//while n barag loop iin if yumuda
let count = 1;
console.log("loop started");
while (count<=50){
    console.log(count);
    count= count+1;
}
//hervee bid nar count +1 gsn zuil bailgahgu bol
//infinite(forever) Loop gdg zuil tulgarna

console.log('loop ended')





// togloomnii davtalt
let start = alert("ta dahij ene togloomiig toglmoor bnu");
let songolt= alert("'Yes' \, 'No' gsn haruiltaar haruilnu");
let yes = "Yes"
let no ="No"
let answer= prompt();

while(yes==answer){
    alert("welcome to next round");
    yes=prompt("one more game");
    if(answer==yes){
        alert("thanks");
    }
    else{
        alert("gameover");
    }
    
}
while(no==answer){
    alert("gameovoer");
    no= no +1;
}



let x=Number(prompt("garaas neg too oruulnu ^-^"));

let count= 1;
let sum= 0;


while(count<=x){
    sum=sum + count;
    console.log(count);
    count =count + 1;
    
    
    
    
    
}

console.log(sum);

alert("hello dear ,i will show you even numbers for 1>100");
        let count = 2;
        let sum= 0;

        while(count<=100){
            sum=sum + count;
            console.log(count);
            count=count+2;




let num=prompt("give me number.i will show your number`s prime number" ,);
var isPrimeN=true;
var count=1;
while(count<100 ){
  if(num%count==0){
    isPrimeN=false;
    
    break;
  }
  
  

  
  count++;
}

 if(isPrimeN==false){
    console.log(num+"is not prime number |_|");
}

else {

  console.log(num+" is a prime number");
}


*/


let num=prompt("give me number");
let count=1;

while(count==2){
    if(num%num==0){
        console.log("true");
        count=count+1;
    }

   
    else{
        console.log("false");
    }


}







/*

let x=Number(prompt("garaas neg too oruulnu ^-^"));

let count= 1;
let sum= 0;


while(count<=x){
    sum=sum + count;
    console.log(count);
    count =count + 1;
    
    
    
    
    
}
*/