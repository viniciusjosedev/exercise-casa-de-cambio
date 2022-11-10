import './style.css' 
const urlapi = 'https://api.exchangerate.host/latest${base=BRL}';

fetch(urlapi).then(resultado => resultado.json()).then(resultado => console.log(resultado))

