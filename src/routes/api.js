const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController.js');
const adminController = require('../controllers/adminController');
const subAdminController = require('../controllers/subAdminController');
const postController = require('../controllers/postController');

// 1: User Controller
router.get('/user-create', userController.create);
router.get('/user-update', userController.update);
router.get('/user-deleted', userController.deleted);
router.get('/user-read', userController.read);

// 2: Admin Controller
router.get('/admin-create', adminController.create);
router.get('/admin-update', adminController.update);
router.get('/admin-deleted', adminController.deleted);
router.get('/admin-read', adminController.read);

// 3: Sub-Admin Controller
router.get('/subAdmin-create', subAdminController.create);
router.get('/subAdmin-update', subAdminController.update);
router.get('/subAdmin-deleted', subAdminController.deleted);
router.get('/subAdmin-read', subAdminController.read);

// 4: Post Controller
router.get('/post-create', postController.create);
router.get('/post-update', postController.update);
router.get('/post-deleted', postController.deleted);
router.get('/post-read', postController.read);

module.exports = router;
