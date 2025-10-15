import adoptionModel from "../models/adoption.model.js";



export const GetAllAdoptionsDAO = async () => {
  try {
    const adoptions = await adoptionModel.find()
      .populate('owner')
      .populate('pet')
      .lean();

    return { status: 200, response: adoptions };
  } catch (error) {
    console.error('Error en el DAO al obtener todas las adopciones:', error);
    return { status: 500, error: 'Fallo al recuperar las adopciones de la base de datos.' };
  }
};


export const GetAdoptionByIdDAO = async (id) => {
  try {
    const adoption = await adoptionModel.findById(id)
      .populate('owner')
      .populate('pet')
      .lean();

    if (!adoption) {
      return { status: 404, error: 'Adopción no encontrada.' };
    }

    return { status: 200, response: adoption };
  } catch (error) {
    console.error('Error en el DAO al obtener la adopción por ID:', error);
    return { status: 500, error: 'Fallo al recuperar la adopción.' };
  }
};


export const CreateAdoptionDAO = async (adoptionData) => {
  try {
    const newAdoption = await adoptionModel.create(adoptionData);
    return { status: 201, response: newAdoption };
  } catch (error) {
    console.error('Error en el DAO al crear la adopción:', error);
    return { status: 500, error: 'Fallo al crear la adopción en la base de datos.' };
  }
};


export const UpdateAdoptionDAO = async (id, updateData) => {
  try {
    const updatedAdoption = await adoptionModel.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updatedAdoption) {
      return { status: 404, error: 'Adopción no encontrada para actualizar.' };
    }

    return { status: 200, response: updatedAdoption };
  } catch (error) {
    console.error('Error en el DAO al actualizar la adopción:', error);
    return { status: 500, error: 'Fallo al actualizar la adopción.' };
  }
};


export const DeleteAdoptionDAO = async (id) => {
  try {
    const deletedAdoption = await adoptionModel.findByIdAndDelete(id);

    if (!deletedAdoption) {
      return { status: 404, error: 'Adopción no encontrada para eliminar.' };
    }

    return { status: 200, response: deletedAdoption };
  } catch (error) {
    console.error('Error en el DAO al eliminar la adopción:', error);
    return { status: 500, error: 'Fallo al eliminar la adopción.' };
  }
};