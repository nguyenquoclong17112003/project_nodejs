const bcrypt = require("bcrypt");
const User = require("../models/User");

const authController = {
  //REGISTER
  registerUser: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.password, salt);

      // Create new User
      const newUser = await new User({
        username: req.body.username,
        email: req.body.email,
        password: hashed,
      });

      // Save to Database
      const user = await newUser.save();
      console.log(user);
      return res.status(200).json(user);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  // Login User
  loginUser: async (req, res) => {
    try {
      const user = await new User.findOne({ username: req.body.username });
      if (!user) {
        res.status(404).json("Wrong username");
      }
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword) {
        res.status(404).json("Wrong password");
      }
      if (user && validPassword) {
        res.status(200).json(user);
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};

module.exports = authController;
