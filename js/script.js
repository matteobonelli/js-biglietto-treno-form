const kmPrice = 0.21;
const under18Discount = 0.2;
const over65Discount = 0.4;
const generate = document.querySelector('.btn');
const cancella = document.querySelector('.btn-warning');
let carrozza = randomizer(1, 10);
let codiceCP = randomizer(1, 100000);
let ticketPremium = randomizer(0, 1)
console.log(generate, cancella);
console.log(carrozza, codiceCP);

  function randomizer(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

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
    const ticket = document.getElementById('ticket');
    const wrongText = document.getElementById('wrong-text');
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
        wrongText.classList.remove('d-none');
        ticket.classList.add('d-none');
    } else{
        wrongText.classList.add('d-none');
        ticket.classList.remove('d-none');
        ticket.querySelector('.my-bg-gray > div').innerHTML =`
        ${nameSurname}
        `;
        ticket.querySelector('td:last-child').innerHTML=`
        ${price.toFixed(2)}€
        `;
        ticket.querySelector('#carrozza').innerHTML = `${carrozza}`;
        ticket.querySelector('#codice-cp').innerHTML = `${codiceCP}`;
        if(ticketPremium === 1){
            ticket.querySelector('#biglietto').innerHTML = 'Ticket Premium';
        } else{
            ticket.querySelector('#biglietto').innerHTML = 'Ticket Standard';
        }
    }
})