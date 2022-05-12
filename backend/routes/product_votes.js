const express = require('express');
const router = express.Router();

// Controller
const ProductVotesController = require('../controllers/product_votes');

// middleware
const verifyToken = require('../middleware/verify-token');

// Routes
router.get('/', verifyToken, (req, res, next) => ProductVotesController.index({ req, res, next }));
router.get('/:id', verifyToken, (req, res, next) => ProductVotesController.show({ req, res, next }));
router.put('/:id', verifyToken, (req, res, next) => ProductVotesController.update({ req, res, next }));
router.delete('/:id', verifyToken, (req, res, next) => ProductVotesController.remove({ req, res, next }));
router.post('/', verifyToken, (req, res, next) => ProductVotesController.store({ req, res, next }));

module.exports = router;