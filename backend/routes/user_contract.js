const express = require('express');
const router = express.Router();

// Controller
const UserContractController = require('../controllers/user_contract');

// middleware
const verifyToken = require('../middleware/verify-token');

// Routes
router.get('/', verifyToken, (req, res, next) => UserContractController.index({ req, res, next }));
router.get('/:id', verifyToken, (req, res, next) => UserContractController.show({ req, res, next }));
router.put('/:id', verifyToken, (req, res, next) => UserContractController.update({ req, res, next }));
router.delete('/:id', verifyToken, (req, res, next) => UserContractController.remove({ req, res, next }));
router.post('/', verifyToken, (req, res, next) => UserContractController.store({ req, res, next }));

module.exports = router;