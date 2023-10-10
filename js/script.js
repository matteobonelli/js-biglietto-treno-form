const kmPrice = 0.21;
const under18Discount = 0.2;
const over65Discount = 0.4;
const generate = document.querySelector('.btn');
console.log(generate);

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

    }
})