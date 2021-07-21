let button = document.querySelector('#btn');
let form = document.querySelector('#myForm');

let firstName = form.elements['firstName'];
let lastName = form.elements['lastName'];
let email = form.elements['email'];
let phone = form.elements['tel'];
let message = form.elements['message'];

let regName = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
let regPhone = /^(0|\+33)[1-9]([-.]?[0-9]{2}){4}$/;
let regMail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let overlay = document.querySelector('#modal-overlay');
let btnCloseModal = document.querySelector('#btn__close-modal');
let modal = document.querySelector('#modal');
let newModal = document.querySelector('#new-modal');

let array = [];
let object = {};

let lastNamesIsValid;
let firstNamesIsValid;
let emailIsValid;
let phoneIsValid;
let messageIsValid;

button.addEventListener('click', function(e){

    e.preventDefault();
    
    checkLastName();
    checkFirstName();
    checkEmail();
    checkPhone();
    checkMessage();
    

    if(lastNamesIsValid && firstNamesIsValid && emailIsValid && phoneIsValid && messageIsValid == 'champs bien repmli'){
        object = {
            'Prénom': array[0],
            'Nom': array[1],
            'E-mail': array[2],
            'Téléphone': array[3],
            'Message': array[4]
        };
        console.log(object);

        overlay.style.display = 'block';  
    } 
    
});

btnCloseModal.addEventListener('click', function(e){ // Ferme la modal
    e.preventDefault();
    overlay.style.display=' none';
    location.reload();
});


 // Vérifie si les champ ne sont pas vides et si ils sont bien formatés

function checkLastName(){  

    if(lastName.value !="" && regName.test(lastName.value) == true){
        array.push(lastName.value);
        lastNamesIsValid = 'champs bien repmli'; 
    } else {
        alert('Nom invalide!');
    }
}

function checkFirstName(){    

    if(firstName.value !="" && regName.test(firstName.value) == true){
        array.push(firstName.value);
        firstNamesIsValid = 'champs bien repmli';
    } else {
        alert('Prénom invalide!');
    }
}

function checkEmail(){
    
    if(email.value !="" && regMail.test(email.value) == true){  
        array.push(email.value);
        emailIsValid = 'champs bien repmli';
    } else {
        alert('Email invalide!');
    }
}

function checkPhone(){

    if(phone.value !="" && regPhone.test(phone.value) == true){  
        array.push(phone.value);
        phoneIsValid = 'champs bien repmli';
    } else {
        alert('Numéro de téléphone invalide!');
    }
}

function checkMessage(){    
    if(message.value !=""){
        array.push(message.value);
        messageIsValid = 'champs bien repmli';
    } else {
        alert('Vous devez remplir le message!');
    }
}

