//Busca pelo nome digitado
export const searchName = (personsInfo, name) => {
  const nameSearched = personsInfo.filter((person) => person.name.toLowerCase().includes(name.toLowerCase()));
  return nameSearched;
};

// Busca por species
export const filterSpecies = (personsInfo, species) => {
  const resultSpecies = personsInfo.filter((person) => person.species.toLowerCase() === species.toLowerCase());
  return resultSpecies;
};

// Busca por genêro
export const filterGender = (personsInfo, gender) => {
  const resultGender = personsInfo.filter((person) => person.gender.toLowerCase() === gender.toLowerCase());
  return resultGender;
};

// Busca por status
export const filterStatus = (personsInfo, status) => {
  const resultStatus = personsInfo.filter((person) => person.status.toLowerCase() === status.toLowerCase());
  return resultStatus;
};

// Busca por ordem alfabetica
export const alphabeticalOrder = (personsInfo, order) => {
  if (order === "AZ") {
    return personsInfo.sort((a, z) => a.name > z.name ? 1 : -1)
  } else {
    return personsInfo.sort((a, z) => a.name > z.name ? -1 : 1)
  }
};

export const calculatePercentage = (personsInfo, selectedFilter) =>
  Number.parseFloat((selectedFilter.length * 100) / personsInfo.length).toFixed(2);
