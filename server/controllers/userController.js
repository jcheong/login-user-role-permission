// controllers/userController.js
const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.json(user);    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });    
  }
}

exports.signIn = async (req, res) => {
  try {
    console.log(req)
    const user = await User.findOne({
      where: { username: req.body.username }
    })
    .then((user) => {
      console.log("User found: ", user);
      if (user === null) {
        res.json(false);
      }
      bcrypt.compare(req.body.password, user.password, function (err, result) {
        if (result === true) {
          console.log("Valid!");
          let token = jwt.sign({ username: user.username }, 'eccolinc', { expiresIn: 129600 });
          res.json({
            sucess: true,
            err: null,
            token
          })
        }
        else {
          console.log("Entered Password and Hash do not match!");
          res.status(401).json({
            sucess: false,
            token: null,
            err: 'Entered Password and Hash do not match!'
          });
        }
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });    
  }
}

exports.createUser = async (req, res) => {
  try {
    const users = await User.create({
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password, 10),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      roleId: req.body.roleId,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });    
  }
}

exports.deleteUser = async (req, res) => {
  try {
    const users = await User.destroy({
      where: { id: req.params.id }
  });
    res.json(users);    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });    
  }
}

exports.updateUser = async (req, res) => {
  try {
    const users = await User.update(
      {
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        roleId: req.body.roleId,
        updatedAt: new Date()
      },
      {
        where: { id: req.params.id }
      }
    );
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });    
  }
}