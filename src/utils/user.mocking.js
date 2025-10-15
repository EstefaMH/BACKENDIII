import { faker } from '@faker-js/faker';
import { createHash } from './bycrypt.js';

const generateMockUser = () => {

    const hashedPassword = createHash('coder123');
    return {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: hashedPassword,
        role: faker.helpers.arrayElement(['user', 'admin']),
        pets: [],
    };
};

export const generateMockUsers = (count) => {
    const users = [];
    for (let i = 0; i < count; i++) {
        users.push(generateMockUser());
    }
    return users;
};