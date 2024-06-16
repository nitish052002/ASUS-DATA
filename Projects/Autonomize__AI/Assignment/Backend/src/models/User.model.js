const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },

    name: {
      type: String,
    },
    avatar_url: {
      type: String,
      required: true,
    },
    blog: {
      type: String,
    },
    location: {
      type: String,
    },
    bio: {
      type: String,
    },
    followers: {
      type: Number,
    },
    public_repos: {
      type: Number,
    },
    public_gists: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const USER_MODEL  = mongoose.model("users", userSchema);
module.exports =  USER_MODEL;
