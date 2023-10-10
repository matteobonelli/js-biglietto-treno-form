const kmPrice = 0.21;
const under18Discount = 0.2;
const over65Discount = 0.4;
const generate = document.querySelector('.btn');
console.log(generate);

generate.addEventListener('click' , function(){
    let nameSurname = document.getElementById('nome').value;
    let km = parseInt(document.getElementById('km').value);
    let age = document.getElementById('age').value;
    console.log(nameSurname, km, age);
})