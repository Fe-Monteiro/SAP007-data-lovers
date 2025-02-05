export const searchName = (personsInfo, name) => {
  const nameSearched = personsInfo.filter((person) => person.name.toLowerCase().includes(name.toLowerCase()));
  return nameSearched;
};

export const filterSpecies = (personsInfo, species) => {
  const resultSpecies = personsInfo.filter((person) => person.species.toLowerCase() === species.toLowerCase());
  return resultSpecies;
};

export const filterGender = (personsInfo, gender) => {
  const resultGender = personsInfo.filter((person) => person.gender.toLowerCase() === gender.toLowerCase());
  return resultGender;
};

export const filterStatus = (personsInfo, status) => {
  const resultStatus = personsInfo.filter((person) => person.status.toLowerCase() === status.toLowerCase());
  return resultStatus;
};

export const alphabeticalOrder = (personsInfo, order) => {
  const copyPersonsInfo = [...personsInfo];
  if (order === "AZ") {
    return copyPersonsInfo.sort((a, z) => a.name > z.name ? 1 : -1)
  } else {
    return copyPersonsInfo.sort((a, z) => a.name < z.name ? 1 : -1)
  }
};

export const calculatePercentage = (personsInfo, selectedFilter) => {
  const resultPercentage = parseFloat((selectedFilter.length * 100) / personsInfo.length).toFixed(2);
  return resultPercentage;
};
