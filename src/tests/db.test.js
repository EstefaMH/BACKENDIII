import mongoose from 'mongoose';
import { expect } from 'chai';
import { config } from '../config/config.js';

describe("mongoose connection", function () {
    this.timeout(5000)
    before(async function () {
    mongoose.connect(config.dataBase.mongoUrl);

    await new Promise((resolve, reject) => {
      mongoose.connection.once('connected', resolve);
      mongoose.connection.once('error', reject);
    });
  });

  after(async function () {
    await mongoose.disconnect();
  });

  it("should connect to mongoDB", function () {
    expect(mongoose.connection.readyState).to.equal(1); 
  })
});
