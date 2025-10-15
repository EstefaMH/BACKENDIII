import { createHash, passwordValidation } from '../utils/bycrypt.js';
import { expect } from 'chai';

// Pruebas para las funciones createHash y passwordValidation

describe('Test function createHash & passwordValidation', function (){
    it('createHash should return a hashed password', function (){
        const password = 'coder123';
        const hashedPassword = createHash(password);
        expect(hashedPassword).to.be.a('string');
        expect(hashedPassword).to.not.equal(password);
    })

    it('passwordValidation should validate a password against a hash', function (){
        const password = 'coder123';
        const hashedPassword = createHash(password);
        const isValid = passwordValidation(password, hashedPassword);
        expect(isValid).to.be.true;
    })

    it("the passwordValidation should fail if the hashed pasword is disturbed", function (){
        const password = 'coder123';
        let hashedPassword = createHash(password);
        const disturbedHash = hashedPassword + 'disturb';
        hashedPassword = disturbedHash
        const isValid = passwordValidation(password, disturbedHash);
        expect(isValid).to.be.false;
    })
});

