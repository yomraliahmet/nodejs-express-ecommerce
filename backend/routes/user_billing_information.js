const express = require('express');
const router = express.Router();

// Controller
const UserBillingInformationController = require('../controllers/user_billing_information');

// middleware
const verifyToken = require('../middleware/verify-token');

// Routes
router.get('/', verifyToken, (req, res, next) => UserBillingInformationController.index({ req, res, next }));
router.get('/:id', verifyToken, (req, res, next) => UserBillingInformationController.show({ req, res, next }));
router.put('/:id', verifyToken, (req, res, next) => UserBillingInformationController.update({ req, res, next }));
router.delete('/:id', verifyToken, (req, res, next) => UserBillingInformationController.remove({ req, res, next }));
router.post('/', verifyToken, (req, res, next) => UserBillingInformationController.store({ req, res, next }));

module.exports = router;