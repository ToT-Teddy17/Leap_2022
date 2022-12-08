console.log('Goood Morning Teddy ^_^');
console.log('Array methods');

//shift

// arr1=[1,2,3]=> shift(arr1)=>[2,3]


// let shiftArr=(arr)=>{
//     let temArray=[]
//     for(let i=0; i<arr.length; i++){
//         if(i!=0){
//             temArray.push(arr[i]);
//         }
//     }

// return temArray;
// }
// let arr1=[1,2,3];
// console.log(shiftArr(arr1));

// //amarhnaar hiih 
// const arr=[1,2,3]
// const first=arr.shift();
// console.log(arr)
// console.log(first);





//unshift
// ehnii nudend utga nemeh
//  console.log('unshigt hiih')
//  let unshiftArray=function (arr,number) {
//      let tempArray=[];
//      tempArray.push(number);
//      for (let i = 0; i< arr.length; i++) {       
//          tempArray.push(arr[i]);
//      }
//      return tempArray;
//  }
// let arr=[5,6,7];
//  console.log(unshiftArray(arr,5));

// //easy nigga

// const array1 = [1, 2, 3];

// console.log(array1.unshift(4, 5));

// console.log(array1);






//sort

// let sort=[1,2,8,7,-1,10];
// function sorting(arr) {

//     for (let i = 0; i < array.length-1; i++) {
//         let index=1;

//     }    

//     for (let j = i+1; j< arr.lengtht-1;j++)
//         {if(arr[j]<arr(index)){
//             index=j;
//         }
//         temp=arr[i];
//         arr[i]=arr(index)
//         arr[index]
// console.log(sorting(sort));



//         }



//     }



// console.log('array sorting');
// const names =['Marlaaaaaaaaa','TeddyTeddy','Otgonbayr'];
// names.sort();
// console.log(names);



// //reverse tuhain too g urvuu helbreer
// const array1 = ['one', 'two', 'three'];
// console.log('array1:', array1);

// const reversed = array1.reverse();
// console.log('reversed:', reversed);

// console.log('array1:', array1);




// //slice

// const arr = ['bat', 'dorj', 'purev', 'davaa', 'tomor'];

// console.log(arr.slice(2, 4));

// console.log(arr.slice(-2));





// [3,4,5]
// function nameSliced(arr,index) {
//     let temArray=[]
//     for (let i = index; i < arr.length; i++) {
//         temArray.push(arr[i]); 
//     }
//     return temArray; 
// }
// console.log(nameSliced([1,2,3,4,5],3))



// function nameSlic(arr,index){
//     for (let i = 0; i < index; i++) {
//         arr.shift()

//     }
//     return arr;
// }
// console.log(nameSlic([1,2,3,4,5],3))


//splice

// const arr = ['Davaa', 'Lkhagva', 'Purev', 'Byamba'];
// arr.splice(1, 0, 'Myagmar');
// console.log(arr);
// arr.splice(4,0,'Baasan');
// console.log(arr);
// arr.splice(6,0,'Nyam');
// console.log(arr);








//object
// console.log('lesson object');
// let rabbit1={
//     color:'white',
//     rname:'chandag',
//     gender:'male',
//     age:'3',
//     say:function() {
//         console.log('snuu nzuuda snuu nzuuda');
        
//     }

    
// }
// console.log(rabbit1);
// console.log(rabbit1.color);
// rabbit1.color='shavhai'
// console.log(rabbit1);
// rabbit1.say();

// let rabbit2={
//     color:'black',
//     rname:'satan',
//     gender:'male',
//     age:'666',
//     jump : function () {console.log('i can jump');
//     console.log('');
//     console.log('');
//     console.log('');
//     console.log('');
//     console.log('');
//     console.log('');
//     console.log('');
//     console.log('oooo arai ikh usreed ene d irchle');




//          }
    
// }
// console.log(rabbit2);
// let rabbits=[rabbit1, rabbit2];
// console.log(rabbits);
// rabbit2.jump()























































































//js methods first 

// const shoppingCart=['Milk', 'Coffee', 'Tea', 'Honey'];
// shoppingCart.splice(0,0,'Meat');
// console.log(shoppingCart);
// shoppingCart.splice(5,0,'Sugar');
// console.log(shoppingCart);
// shoppingCart.splice(4,1,);
// console.log(shoppingCart);
// shoppingCart.splice(3,1,'Green tea');
// console.log(shoppingCart);


//js 2
// let array = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// array.sort();
// console.log('sort:', array);


// const reversed = array.reverse();
// console.log('reversed:', reversed);


// const shift = array.shift();
// console.log('remove first :', array);


// array.splice((array.length -1)/ 2, 2);
// console.log('remove middle:', array);

// const pop = array.pop();
// console.log('remove last', array);

// array.splice(0, 10,);
// console.log('remove all:', array);





//js4
// const array=prompt('give me number');
// const reversed=array.split("");
// const b=reversed.reverse();
// console.log(reversed.join(''));
// let c=b.reverse();
// console.log("garnaas oruulsan to chin ->",c.join(''));





//js5
// const array=prompt('give me section');
// const joins=array.split(" ");
// console.log(joins.join('-'));


//js6
// const names=["Бат","Дорж", "Пунцаг","Готов","Баяраа", "Болд", "Навчаа", "Гончигсумлай", "Цэцгээ", "Нэргүй", "Бальбийгомбо", "Баатар" ];
// console.log('ene bol ajil haah gd uldej avsan 10 hun->',names);

// names.splice(8,0,'egch1','egch2');
// const pop = names.pop();
// const pop1 = names.pop();
// console.log(names);


//js8





// function remove_array_element(array, n)
//  {
//    const index = array.indexOf(n);
//    if (index > -1) {
//     array.splice(index, 1);
// }
//    return array;
//  }
// const array=prompt('give me number');
// const reversed=array.split("");

// const change=prompt('give me oruulsan numberaasa neg number');

// console.log(reversed);
// console.log(remove_array_element(reversed, change),"<-ur dun");


const array=prompt('give me number');
 const reversed=array.split("");
 const b=reversed.reverse();
 console.log(reversed.join(''));
 let c=b.reverse();
 console.log("garnaas oruulsan to chin ->",c.join(''));
















