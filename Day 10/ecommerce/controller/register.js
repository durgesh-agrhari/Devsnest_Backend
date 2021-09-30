// const User = require('../models/user');
const User = require("../models/mongo");

const bcrypt = require("bcrypt");
/**
 * 
 * @param {*} req 
 * @param {*} res
 * level 3 
(controllers - actual logic)
if email already exist
pass hash (if leak) //using any hashing lib (bcrypt)
email case insensitive (lowercas) 
 */
const saltRounds = 10;
const register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const alreadyExists = await User.findOne({ where: { email } });
    if (alreadyExists) {
      res.status(401).send("Email already exists");
    } else {
      //hash which line to use (what exactly it is)
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(password, salt);

      const newUser = new User({
        email: email.toLowerCase(),
        password: hash,
        fullName: "Knshi",
      });
      const savedUser = await newUser.save();
      res.status(201).send(savedUser);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("something went wrong");
  }
};

module.exports = register;
