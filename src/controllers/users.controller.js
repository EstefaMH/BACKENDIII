import { CreateUserDAO, DeleteUserDAO, GetAllUserDAO, UpdateUserDAO } from "../dao/users.dao.js";


export const getAllUsersController = async (req, res) => {
  try {
    const users = await GetAllUserDAO();
    
    if(users.status !== 200){
      return res.status(users.status).json({ error: users.error });
    }
    
    if (users.length === 0) {
      return res.status(404).json({ message: 'users not found' });
    }
    res.status(200).json({
      payload: 'Usuarios obtenidos exitosamente',
      data: users.reponse,
    });
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({
      error: 'Server ERROR to get all users',
    });
  }
};

export const createUserController = async (req, res) => {
   const { name , email, password, role } = req.body;
    try {
  
      const pet = await CreateUserDAO({name ,email, password, role} );
      
      if(pet.status !== 201){
        return res.status(pet.status).json({ error: pet.error });
      }
      
      res.status(201).json({
        payload: 'User created succesfully',
        data: pet.response
      });
    } catch (error) {
      console.error('Error to created user:', error);
      res.status(500).json({
        error: 'Server error to created user',
      });
    }
}

export const updateUserController = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, role } = req.body;

  try {
    const result = await UpdateUserDAO(id, { name, email, password, role });

    if (result.status !== 200) {
      return res.status(result.status).json({ error: result.error });
    }

    res.status(200).json({
      payload: 'User updated successfully',
      data: result.response,
    });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({
      error: 'Server error while updating user',
    });
  }
};

export const deleteUserController = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await DeleteUserDAO(id);

    if (result.status !== 200) {
      return res.status(result.status).json({ error: result.error });
    }

    res.status(200).json({
      payload: 'User deleted successfully',
      data: result.response,
    });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({
      error: 'Server error while deleting user',
    });
  }
};


