const kmPrice = 0.21;
const under18Discount = 0.2;
const over65Discount = 0.4;
const generate = document.querySelector('.btn');
console.log(generate);

generate.addEventListener('click' , function(){
    const nameSurname = document.getElementById('nome').value;
    const km = parseInt(document.getElementById('km').value);
    const age = document.getElementById('age').value;
    console.log(nameSurname, km, age);
    if(nameSurname === '' || km === '' || isNaN(km)){
        const wrongText = document.getElementById('wrong-text');
        wrongText.classList.remove('d-none')
    }
})