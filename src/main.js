import { searchName, filterSpecies, filterGender, filterStatus, alphabeticalOrder, calculatePercentage } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

const personsInfo = data.results;
const selectSpecies = document.getElementById("species-filter");
const selectGender = document.getElementById("gender-filter");
const selectStatus = document.getElementById("status-filter");
const selectOrder = document.getElementById("alphabetical-order");
const searchNamePersona = document.getElementById("character-search");
const showFilterPercentage = document.getElementById("filter-compatible-calculation");
const selectButtonClearFilters = document.getElementById("clear-filters");

function printCards(data) {
  document.getElementById("cards-container").innerHTML = data.map((item) =>
    ` <section class="box">
        <h3 class="name-person"> ${item.name}</h3>
        <img class="image-person" src="${item.image}"/>
        <div class="card-info">
          <p><strong>Espécie: </strong>${item.species}</p>
          <p><strong>Gênero: </strong>${item.gender}</p>
          <p><strong>Status: </strong>${item.status}</p>
          <p><strong>Origem: </strong>${item.origin.name}</p>
          <p><strong>Localização: </strong>${item.location.name}</p>
          <p><strong>Número de episódios em que aparece: </strong>${item.episode.length}</p>
        </div>
      </section>
` ).join('');
}
printCards(personsInfo);

function showPercentage(data) {
  showFilterPercentage.innerHTML = `Essa categoria representa ${data}`;
}

function searchByName(event) {
  const personaName = searchName(personsInfo, event.target.value);
  return printCards(personaName);
}
searchNamePersona.addEventListener("keyup", searchByName);

function showResultOfSpeciesFilter(event) {
  const resultSpecies = filterSpecies(personsInfo, event.target.value);
  const speciesPercentage = `${calculatePercentage(personsInfo.length, resultSpecies.length)}% dos personagens da série Rick and Morty.`;
  showPercentage(speciesPercentage);
  return printCards(resultSpecies);
}
selectSpecies.addEventListener("change", showResultOfSpeciesFilter);

function showResultOfGenderFilter(event) {
  const resultGender = filterGender(personsInfo, event.target.value);
  const genderPercentage = `${calculatePercentage(personsInfo.length, resultGender.length)}% dos personagens da série Rick and Morty.`;
  showPercentage(genderPercentage);
  return printCards(resultGender);
}
selectGender.addEventListener("change", showResultOfGenderFilter);

function showResultOfStatusFilter(event) {
  const resultStatus = filterStatus(personsInfo, event.target.value);
  const statusPercentage = `${calculatePercentage(personsInfo.length, resultStatus.length)}% dos personagens da série Rick and Morty.`;
  showPercentage(statusPercentage);
  return printCards(resultStatus);
}
selectStatus.addEventListener("change", showResultOfStatusFilter);

function showAlphabeticalOrder(event) {
  const order = alphabeticalOrder(personsInfo, event.target.value);
  return printCards(order);
}
selectOrder.addEventListener("change", showAlphabeticalOrder);

function clearFilters(event) {
  event.preventDefault();
  printCards(personsInfo);
  selectSpecies.options[(selectSpecies.selectedIndex = 0)];
  selectGender.options[(selectGender.selectedIndex = 0)];
  selectStatus.options[(selectStatus.selectedIndex = 0)];
  selectOrder.options[(selectOrder.selectedIndex = 0)];
  searchNamePersona.value = "";
  showFilterPercentage.innerHTML = "";
}
selectButtonClearFilters.addEventListener("click", clearFilters);


// function printButtonSpecies(personsInfo, speciesHtml) {
//   let filterConcat = [];
//   const speciesType = personsInfo.map(({species}) => (species))

//     speciesType.forEach(function(typeValueOf) {
//       filterConcat = filterConcat.concat(typeValueOf);
//     })

//     const filters = [...new Set(filterConcat)]

//     filters.forEach(function(newFilters){
//       speciesHtml.insertAdjacentHTML( `<option value="${newFilters}" class="species-filter">${newFilters.charAt(0).toUpperCase() + (newFilters.slice(1, newFilters.length))}</option>`)
//     })
//  }
//  printButtonSpecies(personsInfo);

// function printButtonSpecies(data){
//   let species = personsInfo.map((item) => (item.species))
//   const uniqueSpecies = [...new Set(species)]

//   uniqueSpecies.forEach(function())
// }
