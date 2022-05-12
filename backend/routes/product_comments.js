const express = require('express');
const router = express.Router();

// Controller
const ProductCommentsController = require('../controllers/product_comments');

// middleware
const verifyToken = require('../middleware/verify-token');

// Routes
//router.get('/', verifyToken, (req, res, next) => ProductCommentsController.index({ req, res, next }));
router.get('/:id', verifyToken, (req, res, next) => ProductCommentsController.show({ req, res, next }));
//router.put('/:id', verifyToken, (req, res, next) => ProductCommentsController.update({ req, res, next }));
router.delete('/:id', verifyToken, (req, res, next) => ProductCommentsController.remove({ req, res, next }));
router.post('/', verifyToken, (req, res, next) => ProductCommentsController.store({ req, res, next }));

module.exports = router;