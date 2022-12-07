// function pow(number, exponent){
//     let num=1;
//     for(let i=1;i<=exponent;i++){
//         num=num*number;
//     }
//     return num;
// }
// let result=pow(2,3);
// console.log(result);



// let findMin =function (num) {
//     let x=prompt('');
//     let y=prompt('');
//     if(x<y){
//         return true;
//     }
//     else{
//         return false;
//     }

// }

//1deh dasgal
let findMin=function(p1,p2) {
    if(p1<p2){
        return p1;
    }
    else{
        return p2;
    }
}
console.log(findMin(0,1));


console.log("");


//2doh dasgal
console.log('2doh dasgal');
let printArray= function (arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

}



let arr = [1, 2, 3, 4]
printArray(arr);
console.log(''+'end');
console.log("");



//3 
console.log('3 dah dasgal')
let findArrayMax=function(arr) {
    let max=-1;
    for(let i=0;i<arr.length;i++){
        if(max<=arr[i]){
            max=arr[i];
        }
    }
    return max;
    
}
console.log(findArrayMax(arr)+"<- bol hamgiin ikh utga iin olson")
console.log('end');
console.log("");

console.log('4 start');
let findArrayAverage=(arr)=>{
    let sum=0;
    for(let i =0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    let average=sum/arr.length;
    return average;
    
}
console.log(findArrayAverage(arr)+"<-ene bol dundaj");

console.log('end');
console.log("");




