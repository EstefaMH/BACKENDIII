import express from 'express';
import { config } from './config/config.js';
import { connectDatabase } from './config/dbConfig.js';
import mocksRouter from './routes/mocks.router.js';
import petsRouter from './routes/pets.router.js';
import usersRouter from './routes/users.router.js';

const app = express();


app.use(express.json());


app.use('/api/mocks', mocksRouter);
app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);


async function database() {
  return await connectDatabase();
}
database();

app.listen(config.appConfig.port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${config.appConfig.port}`);
});