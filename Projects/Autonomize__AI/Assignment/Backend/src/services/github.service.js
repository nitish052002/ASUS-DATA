const USER_COLLECTION = require("../models/User.model");
const axios = require("axios");

class GitHubUsersServices {
  async createNewUser(username) {
    const isUserExist = await USER_COLLECTION.findOne({ username: username });
    if (isUserExist) throw new Error("User already exist");

    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    const userData = response.data;

    const NEW_USER_DATA = {
      username: username,
      name: userData.name,
      avatar_url: userData.avatar_url,
      blog: userData.blog,
      location: userData.location,
      bio: userData.bio,
      followers: userData.followers,
      public_repos: userData.public_repos,
      public_gists: userData.public_gists,
    };

    const USER = await USER_COLLECTION.create(NEW_USER_DATA);
    return USER;
  }

  async deleteUser(username) {
    const isUserExist = await USER_COLLECTION.findOne({ username: username });
    if (!isUserExist) throw new Error("User Not Found-");

    const response = await USER_COLLECTION.deleteOne({ username: username });
    if (!response.acknowledged) {
      throw new Error("failed to delete user");
    }
    return {
      message: "Deleted user succesfully",
    };
  }

  async update(username, updatedData) {
    const isUserExist = await USER_COLLECTION.findOne({ username: username });
    if (!isUserExist) throw new Error("User Does Not Exist In Database");

    console.log(username, updatedData);
    await USER_COLLECTION.updateOne(
      { username: username },
      { $set: { ...updatedData } }
    );
    const NEW_USER_DATA = await USER_COLLECTION.findOne({ username: username });

    return NEW_USER_DATA;
  }

  async getUsersSortedByFilters(fieldName) {
    const isFieldExist = USER_COLLECTION.find({
      [fieldName]: { $exists: true },
    });

    const result = await USER_COLLECTION.find({}).sort({ [fieldName]: 1 });
    if (!result.length) throw new Error("No users exist in the database");
    return isFieldExist;
  }

  async getUsersBasedOnParticularField(filters) {
    console.log(filters);
    const USERS = USER_COLLECTION.find({
      ...filters,
    });

    if (!USERS) throw new Error("Not Found");

    return USERS;
  }
}

module.exports = GitHubUsersServices;
