const { getUserNameController, getAllUsersController, getUserByIdController, createUserController, deleteUserController, updateUserController } = require("../controllers/usersController");


const getUserHandler = async (req, res) => {
    const { name } = req.query;
    try {
      const result = name ? await getUserNameController(name) : await getAllUsersController()
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json({error: error.message});
    }
  };

  const getUserByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
      const result = await getUserByIdController(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };

  const createUserHandler = async (req, res) => {
    const { name, gender , age , email , phone, adress, city, zipCode } = req.body;
    try {
      const result = await createUserController(name, gender , age , email , phone, adress, city, zipCode);
      res.status(201).json(result);
    } catch (error) {
      res.status(404).json({error: error.message});
    }
  };

  const deleteUserHandler = async (req,res) => {
    const {id} = req.params
    try {
      const result = await deleteUserController(id)
      res.status(200).json(result)
    } catch (error) {
      res.status(404).json({error: error.message});
    }
  }
  const updateUserHandler = async (req,res) => {
    const {id} = req.params;
    const { name , email , picture, role} = req.body
    
    try {
      const result = (await updateUserController(id, { name, email , picture, role}))
      res.status(200).json(result)
    } catch (error) {
      res.status(404).json({error: error.message});
    }
  }

  module.exports = {
    createUserHandler,
    getUserByIdHandler,
    getUserHandler,
    deleteUserHandler,
    updateUserHandler
  }
