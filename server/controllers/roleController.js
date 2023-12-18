// controllers/roleController.js
const { Role } = require('../models');

exports.getAllRoles = async (req, res) => {
  try {
    const roles = await Role.findAll();
    res.json(roles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getRoleById = async (req, res) => {
  try {
    const roles = await Role.findByPk(req.param.id);
    res.json(roles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createRole = async (req, res) => {
  try {
    const roles = await Role.create({
      name: req.body.name
    });
    res.json(roles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteRole = async (req, res) => {
  try {
    const roles = await Role.destroy({
      where: { id: req.param.id }
    });
    res.json(roles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateRole = async (req, res) => {
  try {
    const roles = await Role.update(
      {
        name: req.body.name
      },
      {
        where: { id: req.param.id }
      }
    );
    res.json(roles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};