import { CreateAdoptionDAO, DeleteAdoptionDAO, GetAdoptionByIdDAO, GetAllAdoptionsDAO, UpdateAdoptionDAO } from "../dao/adoption.dao.js";

export const GetAllAdoptionsController = async (req, res) => {
  try {
    const adoptions = await GetAllAdoptionsDAO();

    if (adoptions.status !== 200) {
      return res.status(adoptions.status).json({ error: adoptions.error });
    }

    if (adoptions.response.length === 0) {
      return res.status(404).json({ message: 'No se encontraron adopciones.' });
    }

    res.status(200).json({
      payload: 'Adopciones obtenidas exitosamente',
      data: adoptions.response,
    });
  } catch (error) {
    console.error('Error al obtener adopciones:', error);
    res.status(500).json({
      error: 'Error interno del servidor al obtener las adopciones.',
    });
  }
};

export const GetAdoptionByIdController = async (req, res) => {
  const { id } = req.params;

  try {
    const adoption = await GetAdoptionByIdDAO(id);

    if (adoption.status !== 200) {
      return res.status(adoption.status).json({ error: adoption.error });
    }

    res.status(200).json({
      payload: 'Adopción obtenida exitosamente',
      data: adoption.response,
    });
  } catch (error) {
    console.error('Error al obtener adopción por ID:', error);
    res.status(500).json({
      error: 'Error interno del servidor al obtener la adopción.',
    });
  }
};

export const CreateAdoptionController = async (req, res) => {
  const { owner, pet } = req.body;

  try {
    const adoption = await CreateAdoptionDAO({ owner, pet });

    if (adoption.status !== 201) {
      return res.status(adoption.status).json({ error: adoption.error });
    }

    res.status(201).json({
      payload: 'Adopción creada exitosamente',
      data: adoption.response,
    });
  } catch (error) {
    console.error('Error al crear la adopción:', error);
    res.status(500).json({
      error: 'Error interno del servidor al crear la adopción.',
    });
  }
};


export const UpdateAdoptionController = async (req, res) => {
  const { id } = req.params;
  const { owner, pet } = req.body;

  try {
    const adoption = await UpdateAdoptionDAO(id, { owner, pet });

    if (adoption.status !== 200) {
      return res.status(adoption.status).json({ error: adoption.error });
    }

    res.status(200).json({
      payload: 'Adopción actualizada exitosamente',
      data: adoption.response,
    });
  } catch (error) {
    console.error('Error al actualizar la adopción:', error);
    res.status(500).json({
      error: 'Error interno del servidor al actualizar la adopción.',
    });
  }
};

export const DeleteAdoptionController = async (req, res) => {
  const { id } = req.params;

  try {
    const adoption = await DeleteAdoptionDAO(id);

    if (adoption.status !== 200) {
      return res.status(adoption.status).json({ error: adoption.error });
    }

    res.status(200).json({
      payload: 'Adopción eliminada exitosamente',
      data: adoption.response,
    });
  } catch (error) {
    console.error('Error al eliminar la adopción:', error);
    res.status(500).json({
      error: 'Error interno del servidor al eliminar la adopción.',
    });
  }
};

