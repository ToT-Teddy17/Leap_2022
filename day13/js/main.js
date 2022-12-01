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

*/
//number dotroh random bod;logo 3 dah dasgal
alert("sn bnuu garaas ogson hoyr toogiin hoorond bi random maygaar neg gargaj ireh bolno")
let x =Number(prompt('ehnii toogoo oruulnu'));
let y =Number( prompt('daraagiin toogoo oruulna'));

if(x<y){
    let max= (y)
    let min=(x)
    console.log('max-',max ,'min-',min);
    alert('unshaj bn.........')
    alert('odoo oruulsan hoyr toonii hoorondoh random number garah bolno....')
    alert( Math.round(Math.random()*max));
    console.log(Math.round(Math.random()*max));
}
else if (x>y){
    let max1 = (x)
    let min2 = (y)
    console.log('max-',max1 ,'min-',min2);
    alert('unshaj bn.........')
    alert('odoo oruulsan hoyr toonii hoorondoh random number garah bolno....')
    alert( Math.round(Math.random()*max1));
    console.log(Math.round(Math.random()*max1));
}

else if(x==y){
    alert("hoyr too hoyulaa tentsuu bga tul tsaasha uildel hiih bolomjgu")

}
else{
    console.log(none)
}
