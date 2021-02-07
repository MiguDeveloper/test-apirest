// * api raiz: /api/users

const { Router } = require('express');
const { getUsers, getUserById, postUser } = require('../controllers/users');

const router = Router();

router.get('/', [], getUsers);
router.get('/:id', [], getUserById);
router.post('/', [], postUser);

module.exports = router;
