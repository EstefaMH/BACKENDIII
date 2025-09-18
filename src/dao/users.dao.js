import UserModel from "../models/user.model.js";


export const GetAllUserDAO = async () => {
  try {
    const users = await UserModel.find().lean();
    return {status : 200 , reponse : users};
  } catch (error) {
    console.error('Error en el DAO al obtener todas los usuarios:', error);
    return {status : 500 , error : 'Fallo al recuperar los usuarios de la base de datos.'};
  }
};