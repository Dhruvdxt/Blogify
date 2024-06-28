const router = require('express').Router();
const { handleCreateUser, handleGetUserById, handleUpdateUserById, handleDeleteUserById } = require('../../controllers/user.controller');


router
.route('/')
.post(handleCreateUser);

router
.route('/:id')
.get(handleGetUserById)
.put(handleUpdateUserById)
.delete(handleDeleteUserById);


module.exports = router;