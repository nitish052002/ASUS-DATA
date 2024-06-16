const joi = require("joi");

const USER_SCHEMA = joi.object({
  username: joi.string().required(),
  name: joi.string().required(),
  avatar_url: joi.string().required(),
  blog: joi.string().required(),
  location: joi.string().required(),
  bio: joi.string().required(),
  followers: joi.string().required(),
  public_repos: {
    type: Number,
  },
  public_gists: {
    type: Number,
  },
});




