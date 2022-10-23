'use strict';

//DATA SECTION: Variable for ul element
const listElement = document.querySelector('.js-list');

//DATA SECTION: Variables for kittenOne 
const kittenOneImage = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';
const kittenOneName = 'Anastacio'.toUpperCase();
const kittenOneDesc = 'Cariñoso, juguetón, le guta estar tranquilo y que nadie lemoleste. Es una maravilla acariciarle!';
const kittenOneRace = 'British Shorthair';

//DATA SECTION: Variable with HTML element for kittenOne with previous variables inserted
const kittenOne = `<li class="card"> <article> <img class="card_img" src= "${kittenOneImage}" alt="gatito" /><h3 class="card_title"> ${kittenOneName}</h3><h4 class="card_race"> ${kittenOneRace} </h4><p class="card_description"> ${kittenOneDesc} </p></article></li>`;

//DATA SECTION: Variables for kittenTwo 
const kittenTwoImage = 'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg';
const kittenTwoName = 'Fiona'.toUpperCase();
const kittenTwoDesc = 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.  Es una maravilla acariciarle!';
const kittenTwoRace = 'British Shorthair';

//DATA SECTION: Variable with HTML element for kittenTwo with previous variables inserted
const kittenTwo = `<li class="card"> <article> <img class="card_img" src= "${kittenTwoImage}" alt="gatito" /><h3 class="card_title"> ${kittenTwoName} </h3><h4 class="card_race"> ${kittenTwoRace} </h4><p class="card_description"> ${kittenTwoDesc} </p></article></li>`;

//DATA SECTION: Variables for kittenThree
const kittenThreeImage = 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg';
const kittenThreeName = 'Cielo'.toUpperCase();
const kittenThreeDesc = 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.  Es una maravilla acariciarle!';
const kittenThreeRace = 'British Shorthair';

//DATA SECTION: Variable with HTML element for kittenThree with previous variables inserted
const kittenThree = `<li class="card"> <article> <img class="card_img" src= "${kittenThreeImage}" alt="gatito" /><h3 class="card_title"> ${kittenThreeName} </h3><h4 class="card_race"> ${kittenThreeRace} </h4><p class="card_description"> ${kittenThreeDesc} </p></article></li>`;

//SEARCH SECTION: Show kittens from ul list only if they include a specific word/value inserted in the input description from the search section of HTML document
const inputSearchDesc = document.querySelector('.js_in_search_desc');
//inputSearchDesc.value = 'juguetón';
const descrSearchText = inputSearchDesc.value;

//DATA-SEARCH SECTIONS: We create a variable that starts as empty
let content = "";

//Conditions: if the description includes the value/word from the search form, the specific variable (HTML element) will be added to the content
if( kittenOneDesc.includes(descrSearchText) )  {
    content += kittenOne;
    }
    
if( kittenTwoDesc.includes(descrSearchText) ) {
    content += kittenTwo; //Added to the result of the previous condition
    }
    
if( kittenThreeDesc.includes(descrSearchText) ) {
    content += kittenThree; //Added to the result of the previous condition
    }

//DATA-SECTION: The innerHTML of the declared variable in section data, for ul element
listElement.innerHTML = content;

// 1. Mostrar/ocultar formulario
//HEADER & NEW-FORM SECTION: Create variables for + icon (js-item) and form from new-form section of the HTML document
const menuItem = document.querySelector('.js-item');
const newForm = document.querySelector('.js-new-form');

//HEADER & NEW-FORM SECTION: Show or hide form, when clicking in + icon with an event listener and toggle

menuItem.addEventListener('click', ()=>{
    newForm.classList.toggle('collapsed');
});

const addButton = document.querySelector('.js-btn-add');

//2. Validar formulario nuevo gatito
//NEW-FORM SECTION: Validate form for a new kitten

//NEW-FORM SECTION: Create variables for each input
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputBreed = document.querySelector('.js-input-breed');
const labelMessageError = document.querySelector('.js-label-error');

//NEW-FORM SECTION: Add event listener when clicking in Añadir
addButton.addEventListener('click', (event)=>{
    event.preventDefault();
    //Create variables for each input value once we have clicked in Añadir
    const valueDesc = inputDesc.value;
    const valuePhoto = inputPhoto.value;
    const valueName = inputName.value;
    const valueBreed = inputBreed.value;
    // Create a condition, if any of the inputs are empty, alert message
    if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    //addButton.setAttribute ('title = "Hola"'); Title only works when hover
    alert('Debe rellenar todos los valores.');
    } else {
    //Nothing to be done
    }
    if (valueBreed === ""){
        alert('No se ha especificado la raza');
    }else{
    //Nothing to be done 
    }
});

//3. Validar formulario búsqueda
//SEARCH SECTION : Validate search form from search section of the HTML document
const inputSearchBreed = document.querySelector('.js_in_search_breed');
const searchButton = document.querySelector('.js_search_btn');

//SEARCH SECTION: Add event listener when clicking in Buscar
searchButton.addEventListener('click', (event)=>{
    event.preventDefault();
    //Create variables for each input value once we have clicked in Buscar
    const descrSearchText = inputSearchDesc.value;
    const breedSearchText = inputSearchBreed.value;
    // Create a condition, if any of the inputs are empty, alert message
    if (descrSearchText === '' && breedSearchText === '') {
        //addButton.setAttribute ('title = "Hola"'); Title only works when hover
        alert('Debe rellenar alguno de los dos valores.');
        } else {
        //Nothing to be done
        }
    });
    

// 4. Cancelar formulario
// Create variable for button Cancelar
const newCancelButton = document.querySelector('.js-btn-cancel');

//Empty input values + hide form with toggle collapsed when clicking in Cancelar
newCancelButton.addEventListener('click', ()=>{
    inputDesc.value = '';
    inputPhoto.value = '';
    inputName.value = '';
    inputBreed.value = '';
    newForm.classList.toggle('collapsed');
});