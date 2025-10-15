import { expect } from "chai";
import supertest from "supertest";
import UserModel from "../models/user.model.js";
import PetsModel from "../models/pet.model.js";
import { config } from "../config/config.js";
import mongoose from 'mongoose';

const requester = supertest("http://localhost:8080")
mongoose.connect(config.dataBase.mongoUrl);

describe("supertest - flujo completo de adopciones", function () {
    let userId;
    let petId;
    let adoptionId;

    it("Crear una adopción", async function () {
        const user = await UserModel.create({
            name: "Estefania",
            email: "owner1@gmail.com",
            password: "Coder123",
            role: "user",
        });

        const pet = await PetsModel.create({
            name: "Luna",
            specie: "cat"
        });
        userId = user._id.toString();
        petId = pet._id.toString();
        
        const res = await requester.post(`/api/adoptions/${userId}/${petId}`)
        expect(res.status).to.equal(201);
        expect(res.body).to.have.property('data');
        adoptionId = res.body.data._id;
    }).timeout(5000)

    it("Obtener todas las adopciones", async function () {
        const res = await requester.get("/api/adoptions");
        expect(res.status).to.equal(200);
        expect(res.body.data).to.be.an('array');
        expect(res.body.data.some(a => a._id === adoptionId)).to.be.true;
    });


    it("Obtener adopción por ID", async function () {
        const res = await requester.get(`/api/adoptions/${adoptionId}`);
        expect(res.status).to.equal(200);
        expect(res.body.data._id).to.equal(adoptionId);
    });

    it("Borrar una adopcion", async function () {
        const res = await requester.delete(`/api/adoptions/${adoptionId}`);
        expect(res.status).to.equal(200);
        expect(res.body.payload).to.equal("Adopción eliminada exitosamente");
    })

})
