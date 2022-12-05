
// let locations=[false,false,true,true,true,false,false];
// console.log(locations);
// for(let i=0;i<locations.length;i++){
//     console.log(locations[i]);
// }


// let guesses = 0;

// let hit = 0;

// let location1 = prompt('ongtsnii heseg');
// let location2 = prompt('daraagiin heseg');
// let location3 = prompt('suuliin heseg');

// while(!locations) {
//     console.log('game begins')

//     let userGuess = Number(prompt('Give me your position?'));
//     guesses = guesses + 1;
//     if (guesses > 6) {
//         console.log(guesses);
//         break;
//     }
//     console.log(guesses);
//     if (userGuess > 0 && userGuess <7) {
//         console.log(userGuess);
//         if (locations==userGuess) {
//             hit = hit + 1;
//             alert('HIT');
//             // if you hit the location1
//             if (location1 == userGuess) {
//                 location1 = -1;
//             }
//             if (location2 == userGuess) {
//                 location2 = -1;
//             }
//             if (location3 == userGuess) {
//                 location3 = -1;
//             }
            
//         } else {
//             alert('MISS');
//         }
//         console.log(hit);
//         if (hit == 3) {
//             isSunk = true;
//         }
//     } else {
//         alert('Give me numbers between 0 and 6');
//     }
// }

// // game loop is ended
// if (locations && guesses < 6) {
//     alert('You WON');
// } else if (guesses > 6) {
//     alert('You LOST');
// } else {
//     alert('You LOST');
// }

// console.log('game ends');



