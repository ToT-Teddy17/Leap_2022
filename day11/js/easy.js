//1 dugeer dasgal
let score= prompt('Тоогоор илэрхийлсэн дүн буюу n-д утга онооход түүнд харгалзах үсгийг / A,B,C,D,F / хэвлэнэ.');
console.log(score);
if(90<=score && score<=100){
    console.log('A');
}
else if(80<=score && score<=89){
    console.log('B');
}
else if(70<=score && score<=79){
    console.log('C')
}
else if(60<=score && score<=69){
    console.log('D')

}
else if (0<=score && score<=59){
    console.log('F');
}
else{
    console.log('none')
}


//2 dugaar dasgal
let n= prompt('сарын дугаар буюу n - 1<=n=>12-д хувьсагчид байх утгын дагуу тухайн сарын өдрийн тоог хэвлэнэ.');
console.log(n);


if(n%2==0 && n!=8 && n!=2){
    console.log('30');
    
}
else if(n==8){
    console.log('31');
}
else if(n==2){
    console.log('29 or 28');
}



else{
    console.log('31');
}


//3 dugaar dasgal
let a= prompt('3 yumu 7 iin ali urjver gedgiin shalgaad ogii');
if(a%3==0 && a%7==0){
    console.log("3 and 7")

}
else if(a%7==0){
    console.log("7iin urjver")
}
else if(a%3==0){
    console.log("3 iin urjver")
}
else{
    console.log("none")
}




//4,7 dugaar dasgaluud
let number = prompt('bi chinii ogson toog eyereg sorog gdgiig shalgaad ogii');
console.log(number);
if(number<=0 && 0<=number){
    console.log('yamarch utga algoo')

}
else if(0<=number){
    console.log('negative')
}
else if (number<=0){
    console.log('positive')
}
else{
    console.log('none');
}

// 5 dugaar dasgal
let weight = prompt('jingeee ognuu');
let height = prompt('ondroo metereer ognuu nzaa');
let indeks = (weight/(height*height));
console.log(indeks);
if(indeks<18.5){
    console.log("Under Weight");
}
else if (18.5<=indeks && indeks<=24.9){
    console.log("normal");

}
else if(25<=indeks && indeks<=29.9){
    console.log("over weight");
}
else if(30<=indeks && indeks<=34.9){
    console.log("yoron targan bainda");
}
else if(35<=indeks && indeks<=39.9){
    console.log("uhhees omnoh jin");
}
else if(40<=indeks){
    console.log("za uhlee chi");
}
else{
    console.log("none");
}

//6 dugaar dasgal
let nzaa= prompt('nzaa neg too ogchoh');
if(nzaa%2==0){
    console.log("even");

}
else {
    console.log("odd");

}




//8 dugaar dasgal

let yearOfBirth=prompt('give me your birth');
let thisYear=2022;
let old= (thisYear - yearOfBirth);
if(0 <= old && old <= 1 ){
    console.log("Infant");
}
else if(1 < old && old <= 3 ){
    console.log("Toddler");


}
else if(3 < old && old <= 5 ){
    console.log("Preschool")
}
else if( 5 < old && old <=12){
    console.log("Gradeschooler")
}
else if(12 <old && old <= 18  ){
    console.log("Teen")
}
else if( 18 < old && old <=21){
    console.log("Young adult")
}
else if(21 < old ){
    console.log("Adult")
}
else{
    console.log("none")
}