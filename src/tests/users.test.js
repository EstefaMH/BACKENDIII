import { expect } from 'chai';
import { generateMockUsers } from '../utils/user.mocking.js';

describe("tests for users", function (){
    it("should create a mockUser", function (){
        const number = 5;
        const users = generateMockUsers(number);
        expect(users).to.be.an('array').that.has.lengthOf(number);
    })
});