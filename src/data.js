//Busca pelo nome digitado
export const searchName = (data, name) => {
  const nameSearched = data.filter((person) => person.name.toLowerCase().includes(name.toLowerCase()));
  return nameSearched;
};

// Busca por species
export const filterSpecies = (data, species) => {
  const resultSpecies = data.filter((person) => person.species.toLowerCase() === species.toLowerCase());
  return resultSpecies;
};

// Busca por genêro
export const filterGender = (data, gender) => {
  const resultGender = data.filter((person) => person.gender.toLowerCase() === gender.toLowerCase());
  return resultGender;
};

// Busca por status
export const filterStatus = (data, status) => {
  const resultStatus = data.filter((person) => person.status.toLowerCase() === status.toLowerCase());
  return resultStatus;
};

// Busca por ordem alfabetica
export const alphabeticalOrder = (data, order) => {
  if (order === "AZ") {
    return data.sort((a, z) => a.name > z.name ? 1 : -1)
  } else {
    return data.sort((a, z) => a.name > z.name ? -1 : 1)
  }
};

export const calculatePercentage = (total, fractionItem) => {
  const percentage = Math.round((fractionItem * 100) / total);
  return percentage;
};








//  export const filterData = (data, filterSpecies, filterGender, filterStatus) => {
//   const allFiltersAreChosen = filterSpecies !== "" && filterGender !== "" && filterStatus !== "";
//   const speciesFilterIsNotEmpty = filterSpecies !== "";
//   const genderFilterIsNotEmpty = filterGender !== "";
//   const statusFilterIsNotEmpty = filterStatus !== "";
//   let filterResults = "";

//   if (allFiltersAreChosen) {
//     filterResults = data.filter(results => results.species === filterSpecies && results.gender === filterGender && results.status === filterStatus);
//     return filterResults;
//   }
//   if (speciesFilterIsNotEmpty) {
//     filterResults = data.filter(results => results.species === filterSpecies);
//     return filterResults;
//   }
//   if (genderFilterIsNotEmpty) {
//     filterResults = data.filter(results => results.gender === filterGender);
//     return filterResults;
//   }
//   if (statusFilterIsNotEmpty) {
//     filterResults = data.filter(results => results.status === filterStatus);
//     return filterResults;
//   }else{
//     return false
//   }
// };
