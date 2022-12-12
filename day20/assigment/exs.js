console.log(document.getElementById('aimag-101').innerHTML);
console.log(document.getElementById('aimag-522').innerHTML);
console.log(document.getElementById('aimag-315').innerHTML);


document.getElementById('aimagNames').style = 'font-size:30px;  margin: 10px;  border:5px solid white; color: red;'



// for (let i = 0; i < document.getElementsByClassName("khangai").length; i++) {
//     document.getElementsByClassName("khangai")[i].style = 'background-color: white;'



for (let i = 0; i < document.getElementsByClassName("right").length; i++) {
    document.getElementsByClassName("right")[i].style = 'background-color: grey;'


}
for (let i = 0; i < document.getElementsByClassName("left").length; i++) {
    document.getElementsByClassName("left")[i].style = 'background-color: red;'


}
for (let i = 0; i < document.getElementsByClassName("center").length; i++) {
    document.getElementsByClassName("center")[i].style = 'background-color: yellow;'


}
for (let i = 0; i < document.getElementsByClassName("ub").length; i++) {
    document.getElementsByClassName("ub")[i].style = 'background-color: brown;'
}




for (let i = 0; i < document.getElementById("aimagNames").getElementsByTagName('li').length; i++) {
    if (document.getElementById('aimagNames').getElementsByTagName('li')[i].id.includes('aimag-1')) {
        document.getElementById("aimagNames").getElementsByTagName('li')[i].style = 'background-color: yellow;'


    }
}

console.log(document.getElementById('aimagNames').getElementsByTagName('li')[0].id.includes('aimag-1'))




console.log(document.querySelector('#aimagNames'));
console.log(document.querySelector('.khangai'));
console.log(document.getElementsByClassName('khangai'));
console.log(document.querySelectorAll('.khangai'));


document.getElementById('demo').innerHTML = "Date :" + Date();

document.querySelector("img").src = "img/denji.jpg"



const newDiv = document.createElement("h2");
const newContent = document.createTextNode("Манай сайтад тавтай морил");
newDiv.appendChild(newContent);
const main = document.getElementsByTagName("body");

const h1 = document.querySelector("h1");
h1.appendChild(newDiv);

console.log(document.getElementsByTagName("body"));






