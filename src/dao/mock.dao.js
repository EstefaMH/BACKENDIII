import PetsModel from "../models/pet.model.js";
import UserModel from "../models/user.model.js";

export const mockGenerateDataUsersDAO = async (users) => {
    if (!Array.isArray(users) || users.length === 0) {
        return { status: 400, error: 'El array de usuarios no es válido o está vacío.' };
    }

    try {
        const result = await UserModel.insertMany(users);
        console.log('Usuarios insertados correctamente:', result);
        return { status: 201, response: result };
    } catch (error) {
        console.error('Error en mockGenerateDataDAO al insertar usuarios:', error);
        return { status: 500, error: 'Fallo en la inserción de usuarios en la base de datos.' };
    }
};

export const mockGenerateDataPetsDAO = async (pets) => {
    if (!Array.isArray(pets) || pets.length === 0) {
        return { status: 400, error: 'El array de mascotas no es válido o está vacío.' };
    }

    try {
        const result = await PetsModel.insertMany(pets);
        console.log('mascotas insertadas correctamente:', result);
        return { status: 201, response: result };
    } catch (error) {
        console.error('Error en mockGenerateDataDAO al insertar mascotas:', error);
        return { status: 500, error: 'Fallo en la inserción de mascotas en la base de datos.' };
    }
};