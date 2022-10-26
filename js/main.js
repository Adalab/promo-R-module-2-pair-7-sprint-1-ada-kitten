'use strict';

//DATA SECTION: Variable for ul element
const listElement = document.querySelector('.js-list');

//DATA SECTION: Variables for kittenOne 
const kittenOneImage = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';
const kittenOneName = 'Anastacio'.toUpperCase();
const kittenOneDesc = 'Cariñoso, juguetón, le guta estar tranquilo y que nadie lemoleste. Es una maravilla acariciarle!';
const kittenOneRace = 'British Shorthair';

//DATA SECTION: Variable with HTML element for kittenOne with previous variables inserted
/*const kittenOne = `<li class="card"> <article> <img class="card_img" src= "${kittenOneImage}" alt="gatito" /><h3 class="card_title"> ${kittenOneName}</h3><h4 class="card_race"> ${kittenOneRace} </h4><p class="card_description"> ${kittenOneDesc} </p></article></li>`;*/

//DATA SECTION: Variables for kittenTwo 
const kittenTwoImage = 'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg';
const kittenTwoName = 'Fiona'.toUpperCase();
const kittenTwoDesc = 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.  Es una maravilla acariciarle!';
const kittenTwoRace = 'British Shorthair';

//DATA SECTION: Variable with HTML element for kittenTwo with previous variables inserted
/*const kittenTwo = `<li class="card"> <article> <img class="card_img" src= "${kittenTwoImage}" alt="gatito" /><h3 class="card_title"> ${kittenTwoName} </h3><h4 class="card_race"> ${kittenTwoRace} </h4><p class="card_description"> ${kittenTwoDesc} </p></article></li>`;*/

//DATA SECTION: Variables for kittenThree
const kittenThreeImage = 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg';
const kittenThreeName = 'Cielo'.toUpperCase();
const kittenThreeDesc = 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.  Es una maravilla acariciarle!';
const kittenThreeRace = 'British Shorthair';

//DATA SECTION: Variable with HTML element for kittenThree with previous variables inserted
/*const kittenThree = `<li class="card"> <article> <img class="card_img" src= "${kittenThreeImage}" alt="gatito" /><h3 class="card_title"> ${kittenThreeName} </h3><h4 class="card_race"> ${kittenThreeRace} </h4><p class="card_description"> ${kittenThreeDesc} </p></article></li>`;*/

//DATA SECTION: Crear el gatito en HTML (lección 5.1)
//Declare empty variable

//Function to complete variable.innerHTML with the info declared when executing the function
/*function renderKitten(url, desc, name, race) {
    const listItem = `<li class="card"> <article> <img class="card_img" src= "${url}" alt="gatito" /><h3 class="card_title"> ${name} </h3><h4 class="card_race"> ${race} </h4><p class="card_description"> ${desc} </p></article></li>`;
    listElement.innerHTML += listItem;
}*/


//RENDER KITTEN: 1. Convertir cada gatito en un objeto (lección 2.7). Función genérica para definir un objeto:

function getKittenData (img,nm,rc,desc){
    const kittenData = {
        image: img,
        name: nm.toUpperCase(),
        race: rc,
        desc: desc
    }
    return kittenData;
}

//Ejecutamos la función para crear un objeto de cada gatito

const kittenOneObject = new getKittenData('https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg', 'Anastacio','British Shorthair', 'Cariñoso, juguetón, le guta estar tranquilo y que nadie lemoleste. Es una maravilla acariciarle!');

console.dir(kittenOneObject );

const kittenTwoObject = new getKittenData('https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg', 'Fiona','British Shorthair', 'Risueño, le guta estar tranquilo y que nadie lemoleste. Es una maravilla acariciarle!');

const kittenThreeObject = new getKittenData('https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg', 'Cielo','British Shorthair', 'Cariñoso, juguetón, le guta estar tranquilo y que nadie lemoleste. Es una maravilla acariciarle!');


//RENDER KITTEN: La función nos devuelve el elemento HTML con el objeto creado como parámetro
function renderKitten(kittenData) {
    const html = `<li class="card"> <article> <img class="card_img" src= "${kittenData.image}" alt="gatito" /><h3 class="card_title"> ${kittenData.name} </h3><h4 class="card_race"> ${kittenData.race} </h4><p class="card_description"> ${kittenData.desc} </p></article></li>`;
    return html;
}

const kittenOne = renderKitten(kittenOneObject) ;

const kittenTwo = renderKitten(kittenTwoObject);

const kittenThree = renderKitten(kittenThreeObject);

