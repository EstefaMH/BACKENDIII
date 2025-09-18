import { GetAllPetsDAO } from "../dao/pets.dao.js";

export const GetAllPetsController = async (req, res) => {
  try {
    const pets = await GetAllPetsDAO();
    
    if(pets.status !== 200){
      return res.status(pets.status).json({ error: pets.error });
    }
    
    if (pets.length === 0) {
      return res.status(404).json({ message: 'No se encontraron mascotas.' });
    }
    res.status(200).json({
      payload: 'Mascotas obtenidas exitosamente',
      data: pets.reponse,
    });
  } catch (error) {
    console.error('Error al obtener mascotas:', error);
    res.status(500).json({
      error: 'Error interno del servidor al obtener las mascotas.',
    });
  }
};