import './style.css' 

const EUR = 'https://api.exchangerate.host/latest${base=EUR}';
const USD = 'https://api.exchangerate.host/latest?base=USD';
const BRL = 'https://api.exchangerate.host/latest?base=BRL';

const button = document.querySelector('button');
const input = document.querySelector('#input-text');
const divs = document.querySelector('valores');


button.addEventListener('click', (event) => {
	event.preventDefault();
	if (input.value === 'EUR') {
    
        fetch(EUR).then(resultado => resultado.json()).then(resultado => console.log(resultado))
	}
})

// fetch(EUR).then(resultado => resultado.json()).then(resultado => console.log(resultado))



