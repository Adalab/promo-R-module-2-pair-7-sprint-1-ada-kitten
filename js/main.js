'use strict';

const newForm = document.querySelector('.js-new-form');

newForm.classList.remove('collapsed');

const listElement = document.querySelector('.js-list');

const kittenOneImage = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';
const kittenOneName = 'Anastacio'.toUpperCase();
const kittenOneDesc = 'Cariñoso, juguetón, le guta estar tranquilo y que nadie lemoleste. Es una maravilla acariciarle!';
const kittenOneRace = 'British Shorthair';

const kittenOne = `<li class="card"> <article> <img class="card_img" src= "${kittenOneImage}" alt="gatito" /><h3 class="card_title"> ${kittenOneName}</h3><h4 class="card_race"> ${kittenOneRace} </h4><p class="card_description"> ${kittenOneDesc} </p></article></li>`;

const kittenTwoImage = 'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg';
const kittenTwoName = 'Fiona'.toUpperCase();
const kittenTwoDesc = 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.  Es una maravilla acariciarle!';
const kittenTwoRace = 'British Shorthair';

const kittenTwo = `<li class="card"> <article> <img class="card_img" src= "${kittenTwoImage}" alt="gatito" /><h3 class="card_title"> ${kittenTwoName} </h3><h4 class="card_race"> ${kittenTwoRace} </h4><p class="card_description"> ${kittenTwoDesc} </p></article></li>`;


const kittenThreeImage = 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg';
const kittenThreeName = 'Cielo'.toUpperCase();
const kittenThreeDesc = 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.  Es una maravilla acariciarle!';
const kittenThreeRace = 'British Shorthair';

const kittenThree = `<li class="card"> <article> <img class="card_img" src= "${kittenThreeImage}" alt="gatito" /><h3 class="card_title"> ${kittenThreeName} </h3><h4 class="card_race"> ${kittenThreeRace} </h4><p class="card_description"> ${kittenThreeDesc} </p></article></li>`;

let content = kittenOne + kittenTwo + kittenThree;

listElement.innerHTML = content;

const inputSearchDesc = document.querySelector('.js_in_search_desc');
inputSearchDesc.value = 'cariñoso';
const descrSearchText = inputSearchDesc.value;

if( kittenOneDesc.includes(descrSearchText) || kittenTwoDesc.includes(descrSearchText) || /* || inputSearchDesc.value = ''*/ )  {

    } else {
        kittenOne.style.display = "none";
    }
    
/* if( kittenTwoDesc.includes(descrSearchText) ) {
    //Completa el código
    }
    
if( kittenThreeDesc.includes(descrSearchText) ) {
    //Completa el código
    }
 */