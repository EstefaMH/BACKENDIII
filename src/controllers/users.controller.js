import { GetAllUsersDAO } from "../dao/users.dao.js";

export const GetAllUsersController = async (req, res) => {
  try {
    const users = await GetAllUsersDAO();
    
    if(users.status !== 200){
      return res.status(users.status).json({ error: users.error });
    }
    
    if (users.length === 0) {
      return res.status(404).json({ message: 'No se encontraron usuarios.' });
    }
    res.status(200).json({
      payload: 'Usuarios obtenidos exitosamente',
      data: users.reponse,
    });
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({
      error: 'Error interno del servidor al obtener las usuarios.',
    });
  }
};