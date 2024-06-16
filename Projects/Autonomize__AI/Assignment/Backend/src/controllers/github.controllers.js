const GitHubUsersServices = require("../services/github.service");

const GitHubUsersServicesInstance = new GitHubUsersServices();

const NewUserController = async (req, res) => {
  const { username } = req.query;
  try {
    const user = await GitHubUsersServicesInstance.createNewUser(username);
    res.status(200).send({
      data: user,
      message: "User created succesfully",
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
};

const DeleteUserController = async (req, res) => {
  const { username } = req.query;
  try {
    const result = await GitHubUsersServicesInstance.deleteUser(username);
    res.status(200).send({
      user: username,
      message: result.message,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
};


const updateUserDetail = async (req, res) => {
  const { username } = req.query;

  try {
    const result = await GitHubUsersServicesInstance.update(username, req.body);
    res.status(200).send({
      message: "Succuessfully updated",
      userdata: result,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
};

const getUserDetailByFieldNames = async (req, res) => {
  const filters = JSON.stringify(req.body);
  console.log(filters);

  try {
    const result = await GitHubUsersServicesInstance.getUsersBasedOnParticularField( filters );
    res.status(200).send({
      message: "Succuessfull",
      userdata: result,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
};




const searchUserByFitlerController = async (req, res) => {
  try {
    const { field } = req.params;
    if (!field) throw new Error("Fieldname reuired");
    const data = await GitHubUsersServicesInstance.getUsersSortedByFilters(field);
    res.status(200).send({
      users: data,
      total: data.length,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
};

module.exports = {
  NewUserController,
  DeleteUserController,
  getAllUsersController,
  searchUserByFitlerController,
  updateUserDetail,
  getUserDetailByFieldNames,
};
