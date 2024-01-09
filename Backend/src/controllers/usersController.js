const { User } = require("../db/db.js");

const getAllUsersController = async () => {
  const data = await User.findAll();
  return data;
};

const getUserNameController = async (name) => {
  const data = await getAllUsersController();
  const dataName = data.filter((e) =>
    e.name.toLowerCase().includes(name.toLowerCase())
  );
  return dataName;
};

const getUserByIdController = async (id) => {
  const data = await User.findByPk(id);
  return data;
};

const createUserController = async (name, email, picture, role) => {
  return await User.create({ name, email, picture, role });
};

const updateUserController = async (id, { name, email, picture, role }) => {
  const user = await User.findByPk(id);
  await user.update({ name, email, picture, role });
  return user;
};

const deleteUserController = async (id) => {
  const userDelete = await User.findByPk(id);
  await userDelete.destroy({
    where: { id: id },
  });
  return `el usuario con el id: ${id}, ha sido eliminado`;
};

module.exports = {
  getAllUsersController,
  getUserNameController,
  getUserByIdController,
  createUserController,
  updateUserController,
  deleteUserController,
};
