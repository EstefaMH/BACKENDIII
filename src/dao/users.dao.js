import UserModel from "../models/user.model.js";


export const GetAllUserDAO = async () => {
  try {
    const users = await UserModel.find().lean();
    return {status : 200 , reponse : users};
  } catch (error) {
    console.error('Error DAO to get all users :', error);
    return {status : 500 , error : 'Error to get all users in the DB.'};
  }
};


export const CreateUserDAO = async (user) =>{
   try {
    const savedUser = await UserModel.create(user);
    return { status: 201, response: savedUser };
  } catch (error) {
    console.error('Error DAO to create user:', error);
    return { status: 500, error: 'Error to create user in the DB.' };
  } 
}


export const DeleteUserDAO = async (id) => {
  try {
    const deletedUser = await UserModel.findByIdAndDelete(id);

    if (!deletedUser) {
      return {
        status: 404,
        error: "User not found",
      };
    }

    return {
      status: 200,
      response: deletedUser,
    };
  } catch (error) {
    console.error("Error deleting user:", error);
    return {
      status: 500,
      error: "Database error while deleting user",
    };
  }
};

export const UpdateUserDAO = async (id, userData) => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(id, userData, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      return {
        status: 404,
        error: "User not found",
      };
    }

    return {
      status: 200,
      response: updatedUser,
    };
  } catch (error) {
    console.error("Error updating user:", error);
    return {
      status: 500,
      error: "Database error while updating user",
    };
  }
};
