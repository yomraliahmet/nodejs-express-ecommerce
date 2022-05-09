const express = require('express');
const router = express.Router();

// Controller
const ProductCategoryController = require('../controllers/product_category');

// middleware
const verifyToken = require('../middleware/verify-token');

// Routes
router.get('/', verifyToken, (req, res, next) => ProductCategoryController.index({ req, res, next }));
router.get('/:id', verifyToken, (req, res, next) => ProductCategoryController.show({ req, res, next }));
router.put('/:id', verifyToken, (req, res, next) => ProductCategoryController.update({ req, res, next }));
router.delete('/:id', verifyToken, (req, res, next) => ProductCategoryController.remove({ req, res, next }));
router.post('/', verifyToken, (req, res, next) => ProductCategoryController.store({ req, res, next }));

module.exports = router;