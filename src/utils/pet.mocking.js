import { faker } from '@faker-js/faker';

const generateMockPet = () => {
    return {
        name: faker.animal.dog(),
        specie: faker.animal.type(),
    };
};

export const generateMockPets = (count) => {
    const pets = [];
    for (let i = 0; i < count; i++) {
        pets.push(generateMockPet());
    }
    return pets;
};