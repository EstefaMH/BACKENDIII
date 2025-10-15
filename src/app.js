import express from 'express';
import { config } from './config/config.js';
import { connectDatabase } from './config/dbConfig.js';
import mocksRouter from './routes/mocks.router.js';
import petsRouter from './routes/pets.router.js';
import usersRouter from './routes/users.router.js';
import adoptionRouter from './routes/adoption.router.js';
import swaggerUI from "swagger-ui-express"
import swaggerSpec from './docs/swaggerConfig.js';



const app = express();
app.use(express.json());

//const swaggerDocument = YAML.load("./docs/docs.yaml");



app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec) )
app.use('/api/mocks', mocksRouter);
app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);
app.use('/api/adoptions', adoptionRouter);



async function database() {
  return await connectDatabase();
}
database();

app.listen(config.appConfig.port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${config.appConfig.port}`);
});