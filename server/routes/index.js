// routes/index.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const roleController = require('../controllers/roleController');

router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUser);
router.get('/login', userController.signIn);
router.get('/roles', roleController.getAllRoles);
router.get('/roles/:id', roleController.getRoleById);
router.post('/roles', roleController.createRole);
router.delete('/roles/:id', roleController.deleteRole);
router.put('/roles/:id', roleController.updateRole);

module.exports = router;
