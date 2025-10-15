import { expect } from "chai";  
import supertest from "supertest";

const requester = supertest("http://localhost:8080")

describe("supertest - test de punta a punta ", function (){
    describe("Testeo Macotas", async function(){
        it("Endpoint para crear mascotas", async function (){
            const pet = {
               name : "kate",
               specie : "cat",     
            }
            const result = await requester.post("/api/pets").send(pet)
    
            expect(result.status).to.equal(201);
        })
    })
})


