import PetsModel from "../models/pet.model.js";

export const GetAllPetsDAO = async () => {
  try {
    const pets = await PetsModel.find().lean();
    return {status : 200 , reponse : pets};
  } catch (error) {
    console.error('Error en el DAO al obtener todas las mascotas:', error);
    return {status : 500 , error : 'Fallo al recuperar las mascotas de la base de datos.'};
  }
};