listElement.innerHTML = kittenOne + kittenTwo + kittenThree;


//renderKitten(kittenOneImage, kittenOneDesc, kittenOneName, kittenOneRace);

//Creamos variables para cada gato llamando a la función anterior


//listElement.innerHTML =

/*const kittenOne = renderKitten(kittenOneImage, kittenOneDesc, kittenOneName, kittenOneRace);

const kittenTwo = renderKitten(kittenTwoImage, kittenTwoDesc, kittenTwoName, kittenTwoRace);

const kittenThree = renderKitten(kittenThreeImage, kittenThreeDesc, kittenThreeName, kittenThreeRace);

//El innerHTML de la ul es igual a la suma de las variables creadas anteriormente
listElement.innerHTML = kittenOne + kittenTwo + kittenThree;*/

/*renderKitten(kittenOneImage, kittenOneDesc, kittenOneName, kittenOneRace);
const kittenOne = renderKitten();

renderKitten(kittenTwoImage, kittenTwoDesc, kittenTwoName, kittenTwoRace);
const kittenTwo = renderKitten ();

renderKitten(kittenThreeImage, kittenThreeDesc, kittenThreeName, kittenThreeRace);
const kittenThree = renderKitten();*/

/* //SEARCH SECTION: Show kittens from ul list only if they include a specific word/value inserted in the input description from the search section of HTML document
const inputSearchDesc = document.querySelector('.js_in_search_desc');
//inputSearchDesc.value = 'juguetón';
const descrSearchText = inputSearchDesc.value;

//DATA-SEARCH SECTIONS: We create a variable that starts as empty
let content = "";

//Conditions: if the description includes the value/word from the search form, the specific variable (HTML element) will be added to the content
/*if( kittenOneDesc.includes(descrSearchText) )  {
    content += kittenOne;
    }
    
if( kittenTwoDesc.includes(descrSearchText) ) {
    content += kittenTwo; //Added to the result of the previous condition
    }
    
if( kittenThreeDesc.includes(descrSearchText) ) {
    content += kittenThree; //Added to the result of the previous condition
    }

//DATA-SECTION: The innerHTML of the declared variable in section data, for ul element
listElement.innerHTML = content;*/

// 1. Mostrar/ocultar formulario
//HEADER & NEW-FORM SECTION: Create variables for + icon (js-item) and form from new-form section of the HTML document
const menuItem = document.querySelector('.js-item');
const newFormElement = document.querySelector('.js-new-form');

//HEADER & NEW-FORM SECTION: Show or hide form, when clicking in + icon with an event listener and toggle

/*menuItem.addEventListener('click', ()=>{
    newForm.classList.toggle('collapsed');
});*/

const addButton = document.querySelector('.js-btn-add');

//HEADER & NEW-FORM SECTION: Mostrar/ocultar el formulario nuevo gatito con funciones (lección 5.1)

function showNewCatForm() {
    newFormElement.classList.remove('collapsed');
}

function hideNewCatForm() {
    newFormElement.classList.add('collapsed');
}

function handleClickNewCatForm(event) {
    event.preventDefault();
    if (newFormElement.classList.contains('collapsed')) {
        showNewCatForm();
    } else {
        hideNewCatForm();
    }
}

menuItem.addEventListener('click', handleClickNewCatForm);

//2. Validar formulario nuevo gatito
//NEW-FORM SECTION: Validate form for a new kitten

//NEW-FORM SECTION: Create variables for each input
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputBreed = document.querySelector('.js-input-breed');
const labelMessageError = document.querySelector('.js-label-error');

//NEW-FORM SECTION: Add event listener when clicking in Añadir
/*addButton.addEventListener('click', (event)=>{
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
});*/

//NEW-FORM SECTION: Adicionar nuevo gatito (lección 5.1)

//Create function 
function addNewKitten(event) {
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
    //4. BONUS: Funciones dentro de funciones (lección 2.6), función recogida del ejercicio 3, línea 281
    renderRace(inputBreed);
    //Forma 1 de verificar si se ha especificado la raza
    /*if (valueBreed === ""){
        alert('No se ha especificado la raza');
    }else{
    //Nothing to be done 
    }*/
}
//Add even listener with function
addButton.addEventListener('click', addNewKitten);

//3. Validar formulario búsqueda
//SEARCH SECTION : Validate search form from search section of the HTML document
const inputSearchBreed = document.querySelector('.js_in_search_breed');
const searchButton = document.querySelector('.js_search_btn');

