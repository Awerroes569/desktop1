export const getRandomElement = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
};

export const generatePerson = (data,startAge,endAge) => {

    const gender = getRandomElement(data.genders);
    const sourceFirstName = gender==='F' ? data.femaleNames : data.maleNames;
    const age = getRandomAge(startAge, endAge);
    return {
        gender: gender,
        firstName: getRandomElement(sourceFirstName),
        lastName: getRandomElement(data.lastNames),
        age: age,
    }
};

export const generatePersons = (data, n, startAge, endAge) => {
    const persons = [];
    for (let i = 0; i < n; i++) {
        persons.push(generatePerson(data,startAge,endAge));
    }
    return persons;
}

export const addingNewPersons = (data, n=1, startAge=18, endAge=78, clear=true) => {
    if (clear) {
        data.persons = [];
    };
    const newPersons = generatePersons(data, n, startAge, endAge);
    data.persons.push(...newPersons);
}

export const getRandomAge = (startAge, endAge) => {

    if (startAge > endAge) {
      [startAge, endAge] = [endAge, startAge]; 
    }
    const range = endAge - startAge + 1;
    const randomAge = startAge + Math.floor(Math.random() * range);
    return randomAge;
};
  