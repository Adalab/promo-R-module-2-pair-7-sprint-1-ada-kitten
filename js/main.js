"use strict";


////DATA SECTION (kittens)

//1. Variable for empty ul element

const listElement = document.querySelector(".js-list");

//2.Función genérica para crear objetos. Convertir cada gatito en un objeto (lección 2.7).

function getKittenData(img, nm, rc, desc) {
    const kittenData = {
        image: img,
        name: nm.toUpperCase(),
        race: rc,
        desc: desc,
    };
    return kittenData;
}

//3.Función genérica para renderizar gatitos a partir del objeto genérico (elemento li html). La función nos devuelve el elemento HTML con el objeto genérico creado como parámetro

function renderKitten(kittenData) {
    const html = `<li class="card"> <article> <img class="card_img" src= "${kittenData.image}" alt="gatito" /><h3 class="card_title"> ${kittenData.name} </h3><h4 class="card_race"> ${kittenData.race} </h4><p class="card_description"> ${kittenData.desc} </p></article></li>`;
    return html;
}

//4.Crear objeto para cada gatito. Ejecutamos la función getKittenData para crear un objeto de cada gatito:

const kittenOneObject = getKittenData(
    "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg",
    "Anastacio",
    "British Shorthair",
    "Cariñoso, juguetón, le guta estar tranquilo y que nadie lemoleste. Es una maravilla acariciarle!"
);

const kittenTwoObject = getKittenData(
    "https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg",
    "Fiona",
    "American Shorthair",
    "Risueño, le guta estar tranquilo y que nadie lemoleste. Es una maravilla acariciarle!"
);

const kittenThreeObject = getKittenData(
    "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg",
    "Cielo",
    "British Shorthair",
    "Cariñoso, juguetón, le guta estar tranquilo y que nadie lemoleste. Es una maravilla acariciarle!"
);

//5.Crear un array con los objetos creados de cada gatito

const kittenDataList = [kittenOneObject, kittenTwoObject, kittenThreeObject];

//6.Función para renderizar el conjunto de gatitos a partir de un array con un bucle for...of y meterlos dentro del ul. Usamos la función renderKitten dentro que renderiza cada uno de los gatitos (desde el objeto creado a un li)

function renderKittenList(kittenDataList) {
    let html = "";
    for (const kitten of kittenDataList) {
        html += renderKitten(kitten);
    }
    listElement.innerHTML = html;
}

//7.Ejecutar función para renderizar el conunto de gatitos dentrol del ul. Ejecutamos la función para que en cada loop recoja los elementos HTML li para cada gato

renderKittenList(kittenDataList);




////HEADER & NEW-FORM SECTION (mostrar u ocultar formulario)

//1.Create variables for + icon (js-item), form in new-form section (js-new-form) of the HTML document, añadir button (js-btn-add)
const menuItem = document.querySelector(".js-item");
const newFormElement = document.querySelector(".js-new-form");
const addButton = document.querySelector(".js-btn-add");

//2.Show or hide form

//Option 01: when clicking in + icon with an event listener and toggle
/*menuItem.addEventListener('click', ()=>{
    newForm.classList.toggle('collapsed');
});*/

//Option 02: Mostrar/ocultar el formulario nuevo gatito con funciones (lección 5.1)

function showNewCatForm() {
    newFormElement.classList.remove("collapsed");
}

function hideNewCatForm() {
    newFormElement.classList.add("collapsed");
}

function handleClickNewCatForm(event) {
    event.preventDefault();
    if (newFormElement.classList.contains("collapsed")) {
        showNewCatForm();
    } else {
        hideNewCatForm();
    }
}

//3. Event listener al hacer click en +

menuItem.addEventListener("click", handleClickNewCatForm);




////NEW-FORM SECTION (rellenar formulario, validar o cancelar)

//1.Crear variables para cada input

const inputDesc = document.querySelector(".js-input-desc");
const inputPhoto = document.querySelector(".js-input-photo");
const inputName = document.querySelector(".js-input-name");
const inputRace = document.querySelector(".js-input-race");
const labelMessageError = document.querySelector(".js-label-error");

//2.Función para validar el formulario

function addNewKitten(event) {
    event.preventDefault();
    //Create variables for each input value once we have clicked in Añadir
    const valueDesc = inputDesc.value;
    const valuePhoto = inputPhoto.value;
    const valueName = inputName.value;
    const valueRace = inputRace.value;
    // Create a condition, if any of the inputs are empty, alert message
    if (valueDesc === "" || valuePhoto === "" || valueName === "") {
        alert("Debe rellenar todos los valores.");
    } else {
        //Nothing to be done
    }
    //Funciones dentro de funciones (lección 2.6)
    renderRace(inputRace);
}

//3.Función para mostrar o no la raza (lección 2.6)

// Crear una función genérica para comparar el valor del parámetro recogido y ver si está vacío

function renderRace(race) {
    //Si el valor está vacío o undefined
    if (race.value === "" || race.value === undefined) {
        console.log(`<p class="card_race">No se ha especificado la raza</p>`);
    } else {
        //Si se ha especificado un valor lo recoge
        console.log(`<h3 class="card_race">${race.value}</h3>`);
    }
}

//4. Add even listener with function (añadir)
addButton.addEventListener("click", addNewKitten);

//CANCELAR FORMULARIO

//1.Create variable for button Cancelar
const newCancelButton = document.querySelector(".js-btn-cancel");

//2.Empty input values + hide form with toggle collapsed when clicking in Cancelar
const cancelNewKitten = (ev) => {
    ev.preventDefault();
    inputDesc.value = "";
    inputPhoto.value = "";
    inputName.value = "";
    inputRace.value = "";
    newFormElement.classList.toggle("collapsed");
};

//3. Event listener. Cancelar nuevo gatito (lesson 2.6)
newCancelButton.addEventListener("click", cancelNewKitten);




////SEARCH SECTION (filtrar por palabra)

//1.Crear variables

const inputSearchRace = document.querySelector(".js_in_search_race");
const searchButton = document.querySelector(".js_search_btn");
const inputSearchDesc = document.querySelector(".js_in_search_desc");


//2.Filtrar por descripción (lección 2.9 bucles)

function filterKitten() {
    // Iniciar una variable content vacía, que después de verificar todas las condiciones, será lo que se convierta en el innerHTML de la ul
    let html = "";
    //Create variables for each input value once we have clicked in Buscar. Añadir lowercase para forzar lo que introduzca el usuario a minúsculas
    const descrSearchText = inputSearchDesc.value.toLowerCase();
    const raceSearchText = inputSearchRace.value.toLowerCase();
    // Create a condition, if any of the inputs are empty, alert message
    if (descrSearchText === "" && raceSearchText === "") {
        alert("Debe rellenar alguno de los dos valores.");
    }else if (descrSearchText !== "" || raceSearchText !== "") {
        // Create a condition, if it includes the word in search input, add to content. Lowercase también en la descripción del gatito, para compararlo con el valor introducido que hemos forzado a minúsculas
        for (const kitten of kittenDataList) {
            if (kitten.desc.toLowerCase().includes(descrSearchText) && kitten.race.toLowerCase().includes(raceSearchText)) {
                html += renderKitten(kitten);
            }
        }
        if (html === ''){
            html = 'No existe ningún gatito que se ajuste a tu búsqueda.';  
        }
    }
    // Inner HTML of the ul = content result form previous conditions
    listElement.innerHTML = html;
}
    

//3.Event listener. Botón buscar

searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    filterKitten();
});