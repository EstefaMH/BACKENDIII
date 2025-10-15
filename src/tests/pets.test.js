import { expect } from 'chai';
import mongoose from 'mongoose';
import { config } from '../config/config.js';
import { CreatePetDAO } from '../dao/pets.dao.js';
import PetsModel from '../models/pet.model.js';
import { generateMockPets } from '../utils/pet.mocking.js';


mongoose.connect(config.dataBase.mongoUrl);

describe("tests for pets", function (){
    it("should create a mockPet", function (){
        const number = 5;
        const pets = generateMockPets(number);
        expect(pets).to.be.an('array').that.has.lengthOf(number);
    })
});

describe("test Pets DAOs", function () {
    let pet;

    before(function () {
        pet = new PetsModel();
        pet.name = "Zeus";
        pet.specie = "Dog";
    });

    it("should create a pet using the DAO", async function () {
        const result = await CreatePetDAO(pet);
        expect(result).to.have.property('status').that.equals(201);
        expect(result).to.have.property('response');
        expect(result.response).to.be.instanceOf(PetsModel);
        expect(result.response.name).to.equal("Zeus");
        expect(result.response.specie).to.equal("Dog");
    }).timeout(5000);
});

