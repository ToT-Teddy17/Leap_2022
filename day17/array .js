








// function findAt (arr, index) {
//     return arr[index];
// }

// const array1 = [1, 2, 3 , 4, 5];
// console.log(findAt(array1, 0));
// console.log(findAt(array1, 4));

// console.log(array1.at(0))
// console.log(array1.at(2))


// // arr1 = [1, 2, 3] arr2 = [4, 5, 6] => [1, 2, 3, 4, 5, 6]
// function arrConcat(arr1, arr2) {

//     let concatedArray = []
 
//     for(let i = 0; i < arr1.length; i++) {
//         concatedArray.push(arr1[i])
//     }
//     for(let i = 0; i < arr2.length; i++) {
//         concatedArray.push(arr2[i])
//     }

//     return concatedArray;
// }

// let arrayC1 = [1, 2, 3]
// let arrayC2 = [4, 5, 6]
// console.log(arrConcat(arrayC1, arrayC2));
// console.log(arrConcat(arrayC2, arrayC1))

// // array concat method
// console.log('array concat method')
// console.log(arrayC1.concat(arrayC2));
// console.log(arrayC1 + arrayC2);

// // arr1 = [1, 2, 3] arr2 = [4, 5, 6] => arr3 = [5, 7, 9]

// function arrayElementAdd(arr1, arr2) {
//     let sum = []
//     for(let i = 0; i < arr1.length; i++){
//         sum[i] = arr1[i] + arr2[i] 
//     }
//     return sum;
// }
// console.log(arrayElementAdd(arrayC1, arrayC2))

// // array includes
// console.log('array includes')


// let arrayIncludes = function (arr, number){
//     let found = false;
//     for(let i = 0; i < arr.length; i++) {
//         if(number === arr[i]){
//             found = true;
//             break;
//         }
//     }
//     return found;
// }
// const arrayInc = [2, 4, 5]
// console.log(arrayIncludes(arrayInc, 2)); // true
// console.log(arrayIncludes(arrayInc, 5)); // true
// console.log(arrayIncludes(arrayInc, 3)); // false

// // array implicit function includes
// console.log('array builtin method includes')
// console.log(arrayInc.includes(2));
// console.log(arrayInc.includes(5));
// console.log(arrayInc.includes(3));







//array includes

// let arrayIncludes=function (arr, number) {
//     let found=false;
//     for(let i=0;i<arr.length;i++){
//         if(number===arr[i]){
//             found=true;
//             break;
//         }
//     }
//     return found;
    
// }
// const arrayInc=[2,3,5]
// console.log(arrayIncludes(arrayInc(2)));















//join
console.log('Join')
//arr1=[1,2,3,]=>123
let funcJoin=(arr)=>{
    let output='';
    for(let i =0;i<arr.length;i++){
        output=output+arr[i];
    }


    return output;
}
const arrayJoinn=[1,2,3];
console.log(funcJoin(arrayJoinn));



//odoo ug
const logg=['elee','heree','galuu'];
console.log(logg.join());
console.log(logg.join(''));
console.log(logg.join('-'));



//pop
//arr1=[1,2,3]=> pop =>[1,2]

//1deh arga
console.log('');
console.log('pop array function');
function popFunc(arr) {
    const lastIndex=arr.length-1;
    let poped=[];
    for(let i =0; i<arr.length;i++){
        if(i!=lastIndex){
            poped.push(arr[i]);

        }
    }
    return poped;


    
}
const popArray=[1,2,3,];
console.log(popFunc(popArray));
console.log(popFunc([12,2,4,5,6,]))

//2 doh arga

console.log('pop method')
const popresult=[1,24,345,4567];
popresult.pop()
console.log(popresult);
