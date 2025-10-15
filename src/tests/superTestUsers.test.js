import { expect } from "chai";
import supertest from "supertest";
import UserModel from "../models/user.model.js";

const requester = supertest("http://localhost:8080")

describe("supertest - flujo completo de usuario", function () {
    let userId;



    it("flujo creacion usuario", async function () {

        const user = {
            name: "kate",
            email: "kate@gmail.com",
            password: "kate123",
            role: "user"
        };

        const createRes = await requester.post("/api/users").send(user);
        expect(createRes.status).to.equal(201);
        expect(createRes.body).to.have.property('data');
        userId = createRes.body.data._id;
    })

    it("flujo obtener usuarios", async function () {
        const getAllRes = await requester.get("/api/users");
        expect(getAllRes.status).to.equal(200);
        expect(getAllRes.body.data).to.be.an('array');
        expect(getAllRes.body.data.some(u => u._id === userId)).to.be.true;

    })

    it("Flujo actualizacion usuario ", async function () {
          const updatedUser = {
            name: "kate updated",
            email: "kate.updated@example.com",
            password: "newsecurepass",
            role: "admin"
        };

        const updateRes = await requester.put(`/api/users/${userId}`).send(updatedUser);
        expect(updateRes.status).to.equal(200);
        expect(updateRes.body.data.name).to.equal("kate updated");
        expect(updateRes.body.data.role).to.equal("admin");
        
    })

    it("Flujo borrar usuario", async function() {
        const deleteRes = await requester.delete(`/api/users/${userId}`);
        expect(deleteRes.status).to.equal(200);
        expect(deleteRes.body.payload).to.equal("User deleted successfully");


        const verifyRes = await requester.get("/api/users");
        expect(verifyRes.body.data.some(u => u._id === userId)).to.be.false;
    })
});
