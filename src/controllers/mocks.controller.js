import { mockGenerateDataPetsDAO, mockGenerateDataUsersDAO } from "../dao/mock.dao.js";
import { generateMockPets } from "../utils/pet.mocking.js";
import { generateMockUsers } from "../utils/user.mocking.js";

export const mocksGenerateDataController = async (req, res) => {
  const { users: numUsers, pets: numPets } = req.body;

  if (!numUsers || !numPets) {
    return res.status(400).json({ error: 'Parametros incompletos enviar numero de usuarios y numero de personas' });
  }

  try {

    const users = generateMockUsers(numUsers);
    const usersCreated = await mockGenerateDataUsersDAO(users);

    if (usersCreated.status !== 201) {
      return res.status(usersCreated.status).json({ error: usersCreated.error });
    }

    const pets = generateMockPets(numPets);
    const petsCreated = await mockGenerateDataPetsDAO(pets);

    if (petsCreated.status !== 201) {
      return res.status(usersCreated.status).json({ error: usersCreated.error });
    }

    res.status(201).json({ payload: "Datos generados e insertados correctamente", });
  } catch (error) {
    console.error('Error al generar e insertar datos:', error);
    res.status(500).json({ error: 'Error al generar e insertar datos.' });
  }
}

export const mockingUsersController = (req, res) => {
  const { quantity } = req.params;

  const userCount = parseInt(quantity);

  if (isNaN(userCount) || userCount <= 0) {
    return res.status(400).json({ error: 'El número de usuarios debe ser un entero positivo.' });
  }

  try {
    const users = generateMockUsers(userCount);
    res.status(200).json({
      payload: "usuarios simulados generados correctamente.",
      data: users
    });
  } catch (error) {
    console.error('Error al generar usuarios simulados:', error);
    res.status(500).json({ error: 'Error interno del servidor al generar datos.' });
  }
};

export const mocking50UsersController = (req, res) => {
  try {
    const users = generateMockUsers(50);
    res.status(200).json({
      payload: "usuarios generados correctamente.",
      data: users
    });
  } catch (error) {
    console.error('Error al generar usuarios simulados:', error);
    res.status(500).json({ error: 'Error interno del servidor al generar datos.' });
  }
};

export const mockingPetsController = (req, res) => {
  try {
    const pets = generateMockPets(100);
    res.status(200).json({
      payload: "mascotas generadas correctamente.",
      data: pets
    });
  } catch (error) {
    console.error('Error al generar mascotas simuladas:', error);
    res.status(500).json({ error: 'Error interno del servidor al generar datos.' });
  }
}