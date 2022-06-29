const router = require('express').Router();
const {
  findAllUsers,
  findUserById,
  updateUser,
  createUser,
  createSecondUser,
  createThirdUser,
  deleteUser,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(findAllUsers).post(createUser).post(createSecondUser).post(createThirdUser);

// /api/users/:userId
router.route('/:userId').get(findUserById).delete(deleteUser).put(updateUser);

module.exports = router;