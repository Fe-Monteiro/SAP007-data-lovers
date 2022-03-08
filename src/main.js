import { searchName, filterSpecies, filterGender, filterStatus, alphabeticalOrder, calculatePercentage } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

const personsInfo = data.results;
const searchNamePersona = document.getElementById("character-search");
const selectSpecies = document.getElementById("species-filter");
const selectGender = document.getElementById("gender-filter");
const selectStatus = document.getElementById("status-filter");
const selectOrder = document.getElementById("alphabetical-order");
const selectButtonClearFilters = document.getElementById("clear-filters");
const showFilterPercentage = document.getElementById("filter-compatible-calculation");

searchNamePersona.addEventListener("keyup", searchByName);
selectSpecies.addEventListener("change", showResultOfSpeciesFilter);
selectGender.addEventListener("change", showResultOfGenderFilter);
selectStatus.addEventListener("change", showResultOfStatusFilter);
selectOrder.addEventListener("change", showAlphabeticalOrder);
selectButtonClearFilters.addEventListener("click", clearFilters);

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

function showPercentage(personsInfo, selectedFilter) {
  let result = calculatePercentage(personsInfo, selectedFilter)
  showFilterPercentage.innerHTML = "Existem " + selectedFilter.length + " personagens deste filtro e representam " + result + "% do total de personagens."
}

function searchByName(event) {
  const personaName = searchName(personsInfo, event.target.value);
  printCards(personaName);
  showPercentage(personsInfo, personaName);
}

function showResultOfSpeciesFilter() {
  const valueSpeciesSelected = selectSpecies.value;
  const selectedSpecies = filterSpecies(personsInfo, valueSpeciesSelected);
  printCards(selectedSpecies);
  showPercentage(personsInfo, selectedSpecies);
}

function showResultOfGenderFilter() {
  const valueGenderSelected = selectGender.value;
  const selectedGender = filterGender(personsInfo, valueGenderSelected);
  printCards(selectedGender);
  showPercentage(personsInfo, selectedGender);
}

function showResultOfStatusFilter() {
  const valueStatusSelected = selectStatus.value;
  const selectedStatus = filterStatus(personsInfo, valueStatusSelected);
  printCards(selectedStatus);
  showPercentage(personsInfo, selectedStatus);
}

function showAlphabeticalOrder(event) {
  const order = alphabeticalOrder(personsInfo, event.target.value);
  printCards(order);
  showPercentage(personsInfo, order);
}

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
