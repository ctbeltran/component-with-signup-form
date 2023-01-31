// Declaración de variables
const regExp = {	
	name: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
  lastName: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	password: /^.{6,12}$/, // 4 a 12 digitos.	
}

const stateInput = {
  name: false,
  lastName: false,
  email: false,
  password: false
}

const trialForm = document.querySelector('#trialForm');
const inputs = [... document.querySelectorAll('.trial__form__item')];


// Declaración de Funciones
const handelSubmit = (e) => {
  e.preventDefault();
  
  inputs.map(input => {
    const parent = input.parentElement;    
    
    if (input.value === "") {        
      input.classList.add('--invalid');
      parent.lastElementChild.classList.add('d-block');         
    }
  })

  if(stateInput.name === true && stateInput.lastName === true && stateInput.email === true && stateInput.password === true) {
    alert('Datos enviados');
    location.reload();
  }
}

const validateRegExp = (exp, input, state) => {  
  if(exp.test(input.value)) {
    input.classList.remove('--invalid');
    input.classList.add('--valid');
    stateInput[state] = true;           
  } else {
    input.classList.remove('--valid');
    input.classList.add('--invalid');
    stateInput[state] = false;  
  } 
}

const validateInput = (e) => {
  const input = e.target;
  const parent = input.parentElement;
  parent.lastElementChild.classList.remove('d-block');
  input.classList.remove('--invalid');
  switch (input.name) {
    case "name":
      validateRegExp(regExp.name, input, "name");        
      break;
    
    case "lastName":
      validateRegExp(regExp.lastName, input, "lastName");
      break; 

    case "email":
      validateRegExp(regExp.email, input, "email");
      break;
    
    case "password":
      validateRegExp(regExp.password, input, "password");
      break;
  
    default:
      break;
  }
}

const blurInput = (e) => {
  const input = e.target

  if(input.value === "") {
    input.classList.remove('--invalid');
  }
}

const documentLoaded = () => {
  trialForm.addEventListener('submit', handelSubmit);
  inputs.map(input => {
   input.addEventListener('input', validateInput);
   input.addEventListener('input', blurInput);   
  })
}

// Asiganación de eventos
window.addEventListener('DOMContentLoaded', documentLoaded)