console.log('bom js');
console.log(window);
// // window.alert('pass away->die   pass out ->faint'); -> alert yumuuda
// window.open('https://google.com','hii');


// window.confirm('hii'); // alert tai shiljet yumuda

// let result = window.confirm(' do u wnat to quit?');
// let mas=result?'are u sure gor okay ?':
// 'are not';
// alert(mas);


    
// let timeoutID;
// function showAlert() {
// timeoutID = setTimeout(alert, 3000, 'setTimeout Demo!');
// }
// function clearAlert() {
// clearTimeout(timeoutID);
// }

let counter = 0;
function startInterval() {
    let now=new Date();
    let myTimer=document.getElementById('myTimer');
    myTimer.innerHTML=now;
    console.log(counter);
    counter++
    
}
let startMyTimer = document.getElementById('startTimer');
startMyTimer.addEventListener('click', runTimerInterval)


function runTimerInterval() {
    window.setInterval(startInterval,1000);
    
}
function startinterval() {
    let now= new Date();
    let myTimer=document.getElementById('myTimer');
    myTimer.innerHTML=now.getSeconds();

    
}







