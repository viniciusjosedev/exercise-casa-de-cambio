import './style.css';

const button = document.getElementsByTagName('button')[0]
const api = 'https://api.exchangerate.host/latest?'

function requireAPI() {
	const input = document.getElementsByTagName('input')[0]
  return fetch(api + `base=${input.value}`).then(resultado => resultado.json())
	.then(resultado => resultado.rates)
}

function addItens() {
	const resultado = requireAPI().then(resultado => resultado)
	console.log(resultado)
}

button.addEventListener('click', addItens)


