const router = require('express').Router();
const {handleGetAllUsers, handleCreateNewUser, handleGetUserById, handleUpdateUserById, handleDeleteUserById, handleLoginUserByUsernameAndPass} = require('../controllers/user.controller');

router
.route('/registration')
.get(handleGetAllUsers)
.post(handleCreateNewUser);

router
.route('/profile')
.post(handleGetUserById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserById);

router
.route('/login')
.post(handleLoginUserByUsernameAndPass);

// router
// .route('logout')
// .post(handler);

module.exports = router;