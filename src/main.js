import './style.css';
import 	Swal from 'sweetalert2'

const button = document.getElementsByTagName('button')[0]
const api = 'https://api.exchangerate.host/latest?base=Usd'
let num = 0;

function verific() {
	if (num === 0) {
		num += 1
	} else {
		document.getElementsByTagName('section')[0].innerHTML = '';
	}
}

function addItens(dict) {
	verific()
	Object.entries(dict).forEach(elemento => {
		const tagDiv = document.createElement('div')
		document.getElementsByTagName('section')[0].appendChild(tagDiv)
		const tagP1 = document.createElement('p')
		tagP1.className = 'p-coin'
		tagP1.innerText = `${elemento[0]}:`
		const tagP2 = document.createElement('p')
		tagP2.className = 'p-price'
		tagP2.innerText = elemento[1]
		document.getElementsByTagName('div')[document.getElementsByTagName('div').length - 1].appendChild(tagP1)
		document.getElementsByTagName('div')[document.getElementsByTagName('div').length - 1].appendChild(tagP2)
	})
}

function requireAPI() {
	try { 
		let input = document.getElementsByTagName('input')[0]
		if (input.value === '') {
			throw new Error('O espaço laranja não pode ficar vazio!!')
		}
		return fetch(api + `base=${input.value}`).then(resultado => resultado.json())
		.then(resultado => addItens(resultado.rates))
	} catch(error) {
		Swal.fire({
			icon: 'error',
			title: 'Digite uma moeda!!',
			text: error.message,
		})
	}
	}


button.addEventListener('click', requireAPI)