//SEARCH SECTION: Show kittens from ul list only if they include a specific word/value inserted in the input description from the search section of HTML document
const inputSearchDesc = document.querySelector('.js_in_search_desc');
//inputSearchDesc.value = 'juguetón';
/* const descrSearchText = inputSearchDesc.value; */

//SEARCH SECTION: Add event listener when clicking in Buscar
// 2. Filtrar por descripción (lección 2.6)
searchButton.addEventListener('click', (event)=>{
    event.preventDefault();
    // Iniciar una variable content vacía, que después de verificar todas las condiciones, será lo que se convierta en el innerHTML de la ul
    let content = "";
    //Create variables for each input value once we have clicked in Buscar. Añadir lowercase para forzar lo que introduzca el usuario a minúsculas
    const descrSearchText = inputSearchDesc.value.toLowerCase();
    const breedSearchText = inputSearchBreed.value.toLowerCase();
    // Create a condition, if any of the inputs are empty, alert message
    if (descrSearchText === '' && breedSearchText === '') {
        //addButton.setAttribute ('title = "Hola"'); Title only works when hover
        alert('Debe rellenar alguno de los dos valores.');
        } else if (descrSearchText !== '' || breedSearchText !== '') {
            // Create a condition, if it includes the word in search input, add to content. Lowercase también en la descripción del gatito, para compararlo con el valor introducido que hemos forzado a minúsculas
            if (kittenOneObject.desc.toLowerCase().includes(descrSearchText))  {
            content += kittenOne; 
            }
            // Create a condition, if it includes the word in search input, add to content
            if ( kittenTwoObject.desc.toLowerCase().includes(descrSearchText) ) {
                content += kittenTwo; //Added to the result of the previous condition
                } 
            // Create a condition, if it includes the word in search input, add to content
            if ( kittenThreeObject.desc.toLowerCase().includes(descrSearchText) ) {
                    content += kittenThree; //Added to the result of the previous condition
            }}
            else {
                alert('No existe ningún gatito que se ajuste a tu búsqueda.');
                }
        
    // Inner HTML of the ul = content result form previous conditions
    listElement.innerHTML = content; 
   
        });



//DATA-SEARCH SECTIONS: We create a variable that starts as empty
// let content = "";

//Conditions: if the description includes the value/word from the search form, the specific variable (HTML element) will be added to the content
/*if( kittenOneDesc.includes(descrSearchText) )  {
    content += kittenOne;
    }
    
if( kittenTwoDesc.includes(descrSearchText) ) {
    content += kittenTwo; //Added to the result of the previous condition
    }
    
if( kittenThreeDesc.includes(descrSearchText) ) {
    content += kittenThree; //Added to the result of the previous condition
    }

//DATA-SECTION: The innerHTML of the declared variable in section data, for ul element
listElement.innerHTML = content;*/


// 4. Cancelar formulario
// Create variable for button Cancelar
const newCancelButton = document.querySelector('.js-btn-cancel');

//Empty input values + hide form with toggle collapsed when clicking in Cancelar
const cancelNewKitten = (ev)=>{
    ev.preventDefault();
    inputDesc.value = '';
    inputPhoto.value = '';
    inputName.value = '';
    inputBreed.value = '';
    newFormElement.classList.toggle('collapsed');
};
// 1. Cancelar nuevo gatito (lesson 2.6)
newCancelButton.addEventListener('click', cancelNewKitten);


/* SI USÁRAMOS ESTE TIPO DE FUNCIÓN, FUNCIONARÍA IGUAL ANTES DE LLAMARLA O DESPUÉS (antes o después del eventlistener)

function cancelNewKitten (ev) {
    ev.preventDefault();
    inputDesc.value = '';
    inputPhoto.value = '';
    inputName.value = '';
    inputBreed.value = '';
    newFormElement.classList.toggle('collapsed');
};*/

//3. Mostrar la raza o no (lección 2.6)

// Crear una función genérica para comparar el valor del parámetro recogido y ver si está vacío
function renderRace(race) {
        //Si el valor está vacío o undefined
        if (race.value === '' || race.value === undefined){
            console.log(`<p class="card_race">No se ha especificado la raza</p>`);
        }else{ //Si se ha especificado un valor lo recoge
            console.log(`<h3 class="card_race">${race.value}</h3>`);
        }
}

// Event listener con la función genérica, en este caso queremos que el parámetro sea el valor del input de la raza cuando se ejecute al hacer clik
/*addButton.addEventListener('click', (event)=>{
        event.preventDefault();
        renderRace(inputBreed);
});*/



