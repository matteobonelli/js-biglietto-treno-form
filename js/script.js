const kmPrice = 0.21;
const under18Discount = 0.2;
const over65Discount = 0.4;
const generate = document.querySelector('.btn');
const cancella = document.querySelector('.btn-warning');
console.log(generate, cancella);

cancella.addEventListener('click', function(){
    const nameSurname = document.getElementById('nome').value = '';
    const km = document.getElementById('km').value = '';
    const age = document.getElementById('age').value = 'over18';
    let price = 0;
    const wrongText = document.getElementById('wrong-text');
    const ticket = document.getElementById('ticket');
    wrongText.classList.add('d-none');
    ticket.classList.add('d-none');

})

generate.addEventListener('click' , function(){
    const nameSurname = document.getElementById('nome').value;
    const km = parseInt(document.getElementById('km').value);
    const age = document.getElementById('age').value;
    let price = kmPrice * km;
    let priceUnder18 = price * under18Discount;
    let priceOver65 = price * over65Discount;
    console.log(nameSurname, km, age);
    if(age === 'under18'){
        price = price - priceUnder18;
    } else if(age === 'over65'){
        price = price - priceOver65;
    }
    console.log(price);
    if(nameSurname === '' || km === '' || isNaN(km)){
        const wrongText = document.getElementById('wrong-text');
        wrongText.classList.remove('d-none')
    } else{
        const ticket = document.getElementById('ticket');
        ticket.classList.remove('d-none');
        ticket.querySelector('div').innerHTML =`
        ${nameSurname}
        `;
        ticket.querySelector('.price').innerHTML=`
        ${price.toFixed(2)}€
        `;
    }
})