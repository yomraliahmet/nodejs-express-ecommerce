const express = require('express');
const router = express.Router();

// Controller
const ContractController = require('../controllers/contract');

// middleware
const verifyToken = require('../middleware/verify-token');

// Routes
router.get('/', verifyToken, (req, res, next) => ContractController.index({ req, res, next }));
router.get('/:id', verifyToken, (req, res, next) => ContractController.show({ req, res, next }));
router.put('/:id', verifyToken, (req, res, next) => ContractController.update({ req, res, next }));
router.delete('/:id', verifyToken, (req, res, next) => ContractController.remove({ req, res, next }));
router.post('/', verifyToken, (req, res, next) => ContractController.store({ req, res, next }));

module.exports = router;