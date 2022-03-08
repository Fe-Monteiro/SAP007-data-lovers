import { searchName, filterSpecies, filterGender, filterStatus, alphabeticalOrder, calculatePercentage } from '../src/data.js';

const characters = [
  {
    "name": "Gar Gloonch",
    "status": "Dead",
    "species": "Alien",
    "gender": "Male",
  },
  {
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "gender": "Male",
  }
];

const exampleOfNames = [
  { "name": "Gar Gloonch" },
  { "name": "Rick Sanchez" },
]

const orderAZ = [
  {
    "gender": "Male",
    "name": "Gar Gloonch",
    "species": "Alien",
    "status": "Dead",
  },
  {
    "gender": "Male",
    "name": "Rick Sanchez",
    "species": "Human",
    "status": "Alive",
  }
]

const orderZA = [
  {
    "gender": "Male",
    "name": "Rick Sanchez",
    "species": "Human",
    "status": "Alive",
  },
  {
    "gender": "Male",
    "name": "Gar Gloonch",
    "species": "Alien",
    "status": "Dead",
  }
]

describe('searchName', () => {
  it('is a function', () => {
    expect(typeof searchName).toBe('function');
  });

  it('You must search for a name `searchName`', () => {
    const expected = searchName(exampleOfNames, "Rick")
    expect(expected).toEqual([{ "name": "Rick Sanchez" }])
  });
});

describe('filterSpecies', () => {
  it('is a function', () => {
    expect(typeof filterSpecies).toBe('function');
  });

  it('You should filter by species `filterSpecies`', () => {
    const humanSpecies = "Human"
    const expected = filterSpecies(characters, humanSpecies)
    expect(expected[0].species).toEqual(humanSpecies)
  });
});

describe('filterGender', () => {
  it('is a function', () => {
    expect(typeof filterGender).toBe('function');
  });

  it('You should filter by gender `filterGender`', () => {
    const maleGender = "Male"
    const expected = filterGender(characters, maleGender)
    expect(expected[0].gender).toEqual(maleGender)
  });
});

describe('filterStatus', () => {
  it('is a function', () => {
    expect(typeof filterStatus).toBe('function');
  });

  it('You should filter by status `filterStatus`', () => {
    const deadStatus = "Dead"
    const expected = filterStatus(characters, deadStatus)
    expect(expected[0].status).toEqual(deadStatus)
  });
});

describe('alphabeticalOrder', () => {
  it('is a function', () => {
    expect(typeof alphabeticalOrder).toBe('function');
  });

  it('Should return sorted from A-Z', () => {
    expect(alphabeticalOrder(characters, "AZ")).toEqual(orderAZ);
  });

  it('Should return sorted from Z-A', () => {
    expect(alphabeticalOrder(characters, "ZA")).toEqual(orderZA);
  });
});

describe('calculatePercentage', () => {
  it('is a function', () => {
    expect(typeof calculatePercentage).toBe('function');
  });

  it('It should return 50% of human characters', () => {
  const expected = calculatePercentage(characters, filterSpecies(characters, "Human"))
    expect(expected).toBe("50.00")
  });
});
