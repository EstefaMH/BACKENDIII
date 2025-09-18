import dotenv from 'dotenv';

dotenv.config();
export const config = {
    appConfig: {
        port: process.env.PORT
    },
    dataBase:{
        mongoUrl: process.env.MONGODB_URL,
        mongoDataBaseName : process.env.MONGODB_NAME
    },
   
}

