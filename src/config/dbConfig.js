
import dotenv from 'dotenv';
import mongoose from "mongoose";
import { config } from './config.js';

dotenv.config();
export const connectDatabase = async () => {

    try {
        await mongoose.connect(
            config.dataBase.mongoUrl,
            {
                dbName: config.dataBase.mongoDataBaseName,
            }
        )
        console.log("Conexion exitosa a la base de datos")
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
};






